import { PageHero, Section, Callout, Card } from "../components/ui";
import { CheckIcon } from "../components/icons";
import { competitions } from "../data/content";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";

export default function PravidlaPage() {
  useSeo({
    title: "Pravidla soutěží",
    description:
      "Pravidla všech disciplín na Hafiádě 2026 – poslušnost, VESTAJ, TOP čistokrevňák, freestyle, karneval, hafility, stezka nástrah a Grand Hafi.",
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
              <h2 className="font-display text-2xl font-bold text-brand-700">
                {c.title}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed text-stone-700">
                {c.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
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
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
