import { PageHero, Section } from "../components/ui";
import { galleryImages, images } from "../data/images";
import { useSeo } from "../hooks/useSeo";

export default function FotogaleriePage() {
  useSeo({
    title: "Fotogalerie",
    description:
      "Fotky a atmosféra Hafiády – psí radost, soutěže a skvělá společnost milovníků psů.",
  });
  return (
    <>
      <PageHero
        eyebrow="O nás"
        title="Fotogalerie"
        subtitle="Atmosféra Hafiády – psí radost, soutěže a skvělá společnost na snímcích z akce."
        image={images.group}
      />
      <Section>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>img]:mb-4">
          {galleryImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Fotka ${i + 1}`}
              loading="lazy"
              className="w-full break-inside-avoid rounded-2xl object-cover shadow-sm transition hover:shadow-md"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
