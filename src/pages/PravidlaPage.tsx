import { PageHero, Section, Callout, Card } from "../components/ui";
import { AlertIcon, CheckIcon } from "../components/icons";
import { competitions } from "../data/content";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";

export default function PravidlaPage() {
  useSeo({
    title: "Pravidla soutěží",
    description:
      "Pravidla všech disciplín na Hafiádě 2026 – poslušnost, VESTAJ, TOP čistokrevňák, freestyle, karneval, Hafitrojboj (Hledej svého pána, Hafility, Stezka nástrah) a Grand Prix 2026.",
  });
  return (
    <>
      <PageHero
        eyebrow="Soutěže na Hafiádě"
        title="Pravidla soutěží"
        subtitle="„Není důležité vyhrát, ale zúčastnit se.“ :)"
        image={images.agility}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Callout tone="warning">
            <p className="font-bold uppercase">
              ! Nezapomeňte zkontrolovat platnost očkování !
            </p>
          </Callout>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6">
          {competitions.map((c) => (
            <Card key={c.title}>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display text-2xl font-bold text-brand-700">
                  {c.title}
                </h2>
                {c.badge && (
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
                    {c.badge}
                  </span>
                )}
              </div>
              <div className="mt-3 space-y-3 leading-relaxed text-stone-700">
                {c.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {c.note && (
                <div className="mt-4 flex gap-3 rounded-2xl border-l-4 border-brand-500 bg-brand-50 p-4">
                  <AlertIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <p className="text-[15px] font-semibold text-brand-900">
                    {c.note}
                  </p>
                </div>
              )}
              {c.categories && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {c.categories.map((cat) => (
                    <li
                      key={cat}
                      className="flex items-center gap-2 rounded-xl bg-brand-50 px-3 py-2 text-sm font-medium text-stone-700"
                    >
                      <CheckIcon className="h-4 w-4 text-brand-600" />
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
              {c.sections?.map((s) => (
                <div key={s.heading} className="mt-5">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {s.heading}
                  </h3>
                  {s.text && <p className="mt-1 text-stone-700">{s.text}</p>}
                  {s.items && (
                    <ul className="mt-2 space-y-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-stone-700">
                          <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
