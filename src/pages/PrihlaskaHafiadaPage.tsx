import { PageHero, Section, Callout, Card } from "../components/ui";
import { ApplicationsClosedNotice, GoogleForm } from "../components/GoogleForm";
import { CheckIcon } from "../components/icons";
import { applicationsClosed, event, forms, onlineApplicationsOpen } from "../data/site";
import { images } from "../data/images";
import { PaymentDetails } from "../components/Payment";
import { useSeo } from "../hooks/useSeo";

export default function PrihlaskaHafiadaPage() {
  useSeo({
    title: "Přihláška Hafiáda 2026",
    description: onlineApplicationsOpen
      ? `Přihlaste se na Hafiádu 2026 – zábavný den se psy. Uzávěrka přihlášek je ${event.applicationDeadline}.`
      : applicationsClosed.seo,
  });
  return (
    <>
      <PageHero
        eyebrow={`Hafiáda ${event.year}`}
        title="Přihláška Hafiáda 2026"
        subtitle={
          onlineApplicationsOpen
            ? `Přihlaste se na zábavný den se psy. Uzávěrka přihlášek je ${event.applicationDeadline}.`
            : applicationsClosed.heroSubtitle
        }
        image={images.puppy}
      />
      <Section>
        {onlineApplicationsOpen ? (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <Card className="bg-brand-50/60">
                <h2 className="font-display text-xl font-bold">Než vyplníte přihlášku</h2>
                <ul className="mt-4 space-y-3 text-[15px] text-stone-700">
                  {[
                    "Každý startující pes musí mít vyplněnou vlastní přihlášku.",
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
                <Card className="bg-brand-50/60">
                  <PaymentDetails variant="hafiada" />
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
              <GoogleForm config={forms.hafiada} title="Přihláška Hafiáda 2026" />
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl">
            <ApplicationsClosedNotice />
          </div>
        )}
      </Section>
    </>
  );
}
