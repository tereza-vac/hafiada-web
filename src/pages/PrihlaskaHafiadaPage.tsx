import { PageHero, Section, Callout, Card } from "../components/ui";
import { GoogleForm } from "../components/GoogleForm";
import { CheckIcon } from "../components/icons";
import { event, forms } from "../data/site";
import { images } from "../data/images";

export default function PrihlaskaHafiadaPage() {
  return (
    <>
      <PageHero
        eyebrow={`Hafiáda ${event.year}`}
        title="Přihláška Hafiáda 2026"
        subtitle={`Přihlaste se na zábavný den se psy. Uzávěrka přihlášek je ${event.applicationDeadline}.`}
        image={images.puppy}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card className="bg-brand-50/60">
              <h2 className="font-display text-xl font-bold">Než vyplníte přihlášku</h2>
              <ul className="mt-4 space-y-3 text-[15px] text-stone-700">
                {[
                  "Každý startující pes musí mít vyplněnou vlastní přihlášku.",
                  "Startovné 300 Kč předem na účet, každý další pes 150 Kč.",
                  `Číslo účtu: ${event.account}.`,
                  "Jako VS uveďte telefonní číslo z přihlášky.",
                  "Přihlášky se ukládají automaticky, potvrzení na e-mail nechodí.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
            <div className="mt-4">
              <Callout tone="info">
                <p>
                  S odesláním přihlášky automaticky souhlasíte se zpracováním osobních údajů a pořízením případné fotodokumentace.
                </p>
              </Callout>
            </div>
          </div>
          <div className="lg:col-span-2">
            <GoogleForm config={forms.hafiada} title="Přihláška Hafiáda 2026" />
          </div>
        </div>
      </Section>
    </>
  );
}
