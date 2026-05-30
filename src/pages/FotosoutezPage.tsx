import { PageHero, Section, Card, Button } from "../components/ui";
import { CameraIcon, HeartIcon } from "../components/icons";
import { contact, photoContest } from "../data/site";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";

export default function FotosoutezPage() {
  useSeo({
    title: "Fotosoutěž 2026",
    description:
      "Fotosoutěž Hafiády 2026 na téma „Můj pes je nejkrásnější\". Pošlete fotku svého psího parťáka a zapojte se.",
  });
  return (
    <>
      <PageHero
        eyebrow="Přátelé, pozor!"
        title={`Fotosoutěž ${photoContest.year}`}
        subtitle="Pošlete fotku svého nejkrásnějšího chlupatého parťáka a zapojte se do letošní fotosoutěže."
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
            Můj pes je nejkrásnější
            <HeartIcon className="h-7 w-7 text-brand-500" />
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="font-display text-xl font-bold">Jak se zapojit</h3>
            <p className="mt-2 text-stone-700">
              Vyfoťte svého psího parťáka tak, aby na fotce vynikla jeho krása a osobnost. Fotku nám pošlete a sledujte naši facebookovou skupinu, kde budeme zveřejňovat další informace o hlasování a cenách.
            </p>
            <Button href={`mailto:${contact.email}?subject=Fotosoutěž 2026`} className="mt-5">
              Poslat fotku e-mailem
            </Button>
          </Card>
          <img
            src={images.senior}
            alt="Pes na fotografii"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </Section>
    </>
  );
}
