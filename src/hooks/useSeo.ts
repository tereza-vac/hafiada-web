import { useEffect } from "react";

const SITE = "https://hafiada.cz";
const DEFAULT_IMAGE = `${SITE}/images/hero-dogs.jpg`;

type SeoOptions = {
  title: string;
  description: string;
  /** Cesta bez domény, např. "/kontakt". Výchozí je aktuální location.pathname. */
  path?: string;
  image?: string;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, path, image }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title.includes("Hafiáda")
      ? title
      : `${title} | Hafiáda 2026`;
    const url = SITE + (path ?? window.location.pathname);
    const img = image ?? DEFAULT_IMAGE;

    document.title = fullTitle;
    setMeta("name", "description", description);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);

    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);

    setCanonical(url);
  }, [title, description, path, image]);
}
