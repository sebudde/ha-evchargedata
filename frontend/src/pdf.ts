// Minimal PDF writer, no dependency: A4 pages with text in the PDF base fonts (Helvetica and
// Helvetica-Bold, Windows-1252 text), lines and grey boxes. Enough for a printable statement.

export type Font = "regular" | "bold";
export type Align = "left" | "right";

export interface TextStyle {
  font?: Font;
  size?: number;
  align?: Align;
  gray?: number; // 0 = black, 1 = white
}

// Glyph widths (1/1000 em) of the base fonts for the Windows-1252 codes 32-255.
const REGULAR = [
  278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278,
  556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584, 584, 556,
  1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778,
  667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556,
  333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556,
  556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584, 761,
  556, 0, 222, 556, 333, 1000, 556, 556, 333, 1000, 667, 333, 1000, 0, 611, 0,
  0, 222, 222, 333, 333, 350, 556, 1000, 333, 1000, 500, 333, 944, 0, 500, 667,
  278, 333, 556, 556, 556, 556, 260, 556, 333, 737, 370, 556, 584, 333, 737, 333,
  400, 584, 333, 333, 333, 556, 537, 278, 333, 333, 365, 556, 834, 834, 834, 611,
  667, 667, 667, 667, 667, 667, 1000, 722, 667, 667, 667, 667, 278, 278, 278, 278,
  722, 722, 778, 778, 778, 778, 778, 584, 778, 722, 722, 722, 722, 667, 667, 611,
  556, 556, 556, 556, 556, 556, 889, 500, 556, 556, 556, 556, 278, 278, 278, 278,
  556, 556, 556, 556, 556, 556, 556, 584, 611, 556, 556, 556, 556, 500, 556, 500,
];
const BOLD = [
  278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333, 278, 278,
  556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 333, 333, 584, 584, 584, 611,
  975, 722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833, 722, 778,
  667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 333, 278, 333, 584, 556,
  333, 556, 611, 556, 611, 556, 333, 611, 611, 278, 278, 556, 278, 889, 611, 611,
  611, 611, 389, 556, 333, 611, 556, 778, 556, 556, 500, 389, 280, 389, 584, 761,
  556, 0, 278, 556, 500, 1000, 556, 556, 333, 1000, 667, 333, 1000, 0, 611, 0,
  0, 278, 278, 500, 500, 350, 556, 1000, 333, 1000, 556, 333, 944, 0, 500, 667,
  278, 333, 556, 556, 556, 556, 280, 556, 333, 737, 370, 556, 584, 333, 737, 333,
  400, 584, 333, 333, 333, 611, 556, 278, 333, 333, 365, 556, 834, 834, 834, 611,
  722, 722, 722, 722, 722, 722, 1000, 722, 667, 667, 667, 667, 278, 278, 278, 278,
  722, 722, 778, 778, 778, 778, 778, 584, 778, 722, 722, 722, 722, 667, 667, 611,
  556, 556, 556, 556, 556, 556, 889, 556, 556, 556, 556, 556, 278, 278, 278, 278,
  611, 611, 611, 611, 611, 611, 611, 584, 611, 611, 611, 611, 611, 556, 611, 556,
];

// Unicode code points of the Windows-1252 bytes 0x80-0x9F (0: unused byte).
const HIGH = [
  0x20ac, 0, 0x201a, 0x0192, 0x201e, 0x2026, 0x2020, 0x2021, 0x02c6, 0x2030, 0x0160, 0x2039, 0x0152, 0, 0x017d, 0,
  0, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022, 0x2013, 0x2014, 0x02dc, 0x2122, 0x0161, 0x203a, 0x0153, 0, 0x017e, 0x0178,
];
const SPACES = new Set([0x09, 0x0a, 0x0d, 0x2007, 0x2009, 0x202f]);
const QUESTION = 0x3f;

/** The Windows-1252 byte of a code point; "?" for a character the base fonts cannot show. */
export function winAnsi(cp: number): number {
  if ((cp >= 0x20 && cp <= 0x7e) || (cp >= 0xa0 && cp <= 0xff)) return cp;
  if (SPACES.has(cp)) return 0x20;
  const i = HIGH.indexOf(cp);
  return cp > 0 && i >= 0 ? 0x80 + i : QUESTION;
}

export function encode(text: string): number[] {
  return Array.from(text, (ch) => winAnsi(ch.codePointAt(0)!));
}

/** Width of a text in points. */
export function textWidth(text: string, font: Font = "regular", size = 10): number {
  const table = font === "bold" ? BOLD : REGULAR;
  return (encode(text).reduce((sum, b) => sum + table[b - 32], 0) * size) / 1000;
}

/** The text, cut with "…" so that it fits in `width` points. */
export function fit(text: string, width: number, font: Font = "regular", size = 10): string {
  if (textWidth(text, font, size) <= width) return text;
  let cut = text;
  while (cut && textWidth(`${cut}…`, font, size) > width) cut = cut.slice(0, -1);
  return `${cut.trimEnd()}…`;
}

const hex = (bytes: number[]) => bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
const num = (v: number) => String(Math.round(v * 100) / 100);

/** UTF-16BE hex string (with its byte order mark) for the document information. */
const infoText = (text: string) => {
  const bytes = [0xfe, 0xff];
  for (let i = 0; i < text.length; i++) bytes.push(text.charCodeAt(i) >> 8, text.charCodeAt(i) & 0xff);
  return `<${hex(bytes)}>`;
};

/** A4 document; coordinates in points from the top left corner of the page. */
export class PdfDoc {
  readonly width = 595.28;
  readonly height = 841.89;
  private pages: string[][] = [];

  constructor(private title = "") {}

  get pageCount() {
    return this.pages.length;
  }

  addPage() {
    this.pages.push([]);
  }

  /** Page index to draw on (default: the last page). */
  private ops(page?: number) {
    if (!this.pages.length) this.addPage();
    return this.pages[page ?? this.pages.length - 1];
  }

  text(x: number, y: number, text: string, style: TextStyle = {}, page?: number) {
    const { font = "regular", size = 10, align = "left", gray = 0 } = style;
    const left = align === "right" ? x - textWidth(text, font, size) : x;
    const f = font === "bold" ? "F2" : "F1";
    this.ops(page).push(
      `BT ${num(gray)} g /${f} ${num(size)} Tf ${num(left)} ${num(this.height - y)} Td <${hex(encode(text))}> Tj ET`,
    );
  }

  line(x1: number, y1: number, x2: number, y2: number, width = 0.5, gray = 0.6, page?: number) {
    const h = this.height;
    this.ops(page).push(`${num(gray)} G ${num(width)} w ${num(x1)} ${num(h - y1)} m ${num(x2)} ${num(h - y2)} l S`);
  }

  /** Filled box; y is its top edge. */
  box(x: number, y: number, w: number, h: number, gray = 0.93, page?: number) {
    this.ops(page).push(`${num(gray)} g ${num(x)} ${num(this.height - y - h)} ${num(w)} ${num(h)} re f`);
  }

  /** The PDF file. */
  output(): Uint8Array {
    if (!this.pages.length) this.addPage();
    const objects: string[] = [];
    const add = (body: string) => objects.push(body);
    const n = this.pages.length;
    // Fixed numbers: 1 catalog, 2 page tree, 3 and 4 fonts, 5 info; then a page and its contents.
    const kids = Array.from({ length: n }, (_, i) => `${6 + 2 * i} 0 R`).join(" ");
    add("<< /Type /Catalog /Pages 2 0 R >>");
    add(`<< /Type /Pages /Kids [${kids}] /Count ${n} >>`);
    add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
    add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>");
    add(`<< /Producer ${infoText("EVChargeData")} /Title ${infoText(this.title)} >>`);
    this.pages.forEach((ops, i) => {
      const content = ops.join("\n");
      add(
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${num(this.width)} ${num(this.height)}] ` +
          `/Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${7 + 2 * i} 0 R >>`,
      );
      add(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
    });
    // Every character is ASCII (text is written as hex), so string offsets are byte offsets.
    let out = "%PDF-1.4\n";
    const offsets = objects.map((body, i) => {
      const at = out.length;
      out += `${i + 1} 0 obj\n${body}\nendobj\n`;
      return at;
    });
    const xref = out.length;
    out += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    out += offsets.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("");
    out += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info 5 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
    return new TextEncoder().encode(out);
  }
}
