// Monthly statement as a PDF: the reimbursement at a flat price per kWh (e.g. for an employer)
// or the recorded cost (e.g. for a landlord), one line per charging session.
import type { Session } from "./api";
import { DASH, formatCost, formatDay, formatTime } from "./format";
import { t, type Key, type Lang } from "./i18n";
import { PdfDoc, fit, textWidth } from "./pdf";

export type StatementKind = "reimbursement" | "cost";

export interface StatementInput {
  kind: StatementKind;
  month: string; // "YYYY-MM"
  sessions: Session[]; // finished sessions of the month (any order)
  vehicle: string | null; // vehicle name; null = all vehicles (a vehicle column instead)
  price: number | null; // reimbursement per kWh (kind "reimbursement")
  currency: string;
  lang: Lang;
  locale: string;
  timeZone: string;
  now: number; // Unix seconds (creation date)
}

export interface StatementLine {
  start: number | null;
  end: number | null;
  vehicle: string | null;
  charger: string | null;
  kwh: number;
  price: number | null; // per kWh: the flat price, or the session's mean price
  amount: number | null;
  estimated: boolean;
}

export interface Statement {
  lines: StatementLine[];
  kwh: number;
  amount: number | null; // null: no line has an amount
  unpriced: number; // lines without an amount (cost statement only)
  estimated: boolean;
}

const startOf = (s: Session) => s.charge_start ?? s.plugged_at;

/** Lines and totals: sessions with energy, oldest first. The reimbursement is the energy at the
 * flat price; the cost total is the recorded cost, the same figure as the Statistics month row. */
export function statement(kind: StatementKind, sessions: Session[], price: number | null): Statement {
  const charged = sessions
    .filter((s) => s.energy_kwh > 0)
    .sort((a, b) => (startOf(a) ?? 0) - (startOf(b) ?? 0));
  const lines = charged.map((s): StatementLine => {
    const base = {
      start: startOf(s),
      end: s.charge_end ?? s.unplugged_at,
      vehicle: s.vehicle_name ?? null,
      charger: s.charger_name ?? null,
      kwh: s.energy_kwh,
    };
    if (kind === "reimbursement") {
      return { ...base, price, amount: price == null ? null : s.energy_kwh * price, estimated: false };
    }
    return {
      ...base,
      price: s.cost == null ? null : s.cost / s.energy_kwh,
      amount: s.cost,
      estimated: s.cost != null && s.estimated,
    };
  });
  const kwh = lines.reduce((sum, l) => sum + l.kwh, 0);
  const priced = lines.filter((l) => l.amount != null);
  const amount =
    kind === "reimbursement"
      ? price == null ? null : kwh * price
      : priced.length ? priced.reduce((sum, l) => sum + l.amount!, 0) : null;
  return {
    lines,
    kwh,
    amount,
    unpriced: lines.length - priced.length,
    estimated: lines.some((l) => l.estimated),
  };
}

const TITLES: Record<StatementKind, Key> = {
  reimbursement: "pdf_title_reimbursement",
  cost: "pdf_title_cost",
};

/** "Ladestrom-Erstattung-2026-11.pdf". */
export function statementFileName(kind: StatementKind, month: string, lang: Lang): string {
  return `${t(lang, TITLES[kind]).replace(/[\s/]+/g, "-")}-${month}.pdf`;
}

const MARGIN = 50;
const ROW = 17;
const SIZE = 9.5;
const BOTTOM = 70; // space kept for the footer

interface Column {
  label: Key;
  width: number; // 0: takes the space left
  align: "left" | "right";
  cell: (l: StatementLine, i: number) => string;
}

/** The statement as a PDF file. */
export function statementPdf(input: StatementInput): Uint8Array {
  const { kind, month, lang, locale, timeZone, currency } = input;
  const tr = (key: Key, vars?: Record<string, string>) => t(lang, key, vars);
  const data = statement(kind, input.sessions, input.price);
  const title = tr(TITLES[kind]);
  const monthName = new Date(`${month}-15T12:00:00Z`).toLocaleString(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const plain = (s: string) => s.replace(/[  ]/g, " ");
  const kwhText = (v: number) =>
    plain(v.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  const money = (v: number | null) => formatCost(v, currency, locale);
  // The flat rate as entered (0,34 €); the mean prices of the cost statement all with 4 decimals.
  const rate = (v: number | null, digits = kind === "cost" ? 4 : 2) =>
    v == null
      ? DASH
      : plain(
          new Intl.NumberFormat(locale, {
            style: "currency",
            currency,
            minimumFractionDigits: digits,
            maximumFractionDigits: 4,
          }).format(v),
        );
  const date = (ts: number, zone = timeZone) =>
    new Intl.DateTimeFormat(locale, { day: "2-digit", month: "2-digit", year: "numeric", timeZone: zone }).format(
      new Date(ts * 1000),
    );
  const time = (ts: number | null) => (ts == null ? DASH : formatTime(ts, locale, timeZone));
  const endText = (l: StatementLine) => {
    if (l.end == null) return DASH;
    const sameDay = l.start != null && formatDay(l.start, locale, timeZone) === formatDay(l.end, locale, timeZone);
    return sameDay ? time(l.end) : `${formatDay(l.end, locale, timeZone)} ${time(l.end)}`;
  };

  const columns: Column[] = [
    { label: "col_nr", width: 24, align: "right", cell: (_, i) => String(i + 1) },
    { label: "col_date", width: 66, align: "left", cell: (l) => (l.start == null ? DASH : date(l.start)) },
    { label: "col_start", width: 42, align: "left", cell: (l) => time(l.start) },
    { label: "col_end", width: input.vehicle == null ? 72 : 0, align: "left", cell: endText },
    ...(input.vehicle == null
      ? [{ label: "col_vehicle" as Key, width: 0, align: "left" as const, cell: (l: StatementLine) => l.vehicle ?? DASH }]
      : []),
    { label: "col_kwh", width: 54, align: "right", cell: (l) => kwhText(l.kwh) },
    { label: "col_price", width: 64, align: "right", cell: (l) => rate(l.price) },
    {
      label: "col_amount",
      width: 68,
      align: "right",
      cell: (l) => (l.amount == null ? DASH : `${money(l.amount)}${l.estimated ? " *" : ""}`),
    },
  ];
  const doc = new PdfDoc(`${title} ${monthName}`);
  const contentWidth = doc.width - 2 * MARGIN;
  const fixed = columns.reduce((sum, c) => sum + c.width, 0);
  const flex = columns.filter((c) => !c.width).length;
  let x = MARGIN;
  const placed = columns.map((c) => {
    const width = c.width || (contentWidth - fixed) / flex;
    const at = { ...c, x, width };
    x += width;
    return at;
  });
  const cellX = (c: (typeof placed)[number]) => (c.align === "right" ? c.x + c.width - 4 : c.x + 4);
  const cellText = (c: (typeof placed)[number], text: string, font: "regular" | "bold" = "regular") =>
    c.align === "right" ? text : fit(text, c.width - 8, font, SIZE);

  // Header: title, month and what the statement covers.
  doc.addPage();
  doc.text(MARGIN, 72, title, { font: "bold", size: 18 });
  doc.text(MARGIN, 94, monthName, { size: 13, gray: 0.25 });
  const [year, mon] = month.split("-").map(Number);
  const first = Date.UTC(year, mon - 1, 1) / 1000;
  const last = Date.UTC(year, mon, 0, 12) / 1000;
  const chargers = [...new Set(data.lines.map((l) => l.charger).filter((c): c is string => !!c))];
  const meta: [Key, string][] = [
    ["pdf_vehicle", input.vehicle ?? tr("all_vehicles")],
    ["pdf_charger", chargers.length ? chargers.join(", ") : DASH],
    ["pdf_period", `${date(first, "UTC")} – ${date(last, "UTC")}`],
    ...(kind === "reimbursement" ? [["pdf_rate", tr("pdf_rate_value", { price: rate(input.price) })] as [Key, string]] : []),
    ["pdf_created", date(input.now)],
  ];
  let y = 124;
  for (const [label, value] of meta) {
    doc.text(MARGIN, y, `${tr(label)}:`, { size: 10, gray: 0.4 });
    doc.text(MARGIN + 110, y, fit(value, contentWidth - 110, "regular", 10), { size: 10 });
    y += 15;
  }
  y += 14;

  const tableHead = () => {
    doc.box(MARGIN, y, contentWidth, ROW + 2, 0.92);
    for (const c of placed) {
      doc.text(cellX(c), y + 12.5, tr(c.label), { font: "bold", size: SIZE, align: c.align });
    }
    y += ROW + 2;
  };
  tableHead();
  if (!data.lines.length) {
    y += 14;
    doc.text(MARGIN + 4, y, tr("pdf_no_sessions"), { size: SIZE, gray: 0.4 });
  }
  data.lines.forEach((l, i) => {
    if (y + ROW > doc.height - BOTTOM) {
      doc.addPage();
      y = 60;
      tableHead();
    }
    for (const c of placed) {
      doc.text(cellX(c), y + 12, cellText(c, c.cell(l, i)), { size: SIZE, align: c.align });
    }
    y += ROW;
    doc.line(MARGIN, y, MARGIN + contentWidth, y, 0.3, 0.85);
  });

  // Totals, then what the figures mean.
  if (y + ROW + 60 > doc.height - BOTTOM) {
    doc.addPage();
    y = 60;
  }
  doc.line(MARGIN, y, MARGIN + contentWidth, y, 0.8, 0.2);
  const col = (label: Key) => placed.find((c) => c.label === label)!;
  const ty = y + 13;
  const total = tr("pdf_total");
  doc.text(MARGIN + 4, ty, total, { font: "bold", size: SIZE + 0.5 });
  const countX = MARGIN + 4 + textWidth(total, "bold", SIZE + 0.5) + 8;
  doc.text(countX, ty, `(${tr("sessions_n", { n: String(data.lines.length) })})`, { size: SIZE, gray: 0.3 });
  doc.text(cellX(col("col_kwh")), ty, kwhText(data.kwh), { font: "bold", size: SIZE + 0.5, align: "right" });
  doc.text(cellX(col("col_amount")), ty, money(data.amount), { font: "bold", size: SIZE + 0.5, align: "right" });
  y += ROW + 22;

  const notes: string[] = [tr(kind === "reimbursement" ? "pdf_note_reimbursement" : "pdf_note_cost")];
  if (data.unpriced) notes.push(tr("pdf_unpriced", { n: String(data.unpriced) }));
  if (data.estimated) notes.push(tr("estimated_note"));
  for (const note of notes) {
    for (const part of wrap(note, contentWidth, 8.5)) {
      doc.text(MARGIN, y, part, { size: 8.5, gray: 0.35 });
      y += 12;
    }
  }

  // Footer on every page.
  const pages = doc.pageCount;
  for (let p = 0; p < pages; p++) {
    const fy = doc.height - 36;
    doc.line(MARGIN, fy - 12, MARGIN + contentWidth, fy - 12, 0.3, 0.8, p);
    doc.text(MARGIN, fy, `${title} · ${monthName}`, { size: 8, gray: 0.5 }, p);
    doc.text(MARGIN + contentWidth, fy, tr("pdf_page", { n: String(p + 1), total: String(pages) }), {
      size: 8,
      gray: 0.5,
      align: "right",
    }, p);
  }
  return doc.output();
}

/** Words of a text in lines of at most `width` points. */
function wrap(text: string, width: number, size: number): string[] {
  const lines: string[] = [];
  let current = "";
  for (const word of text.split(" ")) {
    const next = current ? `${current} ${word}` : word;
    if (current && textWidth(next, "regular", size) > width) {
      lines.push(current);
      current = word;
    } else current = next;
  }
  if (current) lines.push(current);
  return lines;
}
