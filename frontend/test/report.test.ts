import { describe, expect, it } from "vitest";
import type { Session } from "../src/api";
import { encode } from "../src/pdf";
import { statement, statementFileName, statementPdf, type StatementInput } from "../src/report";

const NOV_3 = Date.UTC(2026, 10, 3, 21, 0) / 1000; // 22:00 in Berlin

function sess(id: string, start: number, kwh: number, cost: number | null, extra: Partial<Session> = {}): Session {
  return {
    id,
    charger_id: "c",
    vehicle_id: "v",
    plugged_at: start,
    charge_start: start,
    charge_end: start + 3 * 3600,
    unplugged_at: start + 4 * 3600,
    charging_s: 3 * 3600,
    energy_kwh: kwh,
    cost,
    off_peak: { kwh: 0, cost: null },
    peak: { kwh: 0, cost: null },
    by_price: {},
    has_off_peak_source: false,
    soc_start: null,
    soc_end: null,
    curve: [],
    estimated: false,
    edited: false,
    open: false,
    vehicle_name: "Alpine A290 GTS",
    charger_name: "Wallbox",
    ...extra,
  };
}

const hexOf = (text: string) => encode(text).map((b) => b.toString(16).padStart(2, "0")).join("");
const ascii = (bytes: Uint8Array) => new TextDecoder("latin1").decode(bytes);

const input = (over: Partial<StatementInput> = {}): StatementInput => ({
  kind: "reimbursement",
  month: "2026-11",
  sessions: [sess("b", NOV_3 + 86400, 5, 1.6), sess("a", NOV_3, 10, 3.1)],
  vehicle: "Alpine A290 GTS",
  price: 0.34,
  currency: "EUR",
  lang: "de",
  locale: "de-DE",
  timeZone: "Europe/Berlin",
  now: NOV_3,
  ...over,
});

describe("statement", () => {
  it("reimburses the energy at the flat price, oldest session first", () => {
    const s = statement("reimbursement", [sess("b", NOV_3 + 86400, 5, 1.6), sess("a", NOV_3, 10, 3.1)], 0.34);
    expect(s.lines.map((l) => l.kwh)).toEqual([10, 5]);
    expect(s.lines[0].amount).toBeCloseTo(3.4);
    expect(s.lines[0].price).toBe(0.34);
    expect(s.amount).toBeCloseTo(5.1);
    expect(s.kwh).toBe(15);
  });

  it("totals the recorded cost, like the month row", () => {
    const s = statement("cost", [sess("a", NOV_3, 10, 3.1), sess("b", NOV_3 + 60, 5, 1.6)], 0.34);
    expect(s.amount).toBeCloseTo(4.7);
    expect(s.lines[0].price).toBeCloseTo(0.31); // the session's mean price
    expect(s.unpriced).toBe(0);
  });

  it("leaves unpriced sessions out of the cost total and counts them", () => {
    const s = statement("cost", [sess("a", NOV_3, 10, 3.1), sess("b", NOV_3 + 60, 5, null)], null);
    expect(s.amount).toBeCloseTo(3.1);
    expect(s.unpriced).toBe(1);
    expect(statement("cost", [sess("b", NOV_3, 5, null)], null).amount).toBeNull();
  });

  it("skips sessions without energy and flags estimated costs", () => {
    const s = statement("cost", [sess("a", NOV_3, 0, 0), sess("b", NOV_3 + 60, 5, 1.5, { estimated: true })], null);
    expect(s.lines).toHaveLength(1);
    expect(s.estimated).toBe(true);
  });

  it("has no reimbursement without a price", () => {
    expect(statement("reimbursement", [sess("a", NOV_3, 10, 3.1)], null).amount).toBeNull();
  });
});

describe("statementPdf", () => {
  it("names the file after the statement and month", () => {
    expect(statementFileName("reimbursement", "2026-11", "de")).toBe("Ladestrom-Erstattung-2026-11.pdf");
    expect(statementFileName("cost", "2026-11", "de")).toBe("Ladestrom-Abrechnung-2026-11.pdf");
    expect(statementFileName("cost", "2026-11", "en")).toBe("Charging-cost-statement-2026-11.pdf");
  });

  it("writes the title, the rate and the total in German", () => {
    const out = ascii(statementPdf(input()));
    expect(out.startsWith("%PDF-1.4")).toBe(true);
    for (const text of ["Ladestrom-Erstattung", "November 2026", "0,34 € pro kWh", "5,10 €", "15,00", "03.11.2026 22:00", "04.11.2026 01:00"]) {
      expect(out).toContain(hexOf(text));
    }
  });

  it("totals the landlord statement with the recorded cost", () => {
    const out = ascii(statementPdf(input({ kind: "cost", price: null })));
    expect(out).toContain(hexOf("Ladestrom-Abrechnung"));
    expect(out).toContain(hexOf("4,70 €"));
    expect(out).not.toContain(hexOf("Erstattungssatz"));
  });

  it("adds a vehicle column for all vehicles", () => {
    const out = ascii(statementPdf(input({ vehicle: null })));
    expect(out).toContain(hexOf("Alle Fahrzeuge"));
    expect(out).toContain(hexOf("Fahrzeug"));
  });

  it("shows the name on both statements and the plate on the employer one", () => {
    const who = { holder: "Seb Budde", vehicleId: "v", plates: { v: "MI-AB 123" } };
    const employer = ascii(statementPdf(input(who)));
    expect(employer).toContain(hexOf("Seb Budde"));
    expect(employer).toContain(hexOf("Kennzeichen:"));
    expect(employer).toContain(hexOf("MI-AB 123"));
    const landlord = ascii(statementPdf(input({ ...who, kind: "cost", price: null })));
    expect(landlord).toContain(hexOf("Seb Budde"));
    expect(landlord).not.toContain(hexOf("MI-AB 123"));
  });

  it("leaves out an empty name and a missing plate", () => {
    const out = ascii(statementPdf(input({ holder: "  ", vehicleId: "v", plates: {} })));
    expect(out).not.toContain(hexOf("Name:"));
    expect(out).not.toContain(hexOf("Kennzeichen:"));
  });

  it("names each car by its plate in the vehicle column of the employer statement", () => {
    const out = ascii(statementPdf(input({ vehicle: null, plates: { v: "MI-AB 123" } })));
    expect(out).toContain(hexOf("MI-AB 123"));
    const landlord = ascii(statementPdf(input({ kind: "cost", vehicle: null, plates: { v: "MI-AB 123" } })));
    expect(landlord).not.toContain(hexOf("MI-AB 123"));
    expect(landlord).toContain(hexOf("Alpine A290 GTS"));
  });

  it("shows prices per kWh with two decimals and no word about Home Assistant", () => {
    const out = ascii(statementPdf(input({ kind: "cost", price: null, sessions: [sess("a", NOV_3, 9.87, 3.06)] })));
    expect(out).toContain(hexOf("0,31 €"));
    expect(out).not.toContain(hexOf("0,3100"));
    expect(out).not.toContain(hexOf("Home Assistant"));
    expect(ascii(statementPdf(input()))).not.toContain(hexOf("Home Assistant"));
  });

  it("continues the table on further pages", () => {
    const many = Array.from({ length: 50 }, (_, i) => sess(String(i), NOV_3 + i * 3600 * 9, 4, 1.2));
    const out = ascii(statementPdf(input({ sessions: many })));
    expect(out).toContain("/Count 2");
    expect(out).toContain(hexOf("Seite 2 von 2"));
  });
});
