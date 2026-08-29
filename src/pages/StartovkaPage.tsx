import { PageHero, Section, Card, Callout, Button } from "../components/ui";
import { CheckIcon } from "../components/icons";
import { haficrossStartlist } from "../data/content";
import { images } from "../data/images";
import { onlineApplicationsOpen } from "../data/site";
import { Reveal } from "../components/Reveal";
import { useSeo } from "../hooks/useSeo";

const info = [
  "Prezence (předání startovací karty a mapy) probíhá od 7:00 do 9:00.",
  "Startovací okénko je otevřené od 7:30 do 9:00 – přijít můžete kdykoliv v tuto dobu.",
  "Startovací okénko najdete v areálu konání Hafiády. U vstupu řekněte, že jdete na Haficross, a nasměrujeme vás.",
  "Na trati bude minimálně jeden kontrolní bod.",
  "Výsledky budou vyhlášeny v místě konání Hafiády ve 12 hodin.",
];

function countLabel(count: number, id: "women" | "men") {
  if (id === "women") {
    return count === 1 ? "závodnice" : count < 5 ? "závodnice" : "závodnic";
  }
  return count === 1 ? "závodník" : count < 5 ? "závodníci" : "závodníků";
}

const numberTone: Record<(typeof haficrossStartlist)[number]["id"], string> = {
  women: "text-brand-600",
  men: "text-teal-700",
};

const accentBar: Record<(typeof haficrossStartlist)[number]["id"], string> = {
  women: "bg-brand-400",
  men: "bg-teal-500",
};

export default function StartovkaPage() {
  useSeo({
    title: "Startovka Haficross",
    description:
      "Startovní listina Haficrossu 2026 – přihlášení závodníci v kategorii žen a mužů a informace ke startu.",
  });

  const total = haficrossStartlist.reduce((sum, cat) => sum + cat.names.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Haficross"
        title="Startovka Haficross"
        subtitle={`Seznam ${total} přihlášených závodníků a informace ke startu.`}
        image={images.running}
      />
      <Section>
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {haficrossStartlist.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 80} className="h-full">
                <div className="h-full rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-600">
                    Startovací listina
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold">{cat.title}</h2>
                  <div className={`mt-3 h-1.5 w-16 rounded-full ${accentBar[cat.id]}`} />
                  <p className="mt-2 text-sm text-stone-500">
                    {cat.names.length} {countLabel(cat.names.length, cat.id)}
                  </p>
                  <ol className="mt-4">
                    {cat.names.map((name, n) => (
                      <li
                        key={name}
                        className="flex items-baseline gap-3 border-b border-brand-50 py-2 last:border-0"
                      >
                        <span
                          className={`w-8 shrink-0 font-display text-lg font-bold tabular-nums ${numberTone[cat.id]}`}
                        >
                          {n + 1}.
                        </span>
                        <span className="font-semibold text-ink">{name}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>

          <Callout tone="info">
            <p>
              Seznam podle přihlášek předem. Pokud tu své jméno nevidíte a přihlášku jste odeslali, ozvěte se nám. Přihlásit se můžete i na místě.
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

          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/haficross" variant="secondary">
              O Haficrossu
            </Button>
            <Button to="/prihlaska-haficross">
              {onlineApplicationsOpen ? "Přihlásit se na Haficross" : "Registrace na místě"}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
