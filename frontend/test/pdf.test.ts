import { describe, expect, it } from "vitest";
import { PdfDoc, encode, fit, textWidth, winAnsi } from "../src/pdf";

const ascii = (bytes: Uint8Array) => new TextDecoder("latin1").decode(bytes);

describe("pdf", () => {
  it("encodes text in Windows-1252", () => {
    expect(winAnsi("€".codePointAt(0)!)).toBe(0x80);
    expect(winAnsi("ä".codePointAt(0)!)).toBe(0xe4);
    expect(winAnsi("–".codePointAt(0)!)).toBe(0x96);
    expect(encode("a b")).toEqual([0x61, 0x20, 0x62]); // narrow no-break space
    expect(encode("≥")).toEqual([0x3f]); // not in the base fonts
  });

  it("measures text with the Helvetica widths", () => {
    expect(textWidth("Hello", "regular", 10)).toBeCloseTo(22.78);
    expect(textWidth("Hello", "bold", 10)).toBeGreaterThan(textWidth("Hello", "regular", 10));
  });

  it("cuts a text that does not fit", () => {
    expect(fit("Short", 100)).toBe("Short");
    const cut = fit("A rather long vehicle name", 60);
    expect(cut.endsWith("…")).toBe(true);
    expect(textWidth(cut)).toBeLessThanOrEqual(60);
  });

  it("writes a PDF whose cross-reference table points at its objects", () => {
    const doc = new PdfDoc("Test");
    doc.text(50, 50, "Grüße 12,34 €", { font: "bold", size: 12 });
    doc.addPage();
    doc.line(50, 60, 200, 60);
    doc.box(50, 70, 100, 20);
    const out = ascii(doc.output());
    expect(out.startsWith("%PDF-1.4\n")).toBe(true);
    expect(out.trimEnd().endsWith("%%EOF")).toBe(true);
    expect(out).toContain("/Count 2");
    expect(out).toContain(`<${encode("Grüße 12,34 €").map((b) => b.toString(16).padStart(2, "0")).join("")}>`);

    const startxref = Number(out.match(/startxref\n(\d+)/)![1]);
    expect(out.slice(startxref, startxref + 4)).toBe("xref");
    const offsets = [...out.slice(startxref).matchAll(/^(\d{10}) 00000 n $/gm)].map((m) => Number(m[1]));
    expect(offsets).toHaveLength(9); // catalog, pages, 2 fonts, info, 2 x (page + contents)
    offsets.forEach((o, i) => expect(out.slice(o).startsWith(`${i + 1} 0 obj`)).toBe(true));
  });

  it("gives each content stream its length", () => {
    const doc = new PdfDoc();
    doc.text(10, 10, "x");
    const out = ascii(doc.output());
    const m = out.match(/<< \/Length (\d+) >>\nstream\n([\s\S]*?)\nendstream/)!;
    expect(m[2].length).toBe(Number(m[1]));
  });
});
