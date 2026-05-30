import { PageHero, Section, Callout } from "../components/ui";
import { schedule } from "../data/content";
import { images } from "../data/images";
import { event } from "../data/site";
import { useSeo } from "../hooks/useSeo";

export default function HarmonogramPage() {
  useSeo({
    title: "Harmonogram",
    description:
      "Orientační program Hafiády 2026 – prezence, soutěže v poslušnosti, freestyle, výstavy krásy, hafility, karneval a vyhlášení vítězů.",
  });
  return (
    <>
      <PageHero
        eyebrow={`Hafiáda ${event.year}`}
        title="Harmonogram 2026"
        subtitle={`Orientační program celého dne. ${event.dateLong}, start v ${event.startTime}.`}
        image={images.agility}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <ol className="relative space-y-2 border-l-2 border-brand-200 pl-6">
            {schedule.map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-brand-500" />
                <div className="flex flex-col gap-1 rounded-2xl border border-brand-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:gap-4">
                  <span className="inline-flex w-fit shrink-0 rounded-full bg-brand-100 px-3 py-1 font-display text-sm font-bold text-brand-700">
                    {item.time}
                  </span>
                  <span className="font-medium text-stone-700">{item.title}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <Callout tone="info">
              <p className="font-bold uppercase">Harmonogram je pouze orientační.</p>
              <p>Pořadatel si vyhrazuje právo na změnu harmonogramu.</p>
            </Callout>
          </div>
        </div>
      </Section>
    </>
  );
}
