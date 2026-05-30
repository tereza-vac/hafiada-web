import { PageHero, Section, SectionTitle, Card, Callout } from "../components/ui";
import { CheckIcon, PinIcon } from "../components/icons";
import { event } from "../data/site";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";

const arrival = [
  "Evidence přihlášených psů mezi 7:30 – 8:30 hod.",
  "Nepřihlášení se budou evidovat mezi 7:30 – 8:00 hod.",
  "Vstup do areálu bude umožněn od 7 hodin.",
  "Každý startující pes musí mít vyplněnou vlastní přihlášku.",
  "Pokud startují 2 a více psů jednoho majitele, na přihlášce uveďte v poznámce „2. pes, 3. pes majitele XY“.",
  "Start Haficrossu bude v místě konání Hafiády, první startovní okénko se otevře v 8 hodin.",
];

const extra = [
  "Občerstvení si bude možno zakoupit na místě. Myslíme i na vegetariány a vegany.",
  "Parkování bude umožněno podél příjezdové cesty a na přilehlých parkovištích, viditelně označené.",
  "Výjimku tvoří auta invalidů (průkaz ZTP) a auta pořadatelů – ti budou mít vjezd přímo do areálu.",
  "Je nutno vzít s sebou očkovací průkaz psa s platným očkováním proti vzteklině.",
  "U vstupu proběhne zevrubná veterinární prohlídka. Psi viditelně nemocní nebudou vpuštěni.",
  "Na místě bude dostatek sáčků na exkrementy – uklízejte prosím po svém psovi i mimo areál.",
];

export default function PropozicePage() {
  useSeo({
    title: "Propozice",
    description:
      "Jak se dostat na Hafiádu 2026, co vás čeká po příjezdu, startovné a platební údaje. Areál před bazénem v Bystřici.",
  });
  return (
    <>
      <PageHero
        eyebrow="Vše důležité"
        title="Propozice"
        subtitle="Jak se k nám dostanete, co vás čeká po příjezdu a jak je to se startovným."
        image={images.group}
      />

      <Section>
        <SectionTitle eyebrow="Cesta" title="Dojezd vlakem, autobusem nebo autem" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Vlakem",
              d: "Vystupte ve stanici Bystřice n/Ol. Pokračujte podle šipek a směrovek. U kruhového objezdu budou ukazatele pro správný směr. Při bloudění se ptejte na „Areál před bazénem“.",
            },
            {
              t: "Autobusem",
              d: "Dojeďte do stanice Bystřice n/Ol, okres Frýdek-Místek. Pokračujte podle šipek a směrovek umístěných po celé obci.",
            },
            {
              t: "Autem",
              d: "Z kterékoliv strany (od Jablunkova nebo od Třince) po silnici I/11. Sledujte billboardy a šipky podél cesty.",
            },
          ].map((c) => (
            <Card key={c.t}>
              <h3 className="font-display text-xl font-bold text-brand-700">{c.t}</h3>
              <p className="mt-2 leading-relaxed text-stone-700">{c.d}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-6 flex flex-col gap-4 bg-brand-50/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <PinIcon className="mt-1 h-6 w-6 text-brand-600" />
            <div>
              <p className="font-semibold">Adresa pro navigaci</p>
              <p className="text-stone-600">{event.navAddress}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <PinIcon className="mt-1 h-6 w-6 text-brand-600" />
            <div>
              <p className="font-semibold">GPS souřadnice</p>
              <p className="text-stone-600">{event.gps}</p>
            </div>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 font-bold text-white hover:bg-brand-600"
            href="https://www.google.com/maps?q=49.6393886,18.7220669"
            target="_blank"
            rel="noreferrer"
          >
            Otevřít v mapě
          </a>
        </Card>
      </Section>

      <Section muted>
        <SectionTitle eyebrow="Po příjezdu" title="Jak to bude probíhat" />
        <ul className="mx-auto grid max-w-4xl gap-3">
          {arrival.map((a) => (
            <li key={a} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span className="text-stone-700">{a}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle eyebrow="Platby" title="Startovné" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <ul className="space-y-3">
              {[
                ["Hafiáda – první pes (předem)", "300 Kč"],
                ["Každý další pes stejného majitele", "150 Kč"],
                ["Haficross – první pes (předem)", "300 Kč"],
                ["Haficross – každý další pes", "150 Kč"],
                ["Přihláška na místě (Hafiáda i Haficross)", "500 Kč"],
                ["Další pes na místě", "300 Kč"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center justify-between gap-4 border-b border-brand-50 pb-3 last:border-0">
                  <span className="text-stone-700">{k}</span>
                  <span className="shrink-0 font-display font-bold text-brand-600">{v}</span>
                </li>
              ))}
            </ul>
          </Card>
          <div className="space-y-4">
            <Card className="bg-brand-50/60">
              <p className="font-semibold">Platební údaje</p>
              <p className="mt-2 text-stone-700">
                Startovné poukažte na transparentní účet u Fio banky:
              </p>
              <p className="mt-1 font-display text-xl font-bold text-brand-700">
                {event.account}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-stone-600">
                <li>• Jako VS uveďte své telefonní číslo z přihlášky.</li>
                <li>• Do „zprávy pro příjemce“ napište příjmení a jméno psovoda i psa.</li>
                <li>• Pokud chcete jet Haficross i Hafiádu, platí se jen jedna platba 300 Kč, ale vyplňte dvě přihlášky a do poznámky napište „Haficross + Hafiáda“.</li>
              </ul>
            </Card>
            <Callout tone="info">
              <p>
                Uzávěrka přihlášek je {event.applicationDeadline}. Počet startujících psů je omezen kapacitou areálu – bez včasné přihlášky se nemusí podařit zúčastnit soutěží.
              </p>
            </Callout>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionTitle eyebrow="Dobré vědět" title="Další informace" />
        <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {extra.map((e) => (
            <li key={e} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <span className="text-stone-700">{e}</span>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-6 max-w-4xl">
          <Callout tone="warning">
            <p className="font-bold">Za veškeré škody způsobené psem zodpovídá v plné míře jeho majitel.</p>
            <p>Prosíme páničky, aby nebrali s sebou do areálu hárající fenky.</p>
          </Callout>
        </div>
      </Section>
    </>
  );
}
