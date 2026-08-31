import { useState } from "react";
import { PageHero, Section, SectionTitle, Callout, Button } from "../components/ui";
import { Reveal } from "../components/Reveal";
import { useSeo } from "../hooks/useSeo";
import { images } from "../data/images";
import {
  overall,
  overallStats,
  nejHafiadak,
  disciplines,
  resultsDate,
  type ResultCategory,
  type ResultRow,
  type ResultStats,
} from "../data/results";
import { haficrossResults, type RaceResult } from "../data/resultsHaficross";

const medalRing: Record<number, string> = {
  1: "bg-amber-100 text-amber-700 ring-2 ring-amber-300",
  2: "bg-stone-100 text-stone-600 ring-2 ring-stone-300",
  3: "bg-orange-100 text-orange-700 ring-2 ring-orange-300",
};

const podiumStyle: Record<number, string> = {
  1: "border-amber-300 bg-gradient-to-b from-amber-50 to-white",
  2: "border-stone-300 bg-gradient-to-b from-stone-50 to-white",
  3: "border-orange-300 bg-gradient-to-b from-orange-50 to-white",
};

const medalEmoji: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

function rankNum(rank: string) {
  const n = parseInt(rank, 10);
  return Number.isNaN(n) ? 0 : n;
}

function RankBadge({ rank }: { rank: string }) {
  const n = rankNum(rank);
  const style =
    medalRing[n] ?? "bg-brand-50 text-brand-700 ring-1 ring-brand-100";
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold tabular-nums ${style}`}
    >
      {rank}.
    </span>
  );
}

function ResultRowItem({ row, showBreed = true }: { row: ResultRow; showBreed?: boolean }) {
  const meta = [row.handler, showBreed ? row.breed : null]
    .filter((x) => x && !x.includes("@"))
    .join(" · ");
  return (
    <li className="flex items-center gap-3 border-b border-brand-50 py-2.5 last:border-0 sm:gap-4">
      <RankBadge rank={row.rank} />
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-ink">{row.dog}</p>
        {meta && <p className="truncate text-sm text-stone-500">{meta}</p>}
      </div>
      <div className="shrink-0 text-right">
        <span className="font-display text-lg font-bold tabular-nums text-brand-700">
          {row.points}
        </span>
        <span className="ml-1 text-xs font-medium text-stone-400">b.</span>
      </div>
    </li>
  );
}

function Podium({ rows }: { rows: ResultRow[] }) {
  const top = [1, 2, 3]
    .map((n) => rows.find((r) => rankNum(r.rank) === n))
    .filter((r): r is ResultRow => Boolean(r));
  if (top.length === 0) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {top.map((row) => {
        const n = rankNum(row.rank);
        return (
          <div
            key={`${row.dog}-${row.num}`}
            className={`rounded-3xl border p-5 text-center shadow-sm ${podiumStyle[n]}`}
          >
            <div className="text-4xl">{medalEmoji[n]}</div>
            <p className="mt-2 font-display text-xl font-bold text-ink">{row.dog}</p>
            <p className="text-sm text-stone-500">{row.handler}</p>
            <p className="mt-3 font-display text-2xl font-extrabold text-brand-700">
              {row.points}
              <span className="ml-1 text-sm font-semibold text-stone-400">bodů</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

function StandingsTable({
  category,
  initial = 10,
}: {
  category: ResultCategory;
  initial?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = category.rows.length > initial;
  const visible = expanded ? category.rows : category.rows.slice(0, initial);
  return (
    <div className="rounded-3xl border border-brand-100 bg-white p-5 shadow-sm sm:p-6">
      <ol>
        {visible.map((row) => (
          <ResultRowItem key={`${row.rank}-${row.dog}-${row.num}`} row={row} />
        ))}
      </ol>
      {hasMore && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-brand-200 bg-white px-5 py-2 text-sm font-bold text-brand-700 transition hover:bg-brand-50"
          >
            {expanded
              ? "Zobrazit jen TOP 10"
              : `Zobrazit všech ${category.rows.length}`}
          </button>
        </div>
      )}
    </div>
  );
}

function RaceRowItem({ row }: { row: RaceResult }) {
  return (
    <li className="flex items-center gap-3 border-b border-brand-50 py-2.5 last:border-0 sm:gap-4">
      <RankBadge rank={row.rank} />
      <p className="min-w-0 flex-1 truncate font-semibold text-ink">{row.name}</p>
      <span className="shrink-0 font-display text-sm font-bold tabular-nums text-brand-700 sm:text-base">
        {row.time}
      </span>
    </li>
  );
}

function StatChips({ stats }: { stats: ResultStats }) {
  const chips = [
    { label: "závodníků", value: stats.total },
    { label: "dokončilo", value: stats.finished },
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {chips.map((c) => (
        <div
          key={c.label}
          className="rounded-2xl border border-brand-100 bg-white px-4 py-2 shadow-sm"
        >
          <span className="font-display text-xl font-extrabold text-brand-700">
            {c.value}
          </span>
          <span className="ml-1.5 text-sm font-medium text-stone-500">{c.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function VysledkyPage() {
  useSeo({
    title: "Výsledky Hafiáda 2026",
    description: `Kompletní výsledky Hafiády ${resultsDate} – celkové pořadí GRAND HAFI, NEJ HAFIAĎÁK a jednotlivé disciplíny.`,
    image: images.agility,
  });

  return (
    <>
      <PageHero
        eyebrow="Hafiáda 2026"
        title="Výsledky"
        subtitle={`Kompletní výsledky Hafiády ${resultsDate}. Děkujeme všem závodníkům i jejich čtyřnohým parťákům!`}
        image={images.agility}
      />

      <Section>
        <div className="mx-auto max-w-4xl space-y-8">
          <SectionTitle eyebrow="Celkové pořadí" title="GRAND HAFI" />
          <StatChips stats={overallStats} />
          <Reveal>
            <Podium rows={overall.rows} />
          </Reveal>
          <Reveal delay={80}>
            <StandingsTable category={overall} />
          </Reveal>
        </div>
      </Section>

      <Section muted>
        <div className="mx-auto max-w-4xl space-y-8">
          <SectionTitle eyebrow="Speciální ocenění" title="NEJ HAFIAĎÁK" />
          <Reveal>
            <Podium rows={nejHafiadak.rows} />
          </Reveal>
          <Reveal delay={80}>
            <StandingsTable category={nejHafiadak} />
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Po disciplínách"
            title="Výsledky jednotlivých disciplín"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {disciplines.map((cat, i) => (
              <Reveal key={cat.title} delay={(i % 2) * 80} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="font-display text-lg font-bold leading-snug text-ink">
                    {cat.title}
                  </h3>
                  <div className="mt-2 h-1.5 w-14 rounded-full bg-brand-400" />
                  <ol className="mt-4 flex-1">
                    {cat.rows.map((row) => (
                      <ResultRowItem
                        key={`${cat.title}-${row.rank}-${row.dog}`}
                        row={row}
                        showBreed={false}
                      />
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Haficross 2026" title="Výsledky Haficrossu" />
          <div className="grid gap-6 md:grid-cols-2">
            {haficrossResults.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="font-display text-xl font-bold text-ink">{cat.title}</h3>
                  <div
                    className={`mt-2 h-1.5 w-14 rounded-full ${
                      cat.id === "women" ? "bg-brand-400" : "bg-teal-500"
                    }`}
                  />
                  <p className="mt-1 text-sm text-stone-500">
                    {cat.results.length} závodníků · trasa ~6,8 km
                  </p>
                  <ol className="mt-4 flex-1">
                    {cat.results.map((row) => (
                      <RaceRowItem key={`${cat.id}-${row.rank}`} row={row} />
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          <Callout tone="info">
            <p>
              Výsledky přepisujeme ručně z oficiálních zápisů. Kdybyste našli
              nesrovnalost, dejte nám prosím vědět a opravíme to.
            </p>
          </Callout>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/fotogalerie" variant="secondary">
              Fotogalerie
            </Button>
            <Button to="/">Zpět na úvod</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
