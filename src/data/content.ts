export type DetailSection = {
  heading: string;
  text?: string;
  items?: string[];
};

export type Competition = {
  title: string;
  paragraphs: string[];
  categories?: string[];
  note?: string;
  badge?: string;
  sections?: DetailSection[];
};

export const competitions: Competition[] = [
  {
    title: "Poslušnost – Nejlepší mladý cvičitel",
    paragraphs: [
      "Tato disciplína je určena pro začínající psovody, je cílená především na děti. Má za cíl předvést, jak dítě s pejskem pracuje, jaký mají vzájemný vztah a jaká je mezi psem a dítětem vzájemná souhra.",
      "Soutěží se ve dvou věkových kategoriích mladých psovodů.",
    ],
    categories: ["6–10 let", "11–15 let"],
    note: "Horní hranice věku cvičitele je 15 let. Kdo se hlásí do soutěže v poslušnosti, NEMŮŽE současně soutěžit ve freestyle.",
    sections: [
      {
        heading: "Podmínky účasti",
        items: [
          "Každý řádně přihlášený účastník je povinen se seznámit s podmínkami účasti i samotné soutěže uveřejněnými zde v propozicích.",
          "V den soutěže musí být pes v dobrém zdravotním stavu. Vyloučeni jsou psi nemocní, zranění, feny v druhé polovině březosti, feny kojící, feny do 1 měsíce po porodu a feny hárající.",
          "V každé kategorii je posuzováno maximálně 15 týmů.",
          "Povolen je hladký nestahovací kožený nebo látkový obojek nebo obyčejný nestahovací řetízkový obojek – pes ho musí mít na krku volně. Ostnatý obojek, flexi vodítko, postroj, ohlávka (halti) ani elektrický obojek nejsou povoleny.",
          "Povel je možné opakovat 3×. Povoleny jsou povely ústní, posunky nebo obojí současně. Pozor – nadbytečné opakování povelů snižuje hodnocení!",
          "Odměňovat psa pamlskem, hračkou apod. je možné až po ukončení cviku, ne v jeho průběhu.",
        ],
      },
      {
        heading: "Hodnocené dovednosti – kategorie 6–10 let",
        items: [
          "Chůze u nohy – pes na vodítku, s obraty za pochodu (trasa bude naznačena a slovně povelována rozhodčím).",
          "Sedni – pes na vodítku, u nohy nebo před psovodem podle vlastní volby.",
          "Lehni – pes na vodítku, u nohy nebo před psovodem podle vlastní volby.",
          "Přivolání psa ze vzdálenosti alespoň 5 m (z bezpečnostních důvodů bude pes na stopovacím vodítku, můžeme zapůjčit).",
          "Volitelný cvik (např. Dej pac, Válej sudy, Štěkej apod.).",
        ],
      },
      {
        heading: "Hodnocené dovednosti – kategorie 11–15 let",
        items: [
          "Chůze u nohy – pes na vodítku, s obraty za pochodu (trasa bude naznačena, mírně náročnější, a slovně povelována rozhodčím).",
          "Sedni – pes na vodítku, u nohy.",
          "Lehni – pes na vodítku, u nohy.",
          "Přivolání psa upoutaného na stopovacím vodítku ze vzdálenosti alespoň 5 m.",
          "Odložení psa na místě v libovolné poloze po dobu 30 sekund s odchodem psovoda od psa do vzdálenosti 5 kroků.",
        ],
      },
      {
        heading: "Vyhodnocení",
        text: "Po poradě rozhodčích se oceňuje prvních 5 týmů. Výkon se hodnotí po 2 bodech sestupně od 10 bodů za 1. místo podle pořadí (10, 8, 6, 4, 2).",
      },
    ],
  },
  {
    title: "Mladý vystavovatel – juniorhandling",
    paragraphs: [
      "Junior handling je o tom, jak dítě svého psa předvede – ne o kráse psa, ale o souhře, klidu a šikovnosti malého vystavovatele. Soutěží se ve dvou věkových kategoriích.",
    ],
    categories: ["6–10 let věku psovoda", "11–15 let věku psovoda"],
    sections: [
      {
        heading: "Co se hodnotí",
        items: [
          "Vztah se psem (klid, spolupráce, důvěra).",
          "Předvedení psa (pohyb, tempo, postoj).",
          "Vzhled handlera (čisté, vhodné oblečení).",
          "Technika (vodítko, ukázání zubů, vystavení psa).",
        ],
      },
      {
        heading: "Pro nejmenší – je to jako hra 🐾",
        text: "Ukazuješ svého pejska, jak je krásný a šikovný. A co máš dělat?",
        items: [
          "🐶 Pejsek jde vedle tebe – drž vodítko hezky jemně, pejsek má jít vedle nohy, ne tě tahat.",
          "🚶 Chodíš dokola v kruhu – jdi nebo běž plynule, nekoukej na zem, koukej před sebe.",
          "🧍 Zastavíš a postavíš pejska – má stát rovně jako socha, nožičky hezky srovnat.",
          "😊 Usmívej se a buď v klidu – jako byste si spolu hráli; když uděláš chybu, nic se neděje.",
          "👀 Poslouchej pana rozhodčího – řekne ti, kam jít (tam a zpátky, do kruhu…), ty jen uděláš, co chce.",
        ],
      },
    ],
  },
  {
    title: "VESTAJ – Nejvoříškovatější voříšek",
    paragraphs: [
      "Do této soutěže se přijímají všichni kříženci. Soutěž je určena pro dospělé psy nad 1 rok věku.",
      "Vítězem bude voříšek nebo vořech, který se nejmíň podobá jakémukoliv obecně známému plemeni a má velké osobní kouzlo. Svou roli bude také hrát upravenost pejska.",
    ],
    categories: ["malí pejsci (do 40 cm)", "střední a velcí pejsci (nad 40 cm)"],
  },
  {
    title: "TOP čistokrevňák",
    paragraphs: [
      "Můžou se zúčastnit všichni čistokrevní psi bez rozdílu. Nevadí, že nemají PP, stačí když vypadají jako čistokrevní. Soutěž je určená pro dospělé psy od 1 roku výše. Kritériem bude krása a upravenost pejska.",
      "POZOR! Štěňata soutěží pouze o „Nejsladší štěně Hafiády“, nebudou vyzvána k soutěži o TOP čistokrevňáka ani o Nejvoříškovatějšího voříška. Do věku 1 roku nelze spolehlivě říct, jak pejsek bude v dospělosti vypadat.",
    ],
    categories: ["trpasličí a malí pejsci (do 40 cm)", "střední a velcí (nad 40 cm)"],
  },
  {
    title: "HAFI KUSY (freestyle)",
    paragraphs: [
      "V této kategorii můžete předvést cokoliv, co Váš pejsek umí. Soutěž bude hodnotit odborná porota, vítězem bude tým, který předvede nejatraktivnější kousky. Celé vystoupení nesmí trvat déle než 3 minuty.",
      "Nerozhoduje délka, rozhodujícím faktorem bude krása vystoupení a jedinečnost předvedených prvků.",
      "UPOZORNĚNÍ! Týmy, které se hlásí do Hafi kusy (Freestyle), se nemohou současně hlásit do soutěže v poslušnosti.",
    ],
  },
  {
    title: "KARNEVAL (soutěž o nejlepší společnou masku)",
    paragraphs: [
      "Tato soutěž je hodnocena jak publikem, tak i odbornou porotou. Proběhne formou přehlídky masek v kruhu. Kreativitě se meze nekladou, počet účastníků ve skupině není omezen.",
      "Jedinou podmínkou je, aby skupina (člověk a pes) tvořila tematický celek (např. Čtyři v tanku a pes). Převlek psa není podmínkou. Diváci hlasují zeleným lístkem – urny jsou u prezence.",
    ],
  },
  {
    title: "Nejfešnější veterán",
    paragraphs: [
      "Soutěž je určená všem pejskům jakékoli rasy či vzrůstu, kteří již dosáhli 9 let věku. Jde o diváckou soutěž – hlasuje se žlutým lístkem, urny najdete u prezence.",
      "Který ze seniorů obdrží nejvíce hlasů, bude vyhlášen jako „Nejfešnější veterán“. Náš vítěz bude odměněn pohárem a cenou od sponzora.",
    ],
  },
  {
    title: "Nejsladší štěně",
    paragraphs: [
      "Tato soutěž je hodnocena publikem, automaticky se jí účastní každé štěně, které obdrží soutěžní číslo. Za štěně se u nás považuje pejsek, který ještě nemá 1 rok. Diváci hlasují růžovým lístkem – urny jsou u prezence.",
      "Na přihlášku napište do kolonky „jméno psa“ jméno štěněte, pomlčku a poznámku ŠTĚNĚ. U prezence štěňátko obdrží růžovou mašli.",
    ],
  },
  {
    title: "Hafitrojboj – Nejlepší Hafibojař Hafiády",
    paragraphs: [
      "Hafitrojboj tvoří tři soutěže na čas: Hledej svého pána, Hafility a Stezka nástrah.",
    ],
    note: "Kdo bude mít nejlepší celkový čas ze všech tří disciplín, získá titul Nejlepší Hafibojař Hafiády. Vítěz dostane pohár a medaili.",
  },
  {
    title: "Hledej svého pána",
    paragraphs: [
      "Pejsek poznává svého pána mezi jinými lidmi. Paniček je schovaný s dalšími figuranty pod plachtou. Pes je vyzván k hledání pána po přivolání majitelem.",
      "Čas se počítá od přivolání psa do úspěšného nalezení. Pokud pes majitele nenajde do 30 vteřin, může paniček přivolání zopakovat.",
    ],
    badge: "Hafitrojboj",
  },
  {
    title: "Hafility",
    paragraphs: [
      "V této soutěži se pes se svým psovodem v běhu snaží na čas překonat překážky. Časový limit pro překonání dráhy jsou 2 minuty. Při shodě časů rozhodne o pořadí los.",
    ],
    badge: "Hafitrojboj",
  },
  {
    title: "Stezka nástrah",
    paragraphs: [
      "V této soutěži půjde o běh s překážkami – nebudou to ale překážky klasické, nýbrž lákadla, která jsou pro některé pejsky neodolatelná.",
      "Nejprve vyběhne psovod, asistenti přidrží psa. Až bude pán v cíli, bude pes vypuštěn a pán se ho bude snažit přivolat. Účelem je proběhnout trasu v co nejrychlejším čase, oba časy se sčítají.",
    ],
    badge: "Hafitrojboj",
  },
  {
    title: "GRAND PRIX 2026",
    paragraphs: [
      "Celkovým vítězem Hafiády – Grand Prix 2026 – se stane pes, který nasbírá za celý den nejvíce bodů. V každé soutěži bude bodováno prvních 5 míst. Neváhejte a zúčastněte se co největšího počtu soutěží – ceny budou stát za to!",
    ],
  },
  {
    title: "Dětský koutek",
    paragraphs: [
      "Po celou dobu Hafiády bude pro děti připravený dětský koutek plný zábavy – různé hry, sportovní soutěže, doplňovačky, omalovánky, výroba náramku se jménem, malování na obličej i velká skákací atrakce. Prostě TOP zábava pro děti.",
      "Součástí koutku je i soutěž v kreslení psa, která probíhá po celou dobu Hafiády.",
    ],
    note: "Dohled a bezpečnost dětí (zejména těch menších) zajišťuje po celou dobu jejich doprovod – rodiče.",
    sections: [
      {
        heading: "Soutěž v kreslení psa",
        items: [
          "Děti mají k dispozici výkresy různého formátu, pastelky, tužky, tempery, vodové barvy i štětce. Pokud chtějí, mohou si přinést i vlastní pastelky nebo tužky.",
          "Dítě musí obrázek nakreslit nebo namalovat vlastnoručně – bez předlohy, a to ani z mobilního telefonu.",
          "U kreslení je k dispozici dohled, který dětem pomůže ostrouhat pastelky či tužky, vymění vodu a dohlédne na hladký průběh soutěže.",
          "Bezpečnost menších dětí si musí zajistit jejich doprovod (rodiče).",
          "Hodnotit obrázky bude odborná porota – hodnotí se pouze obrázky vzniklé na místě.",
          "Donesené obrázky se nehodnotí, je však možné je vystavit v galerii, která bude mít své místo v areálu parku.",
        ],
      },
    ],
  },
];

export type StartlistCategory = {
  id: "women" | "men";
  title: string;
  names: string[];
};

export const haficrossStartlist: StartlistCategory[] = [
  {
    id: "women",
    title: "Haficross ženy",
    names: [
      "Aneta Pobořilová",
      "Šárka Walczyšková",
      "Katerina Galikova",
      "Klára Valicová",
      "Monika Čaganová",
      "Anika Grabec",
      "Kristýna Křištofová",
      "Nikol Křištofová",
      "Natálie Nela Plevková",
      "Tereza Vaňková",
      "Eva Jurečková",
      "Eva Bonnová",
      "Tereza Wróblová",
      "Pavlína Nepejchalová",
      "Hana Jurajdová",
      "Nicole Melarová",
    ],
  },
  {
    id: "men",
    title: "Haficross muži",
    names: [
      "Filip Topič",
      "Martin Čip",
      "Pavel Bolek",
      "Michal Daxner",
      "Tomáš Pítr",
      "Jakub Balcařík",
      "Viktor Heneš",
    ],
  },
];

export type ScheduleKind = "info" | "competition" | "announcement" | "demo";

export type ScheduleItem = {
  time: string;
  title: string;
  place?: string;
  kind?: ScheduleKind;
};

/** Ranní prezence a Haficross – pro účastníky, na diváckém programu není. */
export const morningSchedule: ScheduleItem[] = [
  { time: "7:00", title: "Vstup do areálu", kind: "info" },
  { time: "7:00–9:00", title: "Prezence Haficross (startovací karta a mapa)", kind: "info" },
  { time: "7:30–8:30", title: "Prezence Hafiády", kind: "info" },
  { time: "7:30–9:00", title: "Startovací okénko Haficross", kind: "info" },
];

/** Program pro diváky podle oficiálního harmonogramu Hafiády 2026. */
export const schedule: ScheduleItem[] = [
  { time: "8:30", title: "Zahájení", kind: "info" },
  { time: "8:45", title: "Ukázka triků – FREESTYLE", place: "travnatá plocha", kind: "demo" },
  { time: "9:00–12:00", title: "FREESTYLE – HAFI KUSY", place: "plocha pro Freestyle", kind: "competition" },
  { time: "9:00–10:30", title: "Poslušnostní soutěže pro mládež", place: "hlavní plocha", kind: "competition" },
  { time: "9:00–10:00", title: "Juniorhandling", place: "hlavní plocha", kind: "competition" },
  { time: "10:10", title: "Vyhlášení vítězů JUNIORHANDLING", kind: "announcement" },
  { time: "10:30", title: "Nejsladší štěně Hafiády • hlasování diváků", place: "hlavní plocha", kind: "competition" },
  { time: "10:45", title: "VESTAJ – Nejvoříškovatější voříšek do 40 cm a nad 40 cm", place: "hlavní plocha", kind: "competition" },
  { time: "11:15", title: "Vyhlášení vítězů poslušnostních soutěží", kind: "announcement" },
  { time: "11:30", title: "TOP čistokrevňák do 40 cm a nad 40 cm", place: "hlavní plocha", kind: "competition" },
  { time: "12:00", title: "Vyhlášení vítěze HAFICROSS", kind: "announcement" },
  { time: "12:00", title: "Vyhlášení vítězů Nejsladší štěně a VESTAJ", kind: "announcement" },
  { time: "12:15", title: "Nejfešnější veterán • divácká soutěž", kind: "competition" },
  { time: "12:30", title: "Vyhlášení vítězů TOP čistokrevňák", kind: "announcement" },
  { time: "12:30", title: "Ukázka TREIBALL – Markéta Kufová", kind: "demo" },
  { time: "12:45", title: "Vyhlášení vítězů Nejfešnější veterán", kind: "announcement" },
  { time: "13:10", title: "Vyhlášení vítězů fotosoutěže", kind: "announcement" },
  { time: "13:30", title: "Ukázka RALLY OBEDIENCE – ABS psí škola", place: "travnatá plocha", kind: "demo" },
  { time: "14:00", title: "Stezka nástrah", place: "travnatá plocha", kind: "competition" },
  { time: "14:30", title: "Ukázka MANTRAILING – Renáta Ivánková", place: "hlavní plocha", kind: "demo" },
  { time: "po ukázce", title: "Vyhlášení vítězů Stezky nástrah", kind: "announcement" },
  { time: "15:10", title: "Hafility", place: "travnatá plocha", kind: "competition" },
  { time: "15:40", title: "Představení hostů a organizací", kind: "info" },
  { time: "15:40", title: "Vyhlášení vítěze Hledej svého pána", kind: "announcement" },
  { time: "15:55", title: "Vyhlášení Nejlepšího Hafibojaře Hafiády", kind: "announcement" },
  { time: "16:00", title: "Příprava na karneval", kind: "info" },
  { time: "16:10", title: "Karneval • hlasování diváků + odborná porota", kind: "competition" },
  { time: "16:25", title: "Přestávka • hudba a občerstvení • vyhodnocení kreslení", kind: "info" },
  { time: "16:25", title: "Vyhlášení vítězů v kreslení", kind: "announcement" },
  { time: "16:35", title: "Vyhlášení vítězů karnevalu", kind: "announcement" },
  { time: "16:40", title: "Vyhlášení celkového vítěze Hafiády – GRAND PRIX 2026", kind: "announcement" },
  { time: "od 17:00", title: "Volná zábava • konec programu", kind: "info" },
];

export const visitorNotes = [
  {
    title: "Dentální prohlídka",
    text: "U stánku Diamona Clinic si pejsci mohou nechat zdarma zkontrolovat zoubky.",
  },
  {
    title: "Dětský koutek",
    text: "Po celý den je otevřený dětský koutek – hry, kreslení, náramky i skákací atrakce.",
  },
  {
    title: "Jízdy elektromobilem",
    text: "Od 11:00 jezdí elektromobil – svezení pro malé i velké.",
  },
];

export const votingTickets = [
  { color: "Růžový lístek", contest: "Nejsladší štěně" },
  { color: "Žlutý lístek", contest: "Nejfešnější veterán" },
  { color: "Zelený lístek", contest: "Karneval" },
];
