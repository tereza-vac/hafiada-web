// ---------------------------------------------------------------------------
// Centrální nastavení webu. Tady měň texty, kontakty a odkazy na formuláře.
// ---------------------------------------------------------------------------

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
  bank: "Fio banka (transparentní účet)",
};

export const contact = {
  email: "hafiada@seznam.cz",
  facebookGroup: "https://www.facebook.com/groups/hafiada",
  organizers: [
    { name: "Sylwia Gajger", role: "Hlavní organizátorka" },
    { name: "Diana Džupinová", role: "Hlavní organizátorka" },
  ],
  founder: {
    name: "Eva Matlochová",
    role: "Zakladatelka Hafiády",
    address: "Nýdek 542, 739 96 Nýdek",
    phone: "+420 605 780 982",
    email: "eva.matlochova@seznam.cz",
  },
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
    url: "", // např. https://docs.google.com/forms/d/e/XXXX/viewform?embedded=true
  },
  haficross: {
    mode: "embed",
    url: "",
  },
};

export const photoContest = {
  year: 2026,
  theme: "♡ Můj pes je nejkrásnější ♡",
};
