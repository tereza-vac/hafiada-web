# Hafiáda – web

Moderní web pro **Hafiádu** – zábavný den pro celou rodinu se psy (soutěže, Haficross
a pomoc zvířátkům v nouzi). Postaveno na **React + Vite + TypeScript + Tailwind CSS**.

Obsah vychází z původního webu [hafiada.cz](https://www.hafiada.cz/), design je
modernizovaný, ale ve stejném přátelském duchu.

## Spuštění lokálně

```bash
npm install
npm run dev
```

Web poběží na `http://localhost:5173`.

```bash
npm run build     # produkční build do složky dist/
npm run preview   # náhled produkčního buildu
```

## Kde se co mění

Skoro všechen text a nastavení je na jednom místě:

- **`src/data/site.ts`** – datum a místo akce, číslo účtu, kontakty, **odkazy na Google formuláře**.
- **`src/data/content.ts`** – pravidla soutěží a harmonogram.
- **`src/data/images.ts`** – fotky (uložené v `public/images/`).

## Google formuláře (přihlášky)

Web nepotřebuje vlastní databázi – přihlášky řeší **Google Forms**, takže odpovědi
chodí dál do stávajícího Google Sheetu autora formuláře. V `src/data/site.ts` u klíče
`forms` jsou dva režimy:

- `mode: "embed"` – formulář se zobrazí přímo na stránce v `iframe`. Do `url` vlož
  odkaz z Google Forms → **Odeslat → `< >` (Vložit HTML)**, je v něm `?embedded=true`.
- `mode: "link"` – na stránce je jen tlačítko, které otevře formulář v novém okně
  (do `url` dej běžný odkaz `.../viewform`).

Dokud je `url` prázdné (`""`), zobrazí se hláška „Formulář se připravuje“.

## Nasazení (GitHub Pages)

V repu je workflow `.github/workflows/deploy.yml`, který po každém pushi do `main`
web sestaví a nasadí na GitHub Pages. Stačí v nastavení repozitáře zapnout
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

- **Vlastní doména `hafiada.cz`:** ponech `base = "/"` (výchozí). Do `public/CNAME`
  přidej řádek `hafiada.cz` a v DNS nastav záznamy podle návodu GitHubu.
- **Adresa `tereza-vac.github.io/hafiada-web/`:** v workflow odkomentuj řádek
  `BASE_PATH=/hafiada-web/`.

© Hafiáda, z.s.
