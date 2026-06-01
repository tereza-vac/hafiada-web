import { PageHero, Section, Card, Button, Callout } from "../components/ui";
import { CameraIcon, CheckIcon, HeartIcon, MailIcon, PinIcon } from "../components/icons";
import { photoContest } from "../data/site";
import { images } from "../data/images";
import { useContact } from "../components/ContactModal";
import { useSeo } from "../hooks/useSeo";

const conditions = [
  "Pošlete 3 fotky pejska vytištěné pouze na fotografickém papíru ve formátu A4, orientace na šířku.",
  "Na zadní stranu fotek napište jméno psa, jméno a příjmení majitele a e-mailovou adresu.",
  "Uzávěrka příjmu fotek je 10 dní před konáním Hafiády (tj. 20. 8. 2026). Později obdržené fotky nebudou do soutěže zařazeny.",
];

const voting = [
  "Soutěž je divácká, vyhodnocuje se 1.–3. místo. Ceny jsou poukázky na sportovní vybavení.",
  "Každý hlasující má 1 hlas – u vstupu obdrží hlasovací lístek označený „Fotosoutěž“, napíše na něj číslo fotky pejska, kterému dává hlas, a vhodí ho do schránky u tabla Fotosoutěž.",
  "Vyhodnocení proběhne zhruba v polovině Hafiády. Hodinu před vyhlášením moderátor ohlásí „Stop hlasování“ (přesný čas závisí na programu).",
  "Pokud majitel s pejskem nebude v době vyhlášení výsledků na Hafiádě přítomen, výhra bude předána dalšímu v pořadí s nejvyšším počtem hlasů.",
];

export default function FotosoutezPage() {
  const { open } = useContact();
  useSeo({
    title: "Fotosoutěž 2026",
    description:
      "Fotosoutěž Hafiády 2026 na téma „Můj pes je ten nejkrásnější“. Pošlete 3 vytištěné fotky poštou, na místě se hlasuje. Uzávěrka 20. 8. 2026.",
  });
  return (
    <>
      <PageHero
        eyebrow="Přátelé, pozor!"
        title={`Fotosoutěž ${photoContest.year}`}
        subtitle="Pošlete fotky svého nejkrásnějšího chlupatého parťáka a zapojte se do letošní fotosoutěže. Hlasovat se bude přímo na Hafiádě."
        image={images.puppy}
      />
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
            <CameraIcon className="h-8 w-8" />
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-600">
            Téma letošní fotosoutěže
          </p>
          <h2 className="mt-3 flex items-center justify-center gap-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            <HeartIcon className="h-7 w-7 text-brand-500" />
            {photoContest.theme}
            <HeartIcon className="h-7 w-7 text-brand-500" />
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="font-display text-xl font-bold">Jak se zapojit</h3>
            <ul className="mt-4 space-y-3">
              {conditions.map((c) => (
                <li key={c} className="flex items-start gap-2 text-stone-700">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-brand-50 p-4">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <div>
                <p className="text-sm font-semibold text-stone-700">
                  Fotky posílejte na adresu:
                </p>
                <p className="mt-1 font-display text-lg font-bold text-brand-700">
                  {photoContest.address}
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="font-display text-xl font-bold">Hlasování a ceny</h3>
            <ul className="mt-4 space-y-3">
              {voting.map((v) => (
                <li key={v} className="flex items-start gap-2 text-stone-700">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <Callout tone="info">
            <p className="font-semibold">Máte k fotosoutěži dotaz?</p>
            <p>
              Fotky se do soutěže zasílají vytištěné poštou na adresu výše. Pokud
              si nevíte rady nebo se chcete na něco zeptat, napište nám.
            </p>
            <Button className="mt-3" onClick={() => open("Fotosoutěž 2026 – dotaz")}>
              <MailIcon className="h-5 w-5" /> Napsat nám
            </Button>
          </Callout>
        </div>
      </Section>
    </>
  );
}
