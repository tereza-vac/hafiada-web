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
    categories: ["malí pejsci (do 45 cm)", "střední a velcí pejsci (nad 45 cm)"],
  },
  {
    title: "TOP čistokrevňák",
    paragraphs: [
      "Můžou se zúčastnit všichni čistokrevní psi bez rozdílu. Nevadí, že nemají PP, stačí když vypadají jako čistokrevní. Soutěž je určená pro dospělé psy od 1 roku výše. Kritériem bude krása a upravenost pejska.",
      "POZOR! Štěňata soutěží pouze o „Nejmilejší štěně Hafiády“, nebudou vyzvána k soutěži o TOP čistokrevňáka ani o Nejvoříškovatějšího voříška. Do věku 1 roku nelze spolehlivě říct, jak pejsek bude v dospělosti vypadat.",
    ],
    categories: ["trpasličí a malí pejsci (do 45 cm)", "střední a velcí (nad 45 cm)"],
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
      "Jedinou podmínkou je, aby skupina (člověk a pes) tvořila tematický celek (např. Čtyři v tanku a pes). Převlek psa není podmínkou.",
    ],
  },
  {
    title: "Nejfešnější veterán",
    paragraphs: [
      "Soutěž je určená všem pejskům jakékoli rasy či vzrůstu, kteří již dosáhli 9 let věku. Bude hodnocená publikem i odbornou porotou.",
      "Který ze seniorů obdrží nejvíce hlasů, bude vyhlášen jako „Nejfešnější veterán“. Náš vítěz bude odměněn pohárem a cenou od sponzora.",
    ],
  },
  {
    title: "Nejsladší štěně",
    paragraphs: [
      "Tato soutěž je hodnocena publikem, automaticky se jí účastní každé štěně, které obdrží soutěžní číslo. Za štěně se u nás považuje pejsek, který ještě nemá 1 rok.",
      "Na přihlášku napište do kolonky „jméno psa“ jméno štěněte, pomlčku a poznámku ŠTĚNĚ. U prezence štěňátko obdrží růžovou mašli.",
    ],
  },
  {
    title: "Hafitrojboj – Nej-Hafiaďák",
    paragraphs: [
      "Hafitrojboj tvoří tři soutěže na čas: Hledej pána, Hafility a Stezka nástrah.",
    ],
    note: "Kdo bude mít nejlepší celkový čas ze všech tří disciplín, získá titul Nej-Hafiaďák. Vítěz dostane pohár a medaili.",
  },
  {
    title: "Hledej pána",
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
    title: "GRAND HAFI",
    paragraphs: [
      "Vítězem se stane pes, který nasbírá za celou dobu Hafiády nejvíce bodů. V každé soutěži bude bodováno prvních 5 míst. Neváhejte a zúčastněte se co největšího počtu soutěží – ceny budou stát za to!",
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

export type ScheduleItem = { time: string; title: string };

export const schedule: ScheduleItem[] = [
  { time: "7:00–9:00", title: "Prezence Haficross (startovací karta a mapa)" },
  { time: "7:30–8:30", title: "Prezence Hafiády" },
  { time: "7:30–9:00", title: "Startovací okénko Haficross" },
  { time: "8:45", title: "Zahájení" },
  { time: "9:00", title: "Soutěže v poslušnosti + juniorhandling" },
  { time: "9:00–11:40", title: "Freestyle" },
  { time: "9:00–11:00", title: "Hledej pána (Hafitrojboj)" },
  { time: "9:00–11:00", title: "Výstavy (Nejsladší štěně, Nejfešnější senior, Vestaj – voříšek, TOP – čistokrevňák)" },
  { time: "12:00", title: "Vyhlášení poslušnosti a Haficrossu" },
  { time: "13:00", title: "Vyhlášení Freestyle a soutěže Hledej pána" },
  { time: "13:20", title: "Ukázka psích sportů" },
  { time: "13:40–15:30", title: "Hafility (Hafitrojboj)" },
  { time: "14:50", title: "Vyhlášení výstav" },
  { time: "15:30", title: "Stezka nástrah (Hafitrojboj)" },
  { time: "16:30", title: "Ukázka" },
  { time: "16:45", title: "Karneval" },
];
