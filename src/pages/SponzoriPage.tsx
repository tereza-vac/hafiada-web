import { PageHero, Section, Card, Button } from "../components/ui";
import { HeartIcon, MailIcon } from "../components/icons";
import { partners, sponsors } from "../data/site";
import { images } from "../data/images";
import { useContact } from "../components/ContactModal";
import { useSeo } from "../hooks/useSeo";

export default function SponzoriPage() {
  const { open } = useContact();
  useSeo({
    title: "Naši sponzoři",
    description:
      "Děkujeme partnerům a sponzorům Hafiády za podporu. Chcete se stát sponzorem a pomoci zvířátkům v nouzi? Ozvěte se nám.",
  });
  return (
    <>
      <PageHero
        eyebrow="O nás"
        title="Naši sponzoři"
        subtitle="Děkujeme všem, kdo Hafiádu podporují a pomáhají nám dělat radost psům i jejich páníčkům."
        image={images.charity}
      />
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <HeartIcon className="h-8 w-8" />
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold">Velké díky patří našim partnerům</h2>
          <p className="mt-3 text-lg text-stone-600">
            Bez podpory sponzorů by Hafiáda nebyla tím, čím je. Díky nim můžeme připravit dárkové balíčky, ceny pro vítěze a hlavně podpořit zvířátka v nouzi.
          </p>
        </div>

        {sponsors
          .filter((s) => s.featured)
          .map((s) => (
            <div key={s.name} className="mt-10">
              <p className="text-center text-sm font-bold uppercase tracking-wider text-brand-600">
                Generální sponzor
              </p>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="mx-auto mt-3 flex max-w-md flex-col items-center rounded-3xl border-2 border-brand-200 bg-white p-8 shadow-sm transition hover:opacity-80"
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className="max-h-28 w-auto object-contain"
                />
                <span className="mt-4 text-center font-display text-lg font-bold text-stone-700">
                  {s.name}
                </span>
              </a>
            </div>
          ))}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors
            .filter((s) => !s.featured)
            .map((s) => {
            const inner = (
              <>
                <div className="flex h-24 w-full items-center justify-center">
                  <img
                    src={s.logo}
                    alt={s.name}
                    loading="lazy"
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
                <span className="mt-3 text-center text-sm font-semibold leading-tight text-stone-600">
                  {s.name}
                </span>
              </>
            );
            return (
              <Card key={s.name} className="flex h-44 flex-col items-center justify-center px-4">
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full w-full flex-col items-center justify-center transition hover:opacity-80"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Card>
            );
          })}
        </div>

        <div className="mt-12">
          <h3 className="text-center font-display text-2xl font-bold">Další partneři akce</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-stone-600">
            Děkujeme i všem, kdo Hafiádu 2026 podpořili a zatím tu nemají logo. Bez vás by to nešlo.
          </p>
          <ul className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2">
            {partners.map((p) => {
              const inner = (
                <span className="font-semibold text-stone-700">{p.name}</span>
              );
              return (
                <li
                  key={p.name}
                  className="rounded-2xl border border-brand-100 bg-white px-4 py-3 text-center shadow-sm"
                >
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-brand-700 transition hover:text-brand-800"
                    >
                      {p.name} <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-12 rounded-3xl bg-brand-600 p-8 text-center text-white">
          <h3 className="font-display text-2xl font-bold">Chcete se stát sponzorem?</h3>
          <p className="mx-auto mt-2 max-w-xl text-brand-50">
            Pokud byste rádi podpořili naši akci a pomohli zvířátkům v nouzi, ozvěte se nám. Rádi probereme možnosti spolupráce.
          </p>
          <Button variant="secondary" className="mt-5" onClick={() => open("Sponzoring Hafiáda")}>
            <MailIcon className="h-5 w-5" /> Napsat nám
          </Button>
        </div>
      </Section>
    </>
  );
}
