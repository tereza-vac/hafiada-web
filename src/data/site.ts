// ---------------------------------------------------------------------------
// Centrální nastavení webu. Tady měň texty, kontakty a odkazy na formuláře.
// ---------------------------------------------------------------------------

import { sponsorLogos } from "./images";

export const event = {
  year: 2026,
  date: "30. 8. 2026",
  dateLong: "neděle 30. srpna 2026",
  dateWhen: "v neděli 30. srpna 2026",
  startTime: "8:00",
  place: "Areál před bazénem, ZŠ Bystřice",
  placeShort: "Bystřice u Třince",
  district: "okres Frýdek-Místek",
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

// Jediný zdroj pravdy pro platbu startovného. Pokyny vychází z původního webu.
// Částka se záměrně do QR nedoplňuje – plátce ji zadá v bance podle pokynů.
export const payment = {
  account: event.account,
  iban: event.iban,
  bank: event.bank,
  hafiada: {
    title: "Platební údaje – Hafiáda",
    instructions: [
      "Startovné za prvního psa je 300 Kč, každý další pes stejného majitele 150 Kč.",
      "Jako variabilní symbol (VS) uveďte telefonní číslo uvedené na přihlášce.",
      "Do zprávy pro příjemce napište příjmení a jméno psovoda i psa.",
      "Přihlašujete víc psů? Můžete zaplatit jednou platbou – do zprávy napište „platba za 2 (3, 4) psy“ a jejich jména.",
      "Chcete jet i Haficross? Platí se jen jedna platba 300 Kč – vyplňte i přihlášku na Haficross a do zprávy napište „Haficross + Hafiáda“.",
      "Přihláška na místě: 500 Kč za prvního psa, 300 Kč za každého dalšího.",
    ],
  },
  haficross: {
    title: "Platební údaje – Haficross",
    instructions: [
      "Startovné je 300 Kč, každý další pes stejného majitele 150 Kč.",
      "Jako variabilní symbol (VS) uveďte telefonní číslo uvedené na přihlášce.",
      "Do zprávy pro příjemce napište „Haficross“ a příjmení a jméno psovoda i psa.",
      "Startovné musí být připsáno na účet nejpozději v sobotu 24. 8. 2026 ráno – na pozdější reklamace nebude brán zřetel.",
      "Chcete jet i Hafiádu? Platí se jen jedna platba 300 Kč – vyplňte i přihlášku na Hafiádu a do zprávy napište „Haficross + Hafiáda“.",
    ],
  },
};

export type PaymentVariant = "hafiada" | "haficross";

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
  theme: "Můj pes je ten nejkrásnější",
  deadline: "20. 8. 2026",
  address: "Renata Bieleszová, Slezská 739, 739 61 Třinec",
};

export type Sponsor = { name: string; logo: string; url?: string; featured?: boolean };

// Sponzoři převzatí z původního webu. Doplň/uprav názvy a přidej odkazy (url).
export const sponsors: Sponsor[] = [
  { name: "JK ANIMALS", logo: sponsorLogos.jkanimals, url: "https://www.jkanimals.cz/", featured: true },
  { name: "Obec Bystřice", logo: sponsorLogos.bystrice, url: "https://www.bystrice.cz/" },
  { name: "Karireal", logo: sponsorLogos.karireal, url: "https://www.karireal.cz/" },
  { name: "ZM Servis Moravia", logo: sponsorLogos.zmservis, url: "https://www.zmservis-moravia.cz/" },
  { name: "A8 Reklama", logo: sponsorLogos.a8, url: "https://a8reklama.cz/" },
  { name: "NNT Products", logo: sponsorLogos.nnt, url: "https://www.nntproducts.cz/" },
  { name: "Rosigrafik – grafika & design", logo: sponsorLogos.rosigrafik, url: "https://www.rosigrafik.cz/" },
  { name: "Szturc – tvůrce interiérů", logo: sponsorLogos.szturc, url: "https://www.szturc.cz/" },
  { name: "Cann Rest", logo: sponsorLogos.cannrest, url: "https://www.cannrest.cz/" },
];
