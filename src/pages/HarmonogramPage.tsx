import { PageHero, Section, Callout, Card } from "../components/ui";
import {
  morningSchedule,
  schedule,
  visitorNotes,
  votingTickets,
  type ScheduleItem,
} from "../data/content";
import { images } from "../data/images";
import { event } from "../data/site";
import { useSeo } from "../hooks/useSeo";

const kindStyle: Record<NonNullable<ScheduleItem["kind"]>, string> = {
  info: "border-brand-100 bg-white",
  competition: "border-amber-200 bg-amber-50",
  announcement: "border-brand-200 bg-white",
  demo: "border-teal-100 bg-white",
};

const kindLabel: Record<NonNullable<ScheduleItem["kind"]>, string | null> = {
  info: null,
  competition: "Soutěž",
  announcement: "Vyhlášení",
  demo: "Ukázka",
};

function Timeline({ items }: { items: ScheduleItem[] }) {
  return (
    <ol className="relative space-y-2 border-l-2 border-brand-200 pl-6">
      {items.map((item, i) => {
        const kind = item.kind ?? "info";
        return (
          <li key={`${item.time}-${item.title}-${i}`} className="relative">
            <span
              className={`absolute -left-[31px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white ${
                kind === "announcement" ? "bg-brand-600" : kind === "competition" ? "bg-amber-400" : "bg-brand-500"
              }`}
            />
            <div
              className={`flex flex-col gap-1 rounded-2xl border p-4 shadow-sm sm:flex-row sm:items-center sm:gap-4 ${kindStyle[kind]}`}
            >
              <span className="inline-flex w-fit shrink-0 rounded-full bg-white/80 px-3 py-1 font-display text-sm font-bold text-brand-700">
                {item.time}
              </span>
              <div className="min-w-0 flex-1">
                <span
                  className={`font-medium ${
                    kind === "announcement" ? "font-bold text-brand-700" : "text-stone-700"
                  }`}
                >
                  {item.title}
                </span>
                {item.place && (
                  <p className="text-sm text-stone-500">{item.place}</p>
                )}
              </div>
              {kindLabel[kind] && (
                <span
                  className={`w-fit shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${
                    kind === "announcement"
                      ? "bg-brand-100 text-brand-700"
                      : kind === "competition"
                        ? "bg-amber-200 text-amber-900"
                        : "bg-teal-100 text-teal-800"
                  }`}
                >
                  {kindLabel[kind]}
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function HarmonogramPage() {
  useSeo({
    title: "Harmonogram",
    description:
      "Program Hafiády 2026 pro diváky – soutěže, ukázky, Haficross, karneval a vyhlášení vítězů. Neděle 30. 8. 2026 v Bystřici.",
  });
  return (
    <>
      <PageHero
        eyebrow={`Hafiáda ${event.year}`}
        title="Harmonogram 2026"
        subtitle={`Program pro diváky. ${event.dateLong}, zahájení v 8:30.`}
        image={images.agility}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-semibold text-amber-900">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> Soutěž / disciplína
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 font-semibold text-brand-700">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-600" /> Vyhlášení vítězů
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-1 font-semibold text-teal-800">
              <span className="h-2.5 w-2.5 rounded-full bg-teal-500" /> Ukázka
            </span>
          </div>

          <h2 className="mb-4 font-display text-2xl font-bold">Ráno – prezence a Haficross</h2>
          <p className="mb-4 text-stone-600">
            Haficross se běží po ránu. Prezence a startovací okénko jsou v areálu Hafiády, výsledky vyhlásíme ve 12:00.
          </p>
          <Timeline items={morningSchedule} />

          <h2 className="mb-4 mt-12 font-display text-2xl font-bold">Program pro diváky</h2>
          <Timeline items={schedule} />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {visitorNotes.map((n) => (
              <Card key={n.title} className="h-full">
                <h3 className="font-display text-lg font-bold text-brand-700">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{n.text}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-6">
            <h3 className="font-display text-xl font-bold">Divácké hlasování</h3>
            <p className="mt-2 text-sm text-stone-600">
              Hlasovací lístky i urny najdete u prezence.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {votingTickets.map((t) => (
                <li
                  key={t.color}
                  className="rounded-xl bg-brand-50 px-3 py-3 text-center text-sm"
                >
                  <p className="font-bold text-brand-700">{t.color}</p>
                  <p className="mt-0.5 text-stone-600">{t.contest}</p>
                </li>
              ))}
            </ul>
          </Card>

          <div className="mt-8">
            <Callout tone="info">
              <p className="font-bold uppercase">Harmonogram je pouze orientační.</p>
              <p>Pořadatel si vyhrazuje právo na změnu programu podle průběhu dne.</p>
            </Callout>
          </div>
        </div>
      </Section>
    </>
  );
}
