export type Competition = {
  title: string;
  paragraphs: string[];
  categories?: string[];
};

export const competitions: Competition[] = [
  {
    title: "Poslušnost – Nejlepší mladý cvičitel",
    paragraphs: [
      "Tato disciplína je určena pro začínající psovody, je cílená především na děti. Má za cíl předvést, jak dítě s pejskem pracuje, jaký mají vzájemný vztah a jaká je mezi psem a dítětem vzájemná souhra.",
      "Horní hranice věku cvičitele je 15 let. Kdo se hlásí do soutěže v poslušnosti, NEMŮŽE současně soutěžit ve freestyle.",
    ],
  },
  {
    title: "Mladý vystavovatel – juniorhandling",
    paragraphs: ["Bude se soutěžit ve 2 kategoriích:"],
    categories: ["6–10 let věku psovoda", "11–15 let věku psovoda"],
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
    title: "Stezka nástrah",
    paragraphs: [
      "V této soutěži půjde o běh s překážkami – nebudou to ale překážky klasické, nýbrž lákadla, která jsou pro některé pejsky neodolatelná.",
      "Nejprve vyběhne psovod, asistenti přidrží psa. Až bude pán v cíli, bude pes vypuštěn a pán se ho bude snažit přivolat. Účelem je proběhnout trasu v co nejrychlejším čase, oba časy se sčítají.",
    ],
  },
  {
    title: "Hafility",
    paragraphs: [
      "V této soutěži se pes se svým psovodem v běhu snaží na čas překonat překážky. Časový limit pro překonání dráhy jsou 2 minuty. Při shodě časů rozhodne o pořadí los.",
    ],
  },
  {
    title: "Najdi svého pána",
    paragraphs: [
      "Pejsek poznává svého pána mezi jinými lidmi. Paniček je schovaný s dalšími figuranty pod plachtou. Pes je vyzván k hledání pána po přivolání majitelem.",
      "Čas se počítá od přivolání psa do úspěšného nalezení. Pokud pes majitele nenajde do 30 vteřin, může paniček přivolání zopakovat.",
    ],
  },
  {
    title: "GRAND HAFI",
    paragraphs: [
      "Vítězem se stane pes, který nasbírá za celou dobu Hafiády nejvíce bodů. V každé soutěži (kromě poslušnosti) bude bodováno prvních 5 míst. Neváhejte a zúčastněte se co největšího počtu soutěží – ceny budou stát za to!",
    ],
  },
  {
    title: "Soutěž pro děti v kreslení psa",
    paragraphs: [
      "Tato soutěž probíhá po celou dobu Hafiády. Děti budou mít k dispozici výkresy různého formátu, pastelky, tempery, vodové barvy i štětce. Dítě musí obrázek nakreslit vlastnoručně, bez předlohy.",
      "Hodnotit obrázky bude odborná porota – hodnotí se pouze obrázky vzniklé na místě. Donesené obrázky bude možné vystavit v galerii v areálu parku.",
    ],
  },
];

export type ScheduleItem = { time: string; title: string };

export const schedule: ScheduleItem[] = [
  { time: "7:30–8:30", title: "Prezence" },
  { time: "7:30–9:00", title: "Start Haficrossu" },
  { time: "8:45", title: "Zahájení" },
  { time: "9:00", title: "Soutěže v poslušnosti + juniorhandling" },
  { time: "9:00–11:40", title: "Freestyle" },
  { time: "9:00–11:00", title: "Hledej pána" },
  { time: "9:00–11:00", title: "Výstavy (Nejsladší štěně, Nejfešnější senior, Vestaj – voříšek, TOP – čistokrevňák)" },
  { time: "12:00", title: "Vyhlášení poslušnosti a Haficrossu" },
  { time: "13:00", title: "Vyhlášení Freestyle a soutěže Hledej pána" },
  { time: "13:20", title: "Ukázka psích sportů" },
  { time: "13:40–15:30", title: "Hafility" },
  { time: "14:50", title: "Vyhlášení výstav" },
  { time: "15:30", title: "Stezka nástrah" },
  { time: "16:30", title: "Ukázka" },
  { time: "16:45", title: "Karneval" },
];
