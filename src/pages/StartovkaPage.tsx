import { PageHero, Section, Card, Callout, Button } from "../components/ui";
import { CheckIcon } from "../components/icons";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";

const info = [
  "Prezence (předání startovací karty a mapy) probíhá od 7:00 do 9:00.",
  "Startovací okénko je otevřené od 7:30 do 9:00 – přijít můžete kdykoliv v tuto dobu.",
  "Startovací okénko najdete v areálu konání Hafiády. U vstupu řekněte, že jdete na Haficross, a nasměrujeme vás.",
  "Na trati bude minimálně jeden kontrolní bod.",
  "Výsledky budou vyhlášeny v místě konání Hafiády ve 12 hodin.",
];

export default function StartovkaPage() {
  useSeo({
    title: "Startovka Haficross",
    description:
      "Startovní listina Haficrossu a informace ke startu závodu na Hafiádě 2026.",
  });
  return (
    <>
      <PageHero
        eyebrow="Haficross"
        title="Startovka Haficross"
        subtitle="Seznam startujících a informace ke startu závodu."
        image={images.running}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          <Callout tone="info">
            <p className="font-bold">Startovní listina se připravuje.</p>
            <p>
              Jakmile se uzavřou přihlášky, zveřejníme zde seznam startujících. Mapa trati bude k dispozici týden před závodem.
            </p>
          </Callout>

          <Card>
            <h2 className="font-display text-2xl font-bold">Průběh startu</h2>
            <ul className="mt-4 space-y-3">
              {info.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-stone-700">{t}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="text-center">
            <Button to="/prihlaska-haficross">Přihlásit se na Haficross</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
