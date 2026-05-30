import { PageHero, Section, Card } from "../components/ui";
import { HeartIcon, PawIcon, TrophyIcon } from "../components/icons";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";

const values = [
  {
    icon: PawIcon,
    title: "Bez rasových předsudků",
    text: "O vítězství se u nás mohou ucházet všichni pejsci bez rozdílu věku či původu – kříženci i čistokrevní.",
  },
  {
    icon: HeartIcon,
    title: "Pro celou rodinu",
    text: "Den plný soutěží, ukázek, přednášek a zábavy nejen pro rodiny s pejsky. Vítáni jsou úplně všichni.",
  },
  {
    icon: TrophyIcon,
    title: "Originální soutěže",
    text: "Připravujeme pohodový den plný zábavy a netradičních soutěží, ve kterých zazáří každý pes.",
  },
];

export default function OnasPage() {
  useSeo({
    title: "O nás",
    description:
      "Jak a proč vznikla Hafiáda – den plný soutěží, ukázek a zábavy pro rodiny s pejsky. O vítězství se mohou ucházet všichni pejsci bez rozdílu věku či původu.",
  });
  return (
    <>
      <PageHero
        eyebrow="O nás"
        title="O nás"
        subtitle="Jak a proč jsme vznikli?"
        image={images.running}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-display text-2xl font-bold text-brand-700">
              Milí přátelé,
            </p>
            <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-stone-700">
              <p>
                vítáme Vás na webových stránkách naší každoroční události
                Hafiáda. Jedná se o den plný soutěží, ukázek, přednášek a zábavy
                (nejen) pro rodiny s pejsky. Naleznete zde veškeré informace o
                soutěži, a časem možná i další zajímavosti ze světa našich
                čtyřnohých kamarádů.
              </p>
              <p>
                Nelíbilo se nám, že většiny psích soutěží se mohou účastnit jen
                čistokrevní šampioni s předlouhým rodokmenem. Proto je tu soutěž
                Hafiáda, v níž se mohou o vítězství ucházet všichni pejsci bez
                rozdílu věku či původu.
              </p>
              <p>
                Budeme rádi, když se sejdeme v hojném počtu, a společně znova
                prožijeme pohodový den plný zábavy a zajímavých originálních
                soutěží.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={images.kid}
              alt="Dítě se psem na Hafiádě"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-brand-500 px-5 py-4 text-white shadow-lg sm:block">
              <p className="font-display text-lg font-extrabold">Bez předsudků</p>
              <p className="text-sm text-brand-50">vítáni jsou všichni</p>
            </div>
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title} className="flex flex-col">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <v.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-stone-600">{v.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
