// ---------------------------------------------------------------------------
// Centrální nastavení webu. Tady měň texty, kontakty a odkazy na formuláře.
// ---------------------------------------------------------------------------

import { sponsorLogos } from "./images";

export const event = {
  year: 2026,
  date: "30. 8. 2026",
  dateLong: "neděle 30. srpna 2026",
  startTime: "8:00",
  place: "Areál před bazénem, ZŠ Bystřice",
  placeShort: "Bystřice",
  applicationDeadline: "18. 8. 2026",
  gps: "49.6393886N, 18.7220669E",
  navAddress: "Bystřice 848",
  account: "2801709799/2010",
  iban: "CZ0420100000002801709799",
  bank: "Fio banka (transparentní účet)",
};

// Řetězec pro QR platbu dle českého standardu SPAYD (čte ho každá bankovní aplikace).
// MSG záměrně bez diakritiky kvůli kompatibilitě. Tento je pro dobrovolný dar (bez částky).
export const qrPaymentString = `SPD*1.0*ACC:${event.iban}*CC:CZK*MSG:HAFIADA - podpora zviratkum v nouzi`;

// Jediný zdroj pravdy pro platbu startovného – pokyny používej VŠUDE stejné.
export const payment = {
  account: event.account,
  iban: event.iban,
  bank: event.bank,
  amount: 300,
  amountNextDog: 150,
  amountOnSite: 500,
  paymentDeadline: "24. 8. 2026",
  instructions: [
    "Startovné 300 Kč zaplaťte předem na účet (každý další pes 150 Kč, přihláška na místě 500 Kč).",
    "Jako variabilní symbol (VS) uveďte telefonní číslo z přihlášky.",
    "Do zprávy pro příjemce napište příjmení a jméno psovoda i psa.",
    "Platba musí být připsána na účet nejpozději 24. 8. 2026.",
    "Jedete Haficross i Hafiádu? Stačí jedna platba 300 Kč – vyplňte obě přihlášky a do zprávy napište „Haficross + Hafiáda“.",
  ],
};

export type Organizer = {
  name: string;
  role: string;
  phone?: string;
  email?: string;
  address?: string;
};

export const contact = {
  email: "hafiada@seznam.cz",
  facebookGroup: "https://www.facebook.com/groups/hafiada",
  organizers: [
    {
      name: "Eva Matlochová",
      role: "Organizátorka",
      address: "Nýdek 542, 739 96 Nýdek",
      phone: "+420 605 780 982",
      email: "eva.matlochova@seznam.cz",
    },
    {
      name: "Tereza Vačina",
      role: "Organizátorka",
      phone: "+420 736 520 587",
      email: "vacina.tereza@gmail.com",
    },
  ] satisfies Organizer[],
};

// ---------------------------------------------------------------------------
// GOOGLE FORMULÁŘE
// ---------------------------------------------------------------------------
// Až budou formuláře hotové, vlož sem jejich URL. Web umí dva režimy:
//   1) "embed"  – formulář se zobrazí přímo na stránce (iframe). Vlož odkaz,
//                 který v Google Forms získáš přes Odeslat → < > (embed).
//   2) "link"   – jen tlačítko, které otevře Google formulář v novém okně.
// Pokud necháš url prázdné (""), zobrazí se hláška „Formulář se připravuje“.
// ---------------------------------------------------------------------------

export type FormConfig = {
  mode: "embed" | "link";
  /** U embed: odkaz s ?embedded=true. U link: běžný /viewform odkaz. */
  url: string;
};

export const forms: Record<"hafiada" | "haficross", FormConfig> = {
  hafiada: {
    mode: "embed",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfhljYImAq6LikZz5lk5_Qkj_u9FMhhhS_oiNxcbukPEpaN8g/viewform?embedded=true",
  },
  haficross: {
    mode: "embed",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSekUnZbPtygGiIuRUTUgi41XRPpfW3rr2XJ20huLjGu-nts_Q/viewform?embedded=true",
  },
};

export const photoContest = {
  year: 2026,
  theme: "♡ Můj pes je nejkrásnější ♡",
};

export type Sponsor = { name: string; logo: string; url?: string };

// Sponzoři převzatí z původního webu. Doplň/uprav názvy a přidej odkazy (url).
export const sponsors: Sponsor[] = [
  { name: "Obec Bystřice", logo: sponsorLogos.bystrice, url: "https://www.bystrice.cz/" },
  { name: "A8 Reklama", logo: sponsorLogos.a8 },
  { name: "NNT Products", logo: sponsorLogos.nnt },
  { name: "Rosigrafik – grafika & design", logo: sponsorLogos.rosigrafik },
  { name: "Szturc – tvůrce interiérů", logo: sponsorLogos.szturc },
  { name: "Cann Rest", logo: sponsorLogos.cannrest },
];
