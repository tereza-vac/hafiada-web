import { PageHero, Section, Card, Button } from "../components/ui";
import { HeartIcon, MailIcon } from "../components/icons";
import { contact } from "../data/site";
import { images } from "../data/images";

export default function SponzoriPage() {
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
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="flex h-32 items-center justify-center">
              <span className="font-display text-lg font-bold text-stone-300">
                Místo pro logo sponzora
              </span>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-brand-600 p-8 text-center text-white">
          <h3 className="font-display text-2xl font-bold">Chcete se stát sponzorem?</h3>
          <p className="mx-auto mt-2 max-w-xl text-brand-50">
            Pokud byste rádi podpořili naši akci a pomohli zvířátkům v nouzi, ozvěte se nám. Rádi probereme možnosti spolupráce.
          </p>
          <Button href={`mailto:${contact.email}?subject=Sponzoring Hafiáda`} variant="secondary" className="mt-5">
            <MailIcon className="h-5 w-5" /> Napsat nám
          </Button>
        </div>
      </Section>
    </>
  );
}
