import { PageHero, Section, SectionTitle, Callout, Button } from "../components/ui";
import { CheckIcon, HeartIcon, RunIcon } from "../components/icons";
import { event } from "../data/site";
import { images } from "../data/images";

const rules = [
  "Závodník je starší 18 let. Mladší 18 let pouze v doprovodu dospělé osoby (15–18 let i s písemným souhlasem zákonných zástupců).",
  "Pes musí být starší 18 měsíců a mít platné očkování proti vzteklině.",
  "Pes neběží na ostnatém, škrtícím ani elektrickém obojku – nejlépe postroj a klasický obojek.",
  "Účastník je se psem po celou dobu spojen vodítkem (max. 2 m), pes nesmí být puštěn „na volno“.",
  "Trasu zdoláte jen vlastními silami – žádné kolo, brusle, auto apod. Pohyb jen po vyznačené trase.",
  "Sbírání exkrementů po celé trase považujeme za samozřejmost.",
  "Povinná výbava: mobilní telefon, osobní doklady, karta pojištěnce.",
  "Časový limit pro závod je návrat do 11. hodiny. Mapa trati bude zveřejněná týden před závodem.",
];

export default function HaficrossPage() {
  return (
    <>
      <PageHero
        eyebrow="O pohár starosty Bystřice"
        title="Haficross 2026"
        subtitle="Rozhýbej se po ránu, proběhni nebo projdi trasu ~6,8 km a podpoř útulky. Důležité není vyhrát, ale zúčastnit se."
        image={images.running}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Milý závodníku" title="Proběhni se s Hafiádou" />
            <div className="space-y-4 text-[17px] leading-relaxed text-stone-700">
              <p>
                Jsme rádi, že tě můžeme přivítat! Nejde jen o výkon, ale také o dobrý skutek a věříme, že především o zábavu. Máme pro tebe připravenou trať o délce zhruba 6,8 km.
              </p>
              <p>
                Neboj se zúčastnit, i když se zrovna necítíš jako nejtrénovanější závodník. S ohledem na zdraví pejsků je závod určen pouze pro dospělé psy.
              </p>
              <p>
                Chceš-li jet Hafiádu i Haficross, vyplň a odešli dvě přihlášky – jednu na Haficross, druhou na klasické disciplíny Hafiády.
              </p>
            </div>
            <Button to="/prihlaska-haficross" className="mt-6">
              <RunIcon className="h-5 w-5" /> Přihláška na Haficross
            </Button>
          </div>
          <img
            src={images.running}
            alt="Běžec se psem"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </Section>

      <Section muted>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-teal-700 p-8 text-center text-white">
            <HeartIcon className="mx-auto h-10 w-10 text-teal-200" />
            <h2 className="mt-3 font-display text-2xl font-bold">Startovné pomáhá</h2>
            <p className="mt-2 text-teal-50">
              Startovné <span className="font-bold">300 Kč</span> v plné výši poputuje k některé organizaci pečující o opuštěná zvířátka.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="Pravidla" title="Než vyrazíš na trať" />
        <ul className="mx-auto grid max-w-4xl gap-3">
          {rules.map((r) => (
            <li key={r} className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-white p-4 shadow-sm">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span className="text-stone-700">{r}</span>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-8 max-w-4xl">
          <Callout tone="warning">
            <p className="font-bold uppercase">Upozornění k platbě</p>
            <p>
              Startovné 300 Kč bude akceptováno jako zaplacené, pokud bude připsáno na účet u Fio banky č. {event.account} nejpozději do 24. 8. 2026. Na pozdější reklamace nebude brán zřetel.
            </p>
          </Callout>
        </div>
      </Section>
    </>
  );
}
