// Výsledky Haficrossu 2026 (běžecký/procházkový závod, ~6,8 km).
// Ruční přepis z oficiálních výsledků. Kategorie ženy a muži.

export type RaceResult = { rank: string; name: string; time: string };

export type RaceCategory = {
  id: "women" | "men";
  title: string;
  results: RaceResult[];
};

export const haficrossResults: RaceCategory[] = [
  {
    id: "women",
    title: "Haficross ženy",
    results: [
      { rank: "1", name: "Hana Jurajdová", time: "34 min. 30 sek." },
      { rank: "2", name: "Magdaléna Bílá", time: "38 min. 40 sek." },
      { rank: "3", name: "Monika Čaganová", time: "43 min. 10 sek." },
      { rank: "4", name: "Klára Valicová", time: "45 min. 35 sek." },
      { rank: "5", name: "Karolína Ježovičová", time: "45 min. 45 sek." },
      { rank: "6", name: "Iveta Pastuchová", time: "45 min. 50 sek." },
      { rank: "7", name: "Jarmila Stonavská", time: "54 min. 30 sek." },
      { rank: "8", name: "Pavlína Nepejchalová", time: "55 min. 55 sek." },
      { rank: "9", name: "Kateřina Galíková", time: "56 min. 0 sek." },
      { rank: "10", name: "Nicole Melarová", time: "56 min. 15 sek." },
      { rank: "11", name: "Tereza Wróblová", time: "1 hod. 1 min. 55 sek." },
      { rank: "12", name: "Šárka Walczysková", time: "1 hod. 9 min. 0 sek." },
      { rank: "13", name: "Natálie Nela Plevková", time: "1 hod. 9 min. 50 sek." },
      { rank: "14", name: "Eva Jurečková", time: "1 hod. 19 min. 10 sek." },
      { rank: "15", name: "Aneta Pobořilová", time: "1 hod. 23 min. 10 sek." },
      { rank: "16", name: "Tereza Vaňková", time: "1 hod. 25 min. 20 sek." },
    ],
  },
  {
    id: "men",
    title: "Haficross muži",
    results: [
      { rank: "1", name: "Tomáš Pítr", time: "36 min. 45 sek." },
      { rank: "2", name: "Pavel Bolek", time: "40 min. 20 sek." },
      { rank: "3", name: "Filip Topič", time: "40 min. 40 sek." },
      { rank: "4", name: "Marek Fukala", time: "41 min. 20 sek." },
      { rank: "5", name: "Viktor Heneš", time: "51 min. 30 sek." },
      { rank: "6", name: "Martin Číp", time: "1 hod. 12 min. 40 sek." },
      { rank: "7", name: "Jakub Balarčík", time: "1 hod. 25 min. 20 sek." },
      { rank: "8", name: "Michal Daxner", time: "1 hod. 31 min. 10 sek." },
    ],
  },
];
