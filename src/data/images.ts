import generatedImages from "./images.generated.json";

export type PropertyImage = {
  src: string;
  alt: string;
  category: "exterior" | "interior" | "view" | "floorplan" | "mixed";
};

type GeneratedImage = {
  src: string;
  alt: string;
  responsiveWebp: string[];
};

const generated = generatedImages as GeneratedImage[];

const inferCategory = (image: GeneratedImage): PropertyImage["category"] => {
  const token = `${image.alt} ${image.src}`.toLowerCase();
  if (token.includes("floor") || token.includes("schematic") || token.includes("plan")) return "floorplan";
  if (token.includes("view") || token.includes("aerial") || token.includes("balcony")) return "view";
  if (
    token.includes("kitchen") ||
    token.includes("lounge") ||
    token.includes("dining") ||
    token.includes("bed") ||
    token.includes("bath") ||
    token.includes("office") ||
    token.includes("room")
  ) {
    return "interior";
  }
  return "exterior";
};

export const propertyImages: PropertyImage[] = generated.map((image) => ({
  src: image.src,
  alt: image.alt
    .split(" ")
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" "),
  category: inferCategory(image),
}));

export const heroImages = propertyImages.filter(
  (image) => image.category === "exterior" || image.category === "view" || image.category === "mixed",
);
