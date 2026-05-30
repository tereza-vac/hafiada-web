import { PageHero, Section, Card, Button } from "../components/ui";
import { HeartIcon, MailIcon } from "../components/icons";
import { sponsors } from "../data/site";
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((s) => {
            const inner = (
              <>
                <img
                  src={s.logo}
                  alt={s.name}
                  loading="lazy"
                  className="max-h-24 w-auto object-contain"
                />
                <span className="mt-3 text-center text-sm font-semibold text-stone-600">
                  {s.name}
                </span>
              </>
            );
            return (
              <Card key={s.name} className="flex h-44 flex-col items-center justify-center">
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center transition hover:opacity-80"
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
