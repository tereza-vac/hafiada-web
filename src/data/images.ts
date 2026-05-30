// Helper, který respektuje base URL (kvůli nasazení na GitHub Pages).
const base = import.meta.env.BASE_URL;

export const asset = (path: string) => `${base}${path.replace(/^\//, "")}`;

export const images = {
  hero: asset("images/hero-dogs.jpg"),
  running: asset("images/running-dog.jpg"),
  puppy: asset("images/puppy.jpg"),
  group: asset("images/group-dogs.jpg"),
  agility: asset("images/agility.jpg"),
  senior: asset("images/senior-dog.jpg"),
  kid: asset("images/kid-dog.jpg"),
  charity: asset("images/charity-dog.jpg"),
};

// Reálné fotky z Hafiády (staženo z původní galerie). Soubory: public/images/gallery/g01.jpg …
export const galleryImages = Array.from({ length: 30 }, (_, i) =>
  asset(`images/gallery/g${String(i + 1).padStart(2, "0")}.jpg`)
);

// Loga sponzorů. Název uprav/doplň v src/data/site.ts → sponsors.
export const sponsorLogos = {
  a8: asset("images/sponsors/s1.png"),
  bystrice: asset("images/sponsors/s2.jpg"),
  nnt: asset("images/sponsors/s3.png"),
  rosigrafik: asset("images/sponsors/s4.jpg"),
  szturc: asset("images/sponsors/s5.jpg"),
  cannrest: asset("images/sponsors/s6.png"),
};
