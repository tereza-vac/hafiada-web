import { PageHero, Section, Callout, Card } from "../components/ui";
import { GoogleForm } from "../components/GoogleForm";
import { CheckIcon } from "../components/icons";
import { event, forms } from "../data/site";
import { images } from "../data/images";
import { PaymentDetails } from "../components/Payment";
import { useSeo } from "../hooks/useSeo";

export default function PrihlaskaHaficrossPage() {
  useSeo({
    title: "Přihláška Haficross 2026",
    description:
      `Přihláška na Haficross 2026 – trasa ~6,8 km se psem. Uzávěrka přihlášek je ${event.applicationDeadline}.`,
  });
  return (
    <>
      <PageHero
        eyebrow="O pohár starosty Bystřice"
        title="Přihláška Haficross 2026"
        subtitle={`Trasa zhruba 6,8 km. Uzávěrka přihlášek je ${event.applicationDeadline}. Startovné v plné výši putuje na pomoc opuštěným zvířátkům.`}
        image={images.running}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card className="bg-brand-50/60">
              <h2 className="font-display text-xl font-bold">Důležité informace</h2>
              <ul className="mt-4 space-y-3 text-[15px] text-stone-700">
                {[
                  "Závod je určen pouze pro dospělé psy (nad 18 měsíců).",
                  "Závodník je starší 18 let (mladší v doprovodu dospělého).",
                  "Chcete-li jet i Hafiádu, vyplňte i druhou přihlášku.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
            <div className="mt-4">
              <Card className="bg-brand-50/60">
                <PaymentDetails variant="haficross" />
              </Card>
            </div>
            <div className="mt-4">
              <Callout tone="info">
                <p>
                  S odesláním přihlášky automaticky souhlasíte se zpracováním osobních údajů a pořízením případné fotodokumentace.
                </p>
              </Callout>
            </div>
          </div>
          <div className="lg:col-span-2">
            <GoogleForm config={forms.haficross} title="Přihláška Haficross 2026" />
          </div>
        </div>
      </Section>
    </>
  );
}
