export type Product = {
  id: string;
  name: string;
  fabric: string;
  description: string;
  price: number; // PHP
  tag?: string;
  /** Optional image under /public, e.g. "/products/venushia-burgundy.jpg". Falls back to a placeholder. */
  image?: string;
};

export const products: Product[] = [
  {
    id: "venushia-burgundy",
    name: "Venushia Burgundy Barong",
    fabric: "Venushia",
    description:
      "Lightweight, wrinkle-resistant barong in burgundy with red embroidery and lace-panel accents. Available in S, M and L.",
    price: 4200,
    tag: "Bestseller",
    image: "/products/venushia-burgundy.jpg",
  },
  {
    id: "venushia-black",
    name: "Venushia Black Barong",
    fabric: "Venushia",
    description:
      "Lightweight, wrinkle-resistant barong in black with geometric white embroidery and grey trim. Available in M, L and XL.",
    price: 4200,
    image: "/products/venushia-black.jpg",
  },
  {
    id: "venushia-forest",
    name: "Venushia Forest Barong",
    fabric: "Venushia",
    description:
      "Lightweight, wrinkle-resistant barong in deep forest green with white and green floral embroidery. Available in S, M and L.",
    price: 4200,
    tag: "New",
    image: "/products/venushia-forest.jpg",
  },
  {
    id: "mono-jj-green",
    name: "Mono JJ Green Barong",
    fabric: "Mono JJ",
    description:
      "Lightweight, wrinkle-resistant barong in an emerald ombré with a subtle tonal geometric panel. Available in S, L and XL.",
    price: 3600,
    image: "/products/mono-jj-green.jpg",
  },
  {
    id: "mono-jj-grey",
    name: "Mono JJ Grey Barong",
    fabric: "Mono JJ",
    description:
      "Lightweight, wrinkle-resistant barong in a grey ombré with black floral embroidery and lace-panel front. Available in S, L and XL.",
    price: 3600,
    image: "/products/mono-jj-grey.jpg",
  },
  {
    id: "hugo-mint",
    name: "Hugo Mint Barong",
    fabric: "Hugo",
    description:
      "Lightweight, wrinkle-resistant barong in fresh mint with fine cream floral embroidery. Available in Large.",
    price: 3200,
    tag: "Limited",
    image: "/products/hugo-mint.jpg",
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(n);
