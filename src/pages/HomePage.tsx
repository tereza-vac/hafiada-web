import { Link } from "react-router-dom";
import { Button, Callout, Card, Section, SectionTitle } from "../components/ui";
import {
  CalendarIcon,
  CameraIcon,
  ClockIcon,
  HeartIcon,
  PawIcon,
  PinIcon,
  RunIcon,
  TrophyIcon,
} from "../components/icons";
import { event, photoContest } from "../data/site";
import { images } from "../data/images";
import { PaymentQR } from "../components/Payment";
import { useSeo } from "../hooks/useSeo";

function Countdownish() {
  const facts = [
    { icon: CalendarIcon, label: "Kdy", value: event.dateWhen },
    { icon: ClockIcon, label: "Začátek", value: `${event.startTime} dopoledne` },
    {
      icon: PinIcon,
      label: "Kde",
      value: event.place,
      sub: `${event.placeShort} · ${event.district}`,
      link: { href: event.mapUrl, label: "Zobrazit na mapě" },
    },
    { icon: PawIcon, label: "Přihlášky do", value: event.applicationDeadline },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((f) => (
        <Card key={f.label} className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
            <f.icon className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {f.label}
            </p>
            <p className="font-display text-lg font-bold leading-snug text-ink">
              {f.value}
            </p>
            {f.sub && <p className="mt-0.5 text-sm text-stone-500">{f.sub}</p>}
            {f.link && (
              <a
                href={f.link.href}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                {f.link.label}
                <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function HomePage() {
  useSeo({
    title: "Hafiáda 2026 – setkání milovníků všech psů",
    description:
      "Zábavný den pro celou rodinu se psy. Hafiáda 2026 se koná v neděli 30. 8. 2026 od 8:00 v areálu před bazénem v Bystřici. Soutěže, Haficross a pomoc zvířátkům v nouzi.",
    path: "/",
  });
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-700 text-white">
        <img
          src={images.hero}
          alt="Šťastní psi na louce"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/85 via-brand-800/75 to-brand-600/55" />
        <div className="container-page relative grid min-h-[78vh] items-center py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
                <PawIcon className="h-4 w-4" /> Bez rasových předsudků
              </p>
              <p className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-1.5 text-sm font-extrabold text-amber-950 shadow-lg">
                <CalendarIcon className="h-4 w-4" /> {event.date}
              </p>
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
              Zábavný den pro celou rodinu se psy
            </h1>
            <p className="mt-5 text-lg text-brand-50/90 sm:text-xl">
              Hafiáda {event.year} je na cestě! Těšíme se na vás {event.dateWhen} od {event.startTime} v areálu před bazénem v Bystřici. Soutěže, Haficross a hlavně dobrá společnost.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/prihlaska-hafiada">
                <PawIcon className="h-5 w-5" /> Přihlásit se na Hafiádu
              </Button>
              <Button to="/harmonogram" variant="ghost">
                Program dne
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <Section className="-mt-24 relative z-10">
        <Countdownish />
      </Section>

      {/* WELCOME */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Hafiáda 2026 vás vítá" title="Den v dobré společnosti s vaším chlupáčem" />
            <div className="space-y-4 text-[17px] leading-relaxed text-stone-700">
              <p>
                Zdravíme všechny pejskaře! Letos se na vás těšíme {event.dateWhen} v areálu ZŠ Bystřice (před bazénem), a to od {event.startTime} dopoledne. Přihlášky prosím posílejte do {event.applicationDeadline}.
              </p>
              <p>
                Pro ty, kdo na Hafiádě ještě nebyli a jsou z daleka – naše Bystřice je v okrese Frýdek-Místek, pouhých 6 km od ocelářského města Třinec. Areál před bazénem je téměř v centru obce a všude budou šipky a směrovky.
              </p>
              <p>
                U nás jsou vítáni všichni pejskové i jejich majitelé bez ohledu na věkový rozdíl. Pejsek nemusí nic umět, stačí, když nás všechny nepokouše.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={images.group}
              alt="Skupina psů"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-brand-500 px-5 py-4 text-white shadow-lg sm:block">
              <p className="font-display text-2xl font-extrabold">8:00</p>
              <p className="text-sm text-brand-50">začínáme</p>
            </div>
          </div>
        </div>
      </Section>

      {/* IMPORTANT NOTICES */}
      <Section muted>
        <div className="grid gap-5 lg:grid-cols-2">
          <Callout tone="warning">
            <p className="font-bold">Veterinární kontrola u registrace</p>
            <p>
              Při registraci bude veterinář kontrolovat očkovací průkaz pejska, tak ho nezapomeňte vzít s sebou. Pro jistotu zkontrolujte platnost očkování.
            </p>
          </Callout>
          <Callout tone="warning">
            <p className="font-bold">Zákon na ochranu zvířat</p>
            <p>
              Musíme dodržovat zákon – podle Zákona na ochranu zvířat proti týrání 246/1992 Sb. se nemohou zúčastnit pejsci s kupírovanýma ušima.
            </p>
          </Callout>
        </div>
      </Section>

      {/* HIGHLIGHTS */}
      <Section>
        <SectionTitle eyebrow="Na co se těšit" title="Co vás na Hafiádě čeká" align="center" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: TrophyIcon,
              title: "Spousta soutěží",
              text: "Poslušnost, freestyle, výstavy krásy, hafility, stezka nástrah, karneval i Grand Hafi o nejvíc bodů.",
              to: "/pravidla",
              cta: "Pravidla soutěží",
            },
            {
              icon: RunIcon,
              title: "Haficross",
              text: "Běh nebo procházka na trase ~6,8 km. Startovné v plné výši putuje na pomoc opuštěným zvířátkům.",
              to: "/haficross",
              cta: "Více o Haficrossu",
            },
            {
              icon: CameraIcon,
              title: "Fotosoutěž",
              text: `Letošní téma „${photoContest.theme}“. Pošlete fotku svého nejkrásnějšího parťáka.`,
              to: "/fotosoutez",
              cta: "Fotosoutěž 2026",
            },
          ].map((h) => (
            <Card key={h.title} className="flex flex-col">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <h.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-xl font-bold">{h.title}</h3>
              <p className="mt-2 flex-1 text-stone-600">{h.text}</p>
              <Link
                to={h.to}
                className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700"
              >
                {h.cta} →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* CHARITY BANNER */}
      <section className="relative overflow-hidden">
        <img src={images.charity} alt="Pes v útulku" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-teal-800/80" />
        <div className="container-page relative py-16 text-center text-white">
          <HeartIcon className="mx-auto h-12 w-12 text-teal-200" />
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Pomáháme zvířátkům v nouzi
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-teal-50">
            I když nemáte pejska nebo s ním závodit nechcete, přijďte se podívat! Vstupné je čistě dobrovolné a celé putuje na pomoc zvířátkům v nouzi. Každým darem přispějete na dobrou věc.
          </p>
        </div>
      </section>

      {/* PRICE + CTA */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="bg-brand-50/60">
            <h3 className="font-display text-2xl font-bold">Startovné</h3>
            <p className="mt-2 text-stone-600">
              Při platbě na náš účet je startovné výhodnější.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                <span>Platba předem na účet</span>
                <span className="font-display text-lg font-bold text-brand-600">300 Kč</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                <span>Každý další pes (předem)</span>
                <span className="font-display text-lg font-bold text-brand-600">150 Kč</span>
              </li>
              <li className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                <span>Přihláška na místě</span>
                <span className="font-display text-lg font-bold text-stone-500">500 Kč</span>
              </li>
            </ul>
            <p className="mt-4 rounded-xl bg-white px-4 py-3 text-sm">
              Číslo účtu: <span className="font-bold">{event.account}</span> ({event.bank})
            </p>
            <div className="mt-4">
              <PaymentQR variant="hafiada" />
            </div>
          </Card>

          <div className="flex flex-col justify-center rounded-3xl bg-brand-600 p-8 text-white">
            <h3 className="font-display text-3xl font-extrabold">
              Užijte si den s vaším chlupáčem
            </h3>
            <p className="mt-3 text-brand-50">
              Všichni účastníci se mohou těšit na dárkový balíček u registrace. U přihlášek na místě bohužel startovací balíček nezaručíme – proto neváhejte a pošlete přihlášku včas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/prihlaska-hafiada" variant="secondary">
                Přihláška Hafiáda
              </Button>
              <Button to="/prihlaska-haficross" variant="ghost">
                Přihláška Haficross
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
