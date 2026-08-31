// AUTO-GENEROVÁNO z oficiálních výsledků Hafiády (30. 8. 2026).
// Zdroj: grand_hafi.docx, hafiada.docx, nej_hafiadak.docx

export type ResultRow = {
  rank: string;
  num: string;
  dog: string;
  handler: string;
  breed: string;
  age: string;
  points: number;
};

export type ResultCategory = { title: string; rows: ResultRow[] };

export type ResultStats = {
  total: number;
  finished: number;
  didNotStart: number;
  didNotFinish: number;
  disqualified: number;
};

export const resultsDate = "30. 8. 2026";

export const overall: ResultCategory = {
  title: "GRAND HAFI",
  rows: [
  {
    "rank": "1",
    "num": "4",
    "dog": "Ella",
    "handler": "EVA BONNOVÁ",
    "breed": "Ella - Belgický ovčák Groenendael",
    "age": "4",
    "points": 46
  },
  {
    "rank": "2",
    "num": "3",
    "dog": "Loty",
    "handler": "EVA BONNOVÁ",
    "breed": "Šiperka",
    "age": "3",
    "points": 32
  },
  {
    "rank": "3",
    "num": "26",
    "dog": "Heidi",
    "handler": "VERONIKA STRATILOVÁ",
    "breed": "Kříženec",
    "age": "5",
    "points": 22
  },
  {
    "rank": "4",
    "num": "40",
    "dog": "Sandy",
    "handler": "NELA ŠŤASTNÁ",
    "breed": "nelyss.stast@gmail.com",
    "age": "5",
    "points": 20
  },
  {
    "rank": "5",
    "num": "62",
    "dog": "Bea",
    "handler": "ERI TÓTHOVÁ",
    "breed": "Australský ovčák bez pp",
    "age": "2",
    "points": 18
  },
  {
    "rank": "6",
    "num": "49",
    "dog": "Gump",
    "handler": "SANDRA GUŇKOVÁ",
    "breed": "Kříženec",
    "age": "5",
    "points": 18
  },
  {
    "rank": "6",
    "num": "46",
    "dog": "Sweet Chilli",
    "handler": "DOROTA KOLKOVÁ",
    "breed": "Sibiřský husky",
    "age": "1",
    "points": 18
  },
  {
    "rank": "8",
    "num": "61",
    "dog": "Fly",
    "handler": "ERI TÓTHOVÁ",
    "breed": "Kříženec",
    "age": "8",
    "points": 16
  },
  {
    "rank": "9",
    "num": "70",
    "dog": "Berru",
    "handler": "ARETTA PEŇAŠKA",
    "breed": "kříženec knírače",
    "age": "5",
    "points": 12
  },
  {
    "rank": "10",
    "num": "2",
    "dog": "Mia",
    "handler": "TOMÁŠ PÍTR",
    "breed": "Belgický ovčák tervueren",
    "age": "6",
    "points": 12
  },
  {
    "rank": "10",
    "num": "27",
    "dog": "Wendy",
    "handler": "VERONIKA STRATILOVÁ",
    "breed": "Kříženec",
    "age": "9",
    "points": 12
  },
  {
    "rank": "12",
    "num": "38",
    "dog": "Darwin",
    "handler": "NIKOLAS POPPE",
    "breed": "Mops",
    "age": "1",
    "points": 10
  },
  {
    "rank": "13",
    "num": "55",
    "dog": "Jessi",
    "handler": "MATYLDA POLOCZKOVÁ",
    "breed": "Kavalír king Charles spaniel",
    "age": "2",
    "points": 10
  },
  {
    "rank": "14",
    "num": "47",
    "dog": "Max",
    "handler": "KRISTÝNA WALENTOVÁ",
    "breed": "Křiženec",
    "age": "6",
    "points": 10
  },
  {
    "rank": "15",
    "num": "31",
    "dog": "Megi",
    "handler": "LUCIE PETRATUROVÁ",
    "breed": "Čivava krátkosrstá",
    "age": "8",
    "points": 10
  },
  {
    "rank": "16",
    "num": "19",
    "dog": "Mia",
    "handler": "SABINA VAŇKOVÁ",
    "breed": "Jorkšírský teriér",
    "age": "7",
    "points": 10
  },
  {
    "rank": "17",
    "num": "57",
    "dog": "Sunny",
    "handler": "ZUZANA ŠTĚRBOVÁ",
    "breed": "Zlatý retrívr",
    "age": "9",
    "points": 10
  },
  {
    "rank": "17",
    "num": "1",
    "dog": "Matýsek",
    "handler": "SMUŽOVÁ Michaela",
    "breed": "Kříženec",
    "age": "11",
    "points": 10
  },
  {
    "rank": "19",
    "num": "69",
    "dog": "Dixi",
    "handler": "ANETA POBOŘILOVÁ",
    "breed": "Kříženec",
    "age": "7",
    "points": 8
  },
  {
    "rank": "20",
    "num": "59",
    "dog": "Hubert",
    "handler": "PETRA ČIPOVA",
    "breed": "Hubert",
    "age": "2",
    "points": 8
  },
  {
    "rank": "21",
    "num": "30",
    "dog": "Odeta",
    "handler": "LUCIE PETRATUROVÁ",
    "breed": "Pudl Královský",
    "age": "4",
    "points": 8
  },
  {
    "rank": "22",
    "num": "15",
    "dog": "Oliver",
    "handler": "SOŇA TŘETINOVÁ",
    "breed": "Australský ovčák",
    "age": "12",
    "points": 8
  },
  {
    "rank": "23",
    "num": "34",
    "dog": "Ozzy",
    "handler": "DANIELA HREHUŠOVÁ",
    "breed": "border kolie",
    "age": "1",
    "points": 8
  },
  {
    "rank": "24",
    "num": "10",
    "dog": "Reksio",
    "handler": "JUSTYNA SZKATULA",
    "breed": "kříženec",
    "age": "6",
    "points": 8
  },
  {
    "rank": "25",
    "num": "56",
    "dog": "Ruby",
    "handler": "JOSEFÍNA POLOCZKOVÁ",
    "breed": "Zlatý retrívr",
    "age": "5",
    "points": 8
  },
  {
    "rank": "25",
    "num": "18",
    "dog": "Bo",
    "handler": "HLAVKOVÁ Adéla",
    "breed": "Bostonský teriér",
    "age": "2",
    "points": 8
  },
  {
    "rank": "27",
    "num": "17",
    "dog": "Anita Anarela",
    "handler": "TEREZA OŽANOVÁ",
    "breed": "Sheltie",
    "age": "8",
    "points": 6
  },
  {
    "rank": "28",
    "num": "63",
    "dog": "Dasty",
    "handler": "MICHAELA MULLEROVÁ",
    "breed": "Kříženec",
    "age": "11",
    "points": 6
  },
  {
    "rank": "29",
    "num": "48",
    "dog": "Zaya Chiara od Trokavecké skály",
    "handler": "KLÁRA TEOFILOVÁ",
    "breed": "Samojed",
    "age": "1",
    "points": 6
  },
  {
    "rank": "30",
    "num": "13",
    "dog": "Dyna",
    "handler": "VAŇKOVÁ Tereza",
    "breed": "Viped",
    "age": "2",
    "points": 6
  },
  {
    "rank": "30",
    "num": "52",
    "dog": "Míša",
    "handler": "RASZKOVÁ Michaela",
    "breed": "Trpasličí pudl",
    "age": "1",
    "points": 6
  },
  {
    "rank": "32",
    "num": "14",
    "dog": "Aghata z Andělského domu",
    "handler": "BARBORA MRUZKOVÁ",
    "breed": "BOC",
    "age": "1",
    "points": 4
  },
  {
    "rank": "33",
    "num": "44",
    "dog": "Bailey - ŠTĚNĚ",
    "handler": "EDITA WOJNAROVÁ",
    "breed": "Border kolie",
    "age": "10",
    "points": 4
  },
  {
    "rank": "34",
    "num": "12",
    "dog": "Bella",
    "handler": "TEREZA VAŇKOVÁ",
    "breed": "Kříženec",
    "age": "6",
    "points": 4
  },
  {
    "rank": "35",
    "num": "53",
    "dog": "Teddy",
    "handler": "ADÉLA STONAVSKÁ",
    "breed": "Slovenský Čuvač",
    "age": "3",
    "points": 4
  },
  {
    "rank": "36",
    "num": "65",
    "dog": "Yogy",
    "handler": "SANDRA ŠEBESTOVÁ",
    "breed": "Vestaj",
    "age": "5",
    "points": 4
  },
  {
    "rank": "37",
    "num": "28",
    "dog": "Yori",
    "handler": "VERONIKA STRATILOVÁ",
    "breed": "Kříženec",
    "age": "12",
    "points": 4
  },
  {
    "rank": "37",
    "num": "72",
    "dog": "Ozzy",
    "handler": "ŠEBESTOVÁ Helena",
    "breed": "Americká akita",
    "age": "1",
    "points": 4
  },
  {
    "rank": "39",
    "num": "11",
    "dog": "Avalanche - štěně",
    "handler": "JERZY SZKATULA",
    "breed": "Miniaturní americky ovčák",
    "age": "1",
    "points": 2
  },
  {
    "rank": "40",
    "num": "41",
    "dog": "Bibi",
    "handler": "KATEŘINA HANISCHOVÁ",
    "breed": "Havanský psík (bez PP - kříženec)",
    "age": "4",
    "points": 2
  },
  {
    "rank": "41",
    "num": "16",
    "dog": "Kiwi",
    "handler": "SOŇA TŘETINOVÁ",
    "breed": "Korgi z osady",
    "age": "1",
    "points": 2
  },
  {
    "rank": "42",
    "num": "45",
    "dog": "Rita",
    "handler": "ADÉLKA HARATKOVÁ",
    "breed": "Kříženec",
    "age": "6",
    "points": 2
  },
  {
    "rank": "42",
    "num": "58",
    "dog": "Ypsilon",
    "handler": "EVA",
    "breed": "border kolie",
    "age": "12",
    "points": 2
  },
  {
    "rank": "44",
    "num": "54",
    "dog": "Adélka",
    "handler": "ADÉLA STONAVSKÁ",
    "breed": "Zlatý retrívr",
    "age": "1",
    "points": 0
  },
  {
    "rank": "45",
    "num": "71",
    "dog": "Artuš",
    "handler": "EVITA NOHEJL",
    "breed": "kříženec knírače",
    "age": "4",
    "points": 0
  },
  {
    "rank": "46",
    "num": "35",
    "dog": "Aveta",
    "handler": "DANIELA HREHUŠOVÁ",
    "breed": "kříženec",
    "age": "8",
    "points": 0
  },
  {
    "rank": "47",
    "num": "50",
    "dog": "Bacardi",
    "handler": "MARKÉTA HUBÁČKOVÁ",
    "breed": "Šeltie",
    "age": "4",
    "points": 0
  },
  {
    "rank": "48",
    "num": "77",
    "dog": "Betynka",
    "handler": "DENISA LYČKOVÁ",
    "breed": "Německý Boxer",
    "age": "1",
    "points": 0
  },
  {
    "rank": "49",
    "num": "22",
    "dog": "Brix",
    "handler": "LENKA KUČEROVÁ",
    "breed": "Chodský pes",
    "age": "10",
    "points": 0
  },
  {
    "rank": "50",
    "num": "",
    "dog": "Brownie bečva resort",
    "handler": "KAROLÍNA VÍTKOVÁ",
    "breed": "Americký stafordširský teriér",
    "age": "4",
    "points": 0
  },
  {
    "rank": "51",
    "num": "",
    "dog": "Delta",
    "handler": "DELTA + ANIKA",
    "breed": "Německý krátkosti ohař",
    "age": "7",
    "points": 0
  },
  {
    "rank": "52",
    "num": "32",
    "dog": "Deny",
    "handler": "LUCIE PETRATUROVÁ",
    "breed": "Čivava dlouhosrstá",
    "age": "11",
    "points": 0
  },
  {
    "rank": "53",
    "num": "39",
    "dog": "Diego",
    "handler": "GABRIELA STEBLOVA",
    "breed": "Boxer",
    "age": "4",
    "points": 0
  },
  {
    "rank": "54",
    "num": "",
    "dog": "Dixi",
    "handler": "ANITA WOJNAROVÁ",
    "breed": "Čivava",
    "age": "2",
    "points": 0
  },
  {
    "rank": "55",
    "num": "37",
    "dog": "Eran",
    "handler": "ZDENEK BOHUMÍNSKÝ",
    "breed": "Německý křepelák",
    "age": "5",
    "points": 0
  },
  {
    "rank": "56",
    "num": "60",
    "dog": "Geri Moravský Medvídek (Chelsea)",
    "handler": "MICHAL DAXNER",
    "breed": "Karelský medvědí pes",
    "age": "9",
    "points": 0
  },
  {
    "rank": "57",
    "num": "",
    "dog": "Goody",
    "handler": "ZUZANA GIBIECOVÁ",
    "breed": "Šeltie -štěně",
    "age": "1",
    "points": 0
  },
  {
    "rank": "58",
    "num": "24",
    "dog": "Hugo",
    "handler": "HUGO",
    "breed": "Bull terrier",
    "age": "3",
    "points": 0
  },
  {
    "rank": "59",
    "num": "36",
    "dog": "Jessie",
    "handler": "LUCIE PECHLÁTOVÁ",
    "breed": "kavalír king charles španěl",
    "age": "7",
    "points": 0
  },
  {
    "rank": "60",
    "num": "7",
    "dog": "Johny",
    "handler": "KAROLÍNA KOUŘILOVÁ",
    "breed": "Bostonský teriér",
    "age": "2",
    "points": 0
  },
  {
    "rank": "61",
    "num": "",
    "dog": "Kesidy z Bolkovských kopců",
    "handler": "MONIKA KODENKOVÁ",
    "breed": "Border kolie",
    "age": "1",
    "points": 0
  },
  {
    "rank": "62",
    "num": "25",
    "dog": "Kešu",
    "handler": "GRÉTA ČOLLÁKOVÁ",
    "breed": "Border kolie",
    "age": "3",
    "points": 0
  },
  {
    "rank": "63",
    "num": "20",
    "dog": "Lexinka",
    "handler": "HANA ŠABLATUROVÁ",
    "breed": "Kříženec",
    "age": "9",
    "points": 0
  },
  {
    "rank": "64",
    "num": "68",
    "dog": "Lumi",
    "handler": "NOEMI MIZIA",
    "breed": "činský chocholatý pes",
    "age": "4",
    "points": 0
  },
  {
    "rank": "65",
    "num": "64",
    "dog": "Luna",
    "handler": "MICHAELA MÜLLEROVÁ",
    "breed": "Kříženec",
    "age": "1",
    "points": 0
  },
  {
    "rank": "66",
    "num": "23",
    "dog": "Malina",
    "handler": "JAKUB BALCAŘÍK",
    "breed": "Malinois",
    "age": "1",
    "points": 0
  },
  {
    "rank": "67",
    "num": "",
    "dog": "Meggy",
    "handler": "NELLA SZUSZCIKOVA",
    "breed": "Boloňský psík",
    "age": "1",
    "points": 0
  },
  {
    "rank": "68",
    "num": "",
    "dog": "Monty",
    "handler": "ANIČKA KŘESŤANOVÁ",
    "breed": "Kříženec",
    "age": "7",
    "points": 0
  },
  {
    "rank": "69",
    "num": "51",
    "dog": "Orfeus",
    "handler": "MARKÉTA HUBÁČKOVÁ",
    "breed": "Šeltie",
    "age": "2",
    "points": 0
  },
  {
    "rank": "70",
    "num": "67",
    "dog": "Rocki",
    "handler": "CYNTIE KROŠČĚNOVÁ",
    "breed": "kříženec",
    "age": "1",
    "points": 0
  },
  {
    "rank": "71",
    "num": "",
    "dog": "Rory",
    "handler": "ŠÁRKA WALCZYSKOVÁ",
    "breed": "Kříženec",
    "age": "11",
    "points": 0
  },
  {
    "rank": "72",
    "num": "21",
    "dog": "Šarinka",
    "handler": "EMILIE MACKOVÁ",
    "breed": "maďarský ovčák (mudi)",
    "age": "3",
    "points": 0
  },
  {
    "rank": "73",
    "num": "66",
    "dog": "Šeps ( jméno v papírech Bohun)",
    "handler": "SANDRA ŠEBESTOVÁ",
    "breed": "Faraonský pes",
    "age": "1",
    "points": 0
  },
  {
    "rank": "74",
    "num": "42",
    "dog": "Sisi",
    "handler": "KATEŘINA KARÁSKOVÁ",
    "breed": "Yorkshire terier",
    "age": "6",
    "points": 0
  },
  {
    "rank": "75",
    "num": "29",
    "dog": "Stella",
    "handler": "ALEXANDRA STANIOVÁ",
    "breed": "čivava dlouhosrstá",
    "age": "6",
    "points": 0
  },
  {
    "rank": "76",
    "num": "33",
    "dog": "Uran",
    "handler": "MARKÉTA GAMROTOVÁ",
    "breed": "Německý ovčák",
    "age": "3",
    "points": 0
  },
  {
    "rank": "77",
    "num": "",
    "dog": "Vendy",
    "handler": "SÁRA MROZKOVÁ",
    "breed": "Čivavu",
    "age": "4",
    "points": 0
  },
  {
    "rank": "78",
    "num": "",
    "dog": "Venty",
    "handler": "MONIKA ŽÁRSKÁ",
    "breed": "Kříženec yorkšíra",
    "age": "5",
    "points": 0
  },
  {
    "rank": "79",
    "num": "6",
    "dog": "Daisy",
    "handler": "VRKOČ Voja",
    "breed": "Čivava",
    "age": "4",
    "points": 0
  },
  {
    "rank": "80",
    "num": "9",
    "dog": "Jessy",
    "handler": "WALICZYSKOVÁ Šárka",
    "breed": "Kříženec",
    "age": "2",
    "points": 0
  },
  {
    "rank": "81",
    "num": "43",
    "dog": "Ron",
    "handler": "DVOŘÁK Zdeněk",
    "breed": "Voříšek",
    "age": "16",
    "points": 0
  },
  {
    "rank": "82",
    "num": "73",
    "dog": "Muf",
    "handler": "BULAVOVÁ Natálie",
    "breed": "Čivava",
    "age": "12",
    "points": 0
  },
  {
    "rank": "83",
    "num": "74",
    "dog": "Bazy",
    "handler": "PASTUCHOVÁ Iveta",
    "breed": "Border teriér",
    "age": "9",
    "points": 0
  },
  {
    "rank": "83",
    "num": "76",
    "dog": "Ice",
    "handler": "ŠKAPOVÁ Zuzana",
    "breed": "Voříšek",
    "age": "1",
    "points": 0
  }
],
};

export const overallStats: ResultStats = { total: 84, finished: 84, didNotStart: 0, didNotFinish: 0, disqualified: 0 };

export const nejHafiadak: ResultCategory = {
  title: "NEJ HAFIAĎÁK",
  rows: [
  {
    "rank": "1",
    "num": "4",
    "dog": "Ella",
    "handler": "EVA BONNOVÁ",
    "breed": "Ella - Belgický ovčák Groenendael",
    "age": "4",
    "points": 20
  },
  {
    "rank": "2",
    "num": "3",
    "dog": "Loty",
    "handler": "EVA BONNOVÁ",
    "breed": "Šiperka",
    "age": "3",
    "points": 10
  },
  {
    "rank": "3",
    "num": "26",
    "dog": "Heidi",
    "handler": "VERONIKA STRATILOVÁ",
    "breed": "Kříženec",
    "age": "5",
    "points": 8
  },
  {
    "rank": "3",
    "num": "61",
    "dog": "Fly",
    "handler": "ERI TÓTHOVÁ",
    "breed": "Kříženec",
    "age": "8",
    "points": 8
  },
  {
    "rank": "5",
    "num": "2",
    "dog": "Mia",
    "handler": "TOMÁŠ PÍTR",
    "breed": "Belgický ovčák tervueren",
    "age": "6",
    "points": 6
  },
  {
    "rank": "6",
    "num": "40",
    "dog": "Sandy",
    "handler": "NELA ŠŤASTNÁ",
    "breed": "nelyss.stast@gmail.com",
    "age": "5",
    "points": 6
  },
  {
    "rank": "6",
    "num": "70",
    "dog": "Berru",
    "handler": "ARETTA PEŇAŠKA",
    "breed": "kříženec knírače",
    "age": "5",
    "points": 6
  },
  {
    "rank": "8",
    "num": "62",
    "dog": "Bea",
    "handler": "ERI TÓTHOVÁ",
    "breed": "Australský ovčák bez pp",
    "age": "2",
    "points": 4
  },
  {
    "rank": "8",
    "num": "69",
    "dog": "Dixi",
    "handler": "ANETA POBOŘILOVÁ",
    "breed": "Kříženec",
    "age": "7",
    "points": 4
  },
  {
    "rank": "10",
    "num": "12",
    "dog": "Bella",
    "handler": "TEREZA VAŇKOVÁ",
    "breed": "Kříženec",
    "age": "6",
    "points": 2
  },
  {
    "rank": "11",
    "num": "24",
    "dog": "Hugo",
    "handler": "HUGO",
    "breed": "Bull terrier",
    "age": "3",
    "points": 0
  },
  {
    "rank": "12",
    "num": "7",
    "dog": "Johny",
    "handler": "KAROLÍNA KOUŘILOVÁ",
    "breed": "Bostonský teriér",
    "age": "2",
    "points": 0
  },
  {
    "rank": "13",
    "num": "19",
    "dog": "Mia",
    "handler": "SABINA VAŇKOVÁ",
    "breed": "Jorkšírský teriér",
    "age": "7",
    "points": 0
  },
  {
    "rank": "14",
    "num": "21",
    "dog": "Šarinka",
    "handler": "EMILIE MACKOVÁ",
    "breed": "maďarský ovčák (mudi)",
    "age": "3",
    "points": 0
  },
  {
    "rank": "15",
    "num": "14",
    "dog": "Aghata z Andělského domu",
    "handler": "BARBORA MRUZKOVÁ",
    "breed": "BOC",
    "age": "1",
    "points": 0
  },
  {
    "rank": "16",
    "num": "27",
    "dog": "Wendy",
    "handler": "VERONIKA STRATILOVÁ",
    "breed": "Kříženec",
    "age": "9",
    "points": 0
  },
  {
    "rank": "17",
    "num": "23",
    "dog": "Malina",
    "handler": "JAKUB BALCAŘÍK",
    "breed": "Malinois",
    "age": "1",
    "points": 0
  },
  {
    "rank": "18",
    "num": "30",
    "dog": "Odeta",
    "handler": "LUCIE PETRATUROVÁ",
    "breed": "Pudl Královský",
    "age": "4",
    "points": 0
  },
  {
    "rank": "19",
    "num": "31",
    "dog": "Megi",
    "handler": "LUCIE PETRATUROVÁ",
    "breed": "Čivava krátkosrstá",
    "age": "8",
    "points": 0
  },
  {
    "rank": "20",
    "num": "34",
    "dog": "Ozzy",
    "handler": "DANIELA HREHUŠOVÁ",
    "breed": "border kolie",
    "age": "1",
    "points": 0
  },
  {
    "rank": "21",
    "num": "35",
    "dog": "Aveta",
    "handler": "DANIELA HREHUŠOVÁ",
    "breed": "kříženec",
    "age": "8",
    "points": 0
  },
  {
    "rank": "22",
    "num": "37",
    "dog": "Eran",
    "handler": "ZDENEK BOHUMÍNSKÝ",
    "breed": "Německý křepelák",
    "age": "5",
    "points": 0
  },
  {
    "rank": "23",
    "num": "39",
    "dog": "Diego",
    "handler": "GABRIELA STEBLOVA",
    "breed": "Boxer",
    "age": "4",
    "points": 0
  },
  {
    "rank": "24",
    "num": "42",
    "dog": "Sisi",
    "handler": "KATEŘINA KARÁSKOVÁ",
    "breed": "Yorkshire terier",
    "age": "6",
    "points": 0
  },
  {
    "rank": "25",
    "num": "44",
    "dog": "Bailey - ŠTĚNĚ",
    "handler": "EDITA WOJNAROVÁ",
    "breed": "Border kolie",
    "age": "10",
    "points": 0
  },
  {
    "rank": "26",
    "num": "47",
    "dog": "Max",
    "handler": "KRISTÝNA WALENTOVÁ",
    "breed": "Křiženec",
    "age": "6",
    "points": 0
  },
  {
    "rank": "27",
    "num": "46",
    "dog": "Sweet Chilli",
    "handler": "DOROTA KOLKOVÁ",
    "breed": "Sibiřský husky",
    "age": "1",
    "points": 0
  },
  {
    "rank": "28",
    "num": "50",
    "dog": "Bacardi",
    "handler": "MARKÉTA HUBÁČKOVÁ",
    "breed": "Šeltie",
    "age": "4",
    "points": 0
  },
  {
    "rank": "29",
    "num": "51",
    "dog": "Orfeus",
    "handler": "MARKÉTA HUBÁČKOVÁ",
    "breed": "Šeltie",
    "age": "2",
    "points": 0
  },
  {
    "rank": "30",
    "num": "58",
    "dog": "Ypsilon",
    "handler": "EVA",
    "breed": "border kolie",
    "age": "12",
    "points": 0
  },
  {
    "rank": "31",
    "num": "59",
    "dog": "Hubert",
    "handler": "PETRA ČIPOVA",
    "breed": "Hubert",
    "age": "2",
    "points": 0
  },
  {
    "rank": "32",
    "num": "60",
    "dog": "Geri Moravský Medvídek (Chelsea)",
    "handler": "MICHAL DAXNER",
    "breed": "Karelský medvědí pes",
    "age": "9",
    "points": 0
  },
  {
    "rank": "33",
    "num": "63",
    "dog": "Dasty",
    "handler": "MICHAELA MULLEROVÁ",
    "breed": "Kříženec",
    "age": "11",
    "points": 0
  },
  {
    "rank": "34",
    "num": "64",
    "dog": "Luna",
    "handler": "MICHAELA MÜLLEROVÁ",
    "breed": "Kříženec",
    "age": "1",
    "points": 0
  },
  {
    "rank": "35",
    "num": "66",
    "dog": "Šeps ( jméno v papírech Bohun)",
    "handler": "SANDRA ŠEBESTOVÁ",
    "breed": "Faraonský pes",
    "age": "1",
    "points": 0
  },
  {
    "rank": "36",
    "num": "65",
    "dog": "Yogy",
    "handler": "SANDRA ŠEBESTOVÁ",
    "breed": "Vestaj",
    "age": "5",
    "points": 0
  },
  {
    "rank": "37",
    "num": "71",
    "dog": "Artuš",
    "handler": "EVITA NOHEJL",
    "breed": "kříženec knírače",
    "age": "4",
    "points": 0
  },
  {
    "rank": "38",
    "num": "54",
    "dog": "Adélka",
    "handler": "ADÉLA STONAVSKÁ",
    "breed": "Zlatý retrívr",
    "age": "1",
    "points": 0
  },
  {
    "rank": "38",
    "num": "53",
    "dog": "Teddy",
    "handler": "ADÉLA STONAVSKÁ",
    "breed": "Slovenský Čuvač",
    "age": "3",
    "points": 0
  }
],
};

export const nejHafiadakStats: ResultStats = { total: 39, finished: 39, didNotStart: 0, didNotFinish: 0, disqualified: 0 };

export const disciplines: ResultCategory[] = [
  {
    title: "POSLUŠNOST (6-10 LET)",
    rows: [
  {
    "rank": "1",
    "num": "11",
    "dog": "Avalanche - štěně",
    "handler": "JERZY SZKATULA",
    "breed": "Miniaturní americky ovčák",
    "age": "1",
    "points": 10
  },
  {
    "rank": "2",
    "num": "25",
    "dog": "Kešu",
    "handler": "GRÉTA ČOLLÁKOVÁ",
    "breed": "Border kolie",
    "age": "3",
    "points": 8
  },
  {
    "rank": "3",
    "num": "56",
    "dog": "Ruby",
    "handler": "JOSEFÍNA POLOCZKOVÁ",
    "breed": "Zlatý retrívr",
    "age": "5",
    "points": 6
  },
  {
    "rank": "4",
    "num": "39",
    "dog": "Diego",
    "handler": "GABRIELA STEBLOVA",
    "breed": "Boxer",
    "age": "4",
    "points": 4
  }
],
  },
  {
    title: "POSLUŠNOST (11-15 LET)",
    rows: [
  {
    "rank": "1",
    "num": "55",
    "dog": "Jessi",
    "handler": "MATYLDA POLOCZKOVÁ",
    "breed": "Kavalír king Charles spaniel",
    "age": "2",
    "points": 10
  },
  {
    "rank": "2",
    "num": "14",
    "dog": "Aghata z Andělského domu",
    "handler": "BARBORA MRUZKOVÁ",
    "breed": "BOC",
    "age": "1",
    "points": 8
  },
  {
    "rank": "3",
    "num": "18",
    "dog": "Bo",
    "handler": "HLAVKOVÁ Adéla",
    "breed": "Bostonský teriér",
    "age": "2",
    "points": 6
  },
  {
    "rank": "4",
    "num": "47",
    "dog": "Max",
    "handler": "KRISTÝNA WALENTOVÁ",
    "breed": "Křiženec",
    "age": "6",
    "points": 4
  },
  {
    "rank": "5",
    "num": "46",
    "dog": "Sweet Chilli",
    "handler": "DOROTA KOLKOVÁ",
    "breed": "Sibiřský husky",
    "age": "1",
    "points": 2
  }
],
  },
  {
    title: "MLADÝ VYSTAVOVATEL – JUNIORHANDLING (6-10 LET)",
    rows: [
  {
    "rank": "1",
    "num": "11",
    "dog": "Avalanche - štěně",
    "handler": "JERZY SZKATULA",
    "breed": "Miniaturní americky ovčák",
    "age": "1",
    "points": 10
  },
  {
    "rank": "2",
    "num": "56",
    "dog": "Ruby",
    "handler": "JOSEFÍNA POLOCZKOVÁ",
    "breed": "Zlatý retrívr",
    "age": "5",
    "points": 8
  },
  {
    "rank": "3",
    "num": "39",
    "dog": "Diego",
    "handler": "GABRIELA STEBLOVA",
    "breed": "Boxer",
    "age": "4",
    "points": 6
  },
  {
    "rank": "4",
    "num": "25",
    "dog": "Kešu",
    "handler": "GRÉTA ČOLLÁKOVÁ",
    "breed": "Border kolie",
    "age": "3",
    "points": 4
  },
  {
    "rank": "5",
    "num": "24",
    "dog": "Hugo",
    "handler": "HUGO",
    "breed": "Bull terrier",
    "age": "3",
    "points": 2
  }
],
  },
  {
    title: "MLADÝ VYSTAVOVATEL – JUNIORHANDLING (11-15 LET)",
    rows: [
  {
    "rank": "1",
    "num": "19",
    "dog": "Mia",
    "handler": "SABINA VAŇKOVÁ",
    "breed": "Jorkšírský teriér",
    "age": "7",
    "points": 10
  },
  {
    "rank": "2",
    "num": "46",
    "dog": "Sweet Chilli",
    "handler": "DOROTA KOLKOVÁ",
    "breed": "Sibiřský husky",
    "age": "1",
    "points": 8
  },
  {
    "rank": "3",
    "num": "38",
    "dog": "Darwin",
    "handler": "NIKOLAS POPPE",
    "breed": "Mops",
    "age": "1",
    "points": 6
  }
],
  },
  {
    title: "VESTAJ - NEJVOŘÍŠKOVATĚJŠÍ VOŘÍŠEK - MALÍ PEJSCI",
    rows: [
  {
    "rank": "1",
    "num": "27",
    "dog": "Wendy",
    "handler": "VERONIKA STRATILOVÁ",
    "breed": "Kříženec",
    "age": "9",
    "points": 10
  },
  {
    "rank": "2",
    "num": "10",
    "dog": "Reksio",
    "handler": "JUSTYNA SZKATULA",
    "breed": "kříženec",
    "age": "6",
    "points": 8
  },
  {
    "rank": "3",
    "num": "1",
    "dog": "Matýsek",
    "handler": "SMUŽOVÁ Michaela",
    "breed": "Kříženec",
    "age": "11",
    "points": 6
  },
  {
    "rank": "4",
    "num": "28",
    "dog": "Yori",
    "handler": "VERONIKA STRATILOVÁ",
    "breed": "Kříženec",
    "age": "12",
    "points": 4
  },
  {
    "rank": "5",
    "num": "16",
    "dog": "Kiwi",
    "handler": "SOŇA TŘETINOVÁ",
    "breed": "Korgi z osady",
    "age": "1",
    "points": 2
  }
],
  },
  {
    title: "VESTAJ - NEJVOŘÍŠKOVATĚJŠÍ VOŘÍŠEK - STŘEDNÍ A VELCÍ PEJSCI",
    rows: [
  {
    "rank": "1",
    "num": "47",
    "dog": "Max",
    "handler": "KRISTÝNA WALENTOVÁ",
    "breed": "Křiženec",
    "age": "6",
    "points": 10
  },
  {
    "rank": "2",
    "num": "49",
    "dog": "Gump",
    "handler": "SANDRA GUŇKOVÁ",
    "breed": "Kříženec",
    "age": "5",
    "points": 8
  },
  {
    "rank": "3",
    "num": "26",
    "dog": "Heidi",
    "handler": "VERONIKA STRATILOVÁ",
    "breed": "Kříženec",
    "age": "5",
    "points": 6
  },
  {
    "rank": "4",
    "num": "65",
    "dog": "Yogy",
    "handler": "SANDRA ŠEBESTOVÁ",
    "breed": "Vestaj",
    "age": "5",
    "points": 4
  },
  {
    "rank": "5",
    "num": "45",
    "dog": "Rita",
    "handler": "ADÉLKA HARATKOVÁ",
    "breed": "Kříženec",
    "age": "6",
    "points": 2
  }
],
  },
  {
    title: "TOP ČISTOKREVŇÁK - MALÍ PEJSCI (DO 40 CM)",
    rows: [
  {
    "rank": "1",
    "num": "3",
    "dog": "Loty",
    "handler": "EVA BONNOVÁ",
    "breed": "Šiperka",
    "age": "3",
    "points": 10
  },
  {
    "rank": "2",
    "num": "18",
    "dog": "Bo",
    "handler": "HLAVKOVÁ Adéla",
    "breed": "Bostonský teriér",
    "age": "2",
    "points": 8
  },
  {
    "rank": "3",
    "num": "17",
    "dog": "Anita Anarela",
    "handler": "TEREZA OŽANOVÁ",
    "breed": "Sheltie",
    "age": "8",
    "points": 6
  },
  {
    "rank": "4",
    "num": "38",
    "dog": "Darwin",
    "handler": "NIKOLAS POPPE",
    "breed": "Mops",
    "age": "1",
    "points": 4
  },
  {
    "rank": "5",
    "num": "41",
    "dog": "Bibi",
    "handler": "KATEŘINA HANISCHOVÁ",
    "breed": "Havanský psík (bez PP - kříženec)",
    "age": "4",
    "points": 2
  }
],
  },
  {
    title: "TOP ČISTOKREVŇÁK - STŘEDNÍ A VELCÍ PEJSCI (NAD 40 CM)",
    rows: [
  {
    "rank": "1",
    "num": "62",
    "dog": "Bea",
    "handler": "ERI TÓTHOVÁ",
    "breed": "Australský ovčák bez pp",
    "age": "2",
    "points": 10
  },
  {
    "rank": "2",
    "num": "59",
    "dog": "Hubert",
    "handler": "PETRA ČIPOVA",
    "breed": "Hubert",
    "age": "2",
    "points": 8
  },
  {
    "rank": "3",
    "num": "4",
    "dog": "Ella",
    "handler": "EVA BONNOVÁ",
    "breed": "Ella - Belgický ovčák Groenendael",
    "age": "4",
    "points": 6
  },
  {
    "rank": "4",
    "num": "53",
    "dog": "Teddy",
    "handler": "ADÉLA STONAVSKÁ",
    "breed": "Slovenský Čuvač",
    "age": "3",
    "points": 4
  },
  {
    "rank": "5",
    "num": "30",
    "dog": "Odeta",
    "handler": "LUCIE PETRATUROVÁ",
    "breed": "Pudl Královský",
    "age": "4",
    "points": 2
  }
],
  },
  {
    title: "NEJFEŠNĚJŠÍ VETERÁN",
    rows: [
  {
    "rank": "1",
    "num": "57",
    "dog": "Sunny",
    "handler": "ZUZANA ŠTĚRBOVÁ",
    "breed": "Zlatý retrívr",
    "age": "9",
    "points": 10
  },
  {
    "rank": "2",
    "num": "15",
    "dog": "Oliver",
    "handler": "SOŇA TŘETINOVÁ",
    "breed": "Australský ovčák",
    "age": "12",
    "points": 8
  },
  {
    "rank": "3",
    "num": "63",
    "dog": "Dasty",
    "handler": "MICHAELA MULLEROVÁ",
    "breed": "Kříženec",
    "age": "11",
    "points": 6
  },
  {
    "rank": "4",
    "num": "1",
    "dog": "Matýsek",
    "handler": "SMUŽOVÁ Michaela",
    "breed": "Kříženec",
    "age": "11",
    "points": 4
  },
  {
    "rank": "5",
    "num": "27",
    "dog": "Wendy",
    "handler": "VERONIKA STRATILOVÁ",
    "breed": "Kříženec",
    "age": "9",
    "points": 2
  }
],
  },
  {
    title: "NEJSLADŠÍ ŠTĚNĚ",
    rows: [
  {
    "rank": "1",
    "num": "46",
    "dog": "Sweet Chilli",
    "handler": "DOROTA KOLKOVÁ",
    "breed": "Sibiřský husky",
    "age": "1",
    "points": 10
  },
  {
    "rank": "2",
    "num": "34",
    "dog": "Ozzy",
    "handler": "DANIELA HREHUŠOVÁ",
    "breed": "border kolie",
    "age": "1",
    "points": 8
  },
  {
    "rank": "3",
    "num": "48",
    "dog": "Zaya Chiara od Trokavecké skály",
    "handler": "KLÁRA TEOFILOVÁ",
    "breed": "Samojed",
    "age": "1",
    "points": 6
  },
  {
    "rank": "4",
    "num": "72",
    "dog": "Ozzy",
    "handler": "ŠEBESTOVÁ Helena",
    "breed": "Americká akita",
    "age": "1",
    "points": 4
  },
  {
    "rank": "5",
    "num": "11",
    "dog": "Avalanche - štěně",
    "handler": "JERZY SZKATULA",
    "breed": "Miniaturní americky ovčák",
    "age": "1",
    "points": 2
  }
],
  },
  {
    title: "KARNEVAL",
    rows: [
  {
    "rank": "1",
    "num": "55",
    "dog": "Jessi",
    "handler": "MATYLDA POLOCZKOVÁ",
    "breed": "Kavalír king Charles spaniel",
    "age": "2",
    "points": 10
  },
  {
    "rank": "2",
    "num": "56",
    "dog": "Ruby",
    "handler": "JOSEFÍNA POLOCZKOVÁ",
    "breed": "Zlatý retrívr",
    "age": "5",
    "points": 8
  },
  {
    "rank": "3",
    "num": "52",
    "dog": "Míša",
    "handler": "RASZKOVÁ Michaela",
    "breed": "Trpasličí pudl",
    "age": "1",
    "points": 6
  },
  {
    "rank": "4",
    "num": "14",
    "dog": "Aghata z Andělského domu",
    "handler": "BARBORA MRUZKOVÁ",
    "breed": "BOC",
    "age": "1",
    "points": 4
  },
  {
    "rank": "5",
    "num": "3",
    "dog": "Loty",
    "handler": "EVA BONNOVÁ",
    "breed": "Šiperka",
    "age": "3",
    "points": 2
  }
],
  },
  {
    title: "HAFI KUSY \"FREESTYLE\"",
    rows: [
  {
    "rank": "1",
    "num": "31",
    "dog": "Megi",
    "handler": "LUCIE PETRATUROVÁ",
    "breed": "Čivava krátkosrstá",
    "age": "8",
    "points": 10
  },
  {
    "rank": "2",
    "num": "40",
    "dog": "Sandy",
    "handler": "NELA ŠŤASTNÁ",
    "breed": "nelyss.stast@gmail.com",
    "age": "5",
    "points": 8
  },
  {
    "rank": "3",
    "num": "30",
    "dog": "Odeta",
    "handler": "LUCIE PETRATUROVÁ",
    "breed": "Pudl Královský",
    "age": "4",
    "points": 6
  },
  {
    "rank": "4",
    "num": "44",
    "dog": "Bailey - ŠTĚNĚ",
    "handler": "EDITA WOJNAROVÁ",
    "breed": "Border kolie",
    "age": "10",
    "points": 4
  },
  {
    "rank": "5",
    "num": "58",
    "dog": "Ypsilon",
    "handler": "EVA",
    "breed": "border kolie",
    "age": "12",
    "points": 2
  }
],
  },
  {
    title: "HAFILITY (OPIČÍ DRÁHA)",
    rows: [
  {
    "rank": "1",
    "num": "3",
    "dog": "Loty",
    "handler": "EVA BONNOVÁ",
    "breed": "Šiperka",
    "age": "3",
    "points": 10
  },
  {
    "rank": "2",
    "num": "61",
    "dog": "Fly",
    "handler": "ERI TÓTHOVÁ",
    "breed": "Kříženec",
    "age": "8",
    "points": 8
  },
  {
    "rank": "3",
    "num": "70",
    "dog": "Berru",
    "handler": "ARETTA PEŇAŠKA",
    "breed": "kříženec knírače",
    "age": "5",
    "points": 6
  },
  {
    "rank": "4",
    "num": "2",
    "dog": "Mia",
    "handler": "TOMÁŠ PÍTR",
    "breed": "Belgický ovčák tervueren",
    "age": "6",
    "points": 4
  },
  {
    "rank": "5",
    "num": "4",
    "dog": "Ella",
    "handler": "EVA BONNOVÁ",
    "breed": "Ella - Belgický ovčák Groenendael",
    "age": "4",
    "points": 2
  }
],
  },
  {
    title: "STEZKA NÁSTRAH",
    rows: [
  {
    "rank": "1",
    "num": "49",
    "dog": "Gump",
    "handler": "SANDRA GUŇKOVÁ",
    "breed": "Kříženec",
    "age": "5",
    "points": 10
  },
  {
    "rank": "2",
    "num": "4",
    "dog": "Ella",
    "handler": "EVA BONNOVÁ",
    "breed": "Ella - Belgický ovčák Groenendael",
    "age": "4",
    "points": 8
  },
  {
    "rank": "3",
    "num": "13",
    "dog": "Dyna",
    "handler": "VAŇKOVÁ Tereza",
    "breed": "Viped",
    "age": "2",
    "points": 6
  },
  {
    "rank": "4",
    "num": "69",
    "dog": "Dixi",
    "handler": "ANETA POBOŘILOVÁ",
    "breed": "Kříženec",
    "age": "7",
    "points": 4
  },
  {
    "rank": "5",
    "num": "2",
    "dog": "Mia",
    "handler": "TOMÁŠ PÍTR",
    "breed": "Belgický ovčák tervueren",
    "age": "6",
    "points": 2
  }
],
  },
  {
    title: "NAJDI SVÉHO PÁNA",
    rows: [
  {
    "rank": "1",
    "num": "4",
    "dog": "Ella",
    "handler": "EVA BONNOVÁ",
    "breed": "Ella - Belgický ovčák Groenendael",
    "age": "4",
    "points": 10
  },
  {
    "rank": "2",
    "num": "26",
    "dog": "Heidi",
    "handler": "VERONIKA STRATILOVÁ",
    "breed": "Kříženec",
    "age": "5",
    "points": 8
  },
  {
    "rank": "3",
    "num": "40",
    "dog": "Sandy",
    "handler": "NELA ŠŤASTNÁ",
    "breed": "nelyss.stast@gmail.com",
    "age": "5",
    "points": 6
  },
  {
    "rank": "4",
    "num": "62",
    "dog": "Bea",
    "handler": "ERI TÓTHOVÁ",
    "breed": "Australský ovčák bez pp",
    "age": "2",
    "points": 4
  },
  {
    "rank": "5",
    "num": "12",
    "dog": "Bella",
    "handler": "TEREZA VAŇKOVÁ",
    "breed": "Kříženec",
    "age": "6",
    "points": 2
  }
],
  },
];

export const disciplinesStats: ResultStats = { total: 72, finished: 72, didNotStart: 0, didNotFinish: 0, disqualified: 0 };
