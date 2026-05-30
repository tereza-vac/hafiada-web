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

// Fotky pro galerii (zatím ukázkové, lze nahradit reálnými fotkami z akce).
export const galleryImages = [
  images.hero,
  images.running,
  images.puppy,
  images.group,
  images.agility,
  images.senior,
  images.kid,
  images.charity,
];
