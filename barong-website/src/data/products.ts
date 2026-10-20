export type Product = {
  id: string;
  name: string;
  fabric: string;
  description: string;
  price: number; // PHP
  tag?: string;
  /** Optional image under /public, e.g. "/products/pina-classic.jpg". Falls back to a placeholder. */
  image?: string;
};

export const products: Product[] = [
  {
    id: "pina-classic",
    name: "Classic Piña Barong",
    fabric: "Piña",
    description:
      "Sheer pineapple-fiber barong with fine calado embroidery along the placket and cuffs.",
    price: 8900,
    tag: "Bestseller",
  },
  {
    id: "jusi-heritage",
    name: "Heritage Jusi Barong",
    fabric: "Jusi",
    description:
      "Smooth, lightweight jusi with traditional floral embroidery. Ideal for weddings.",
    price: 5200,
  },
  {
    id: "organza-modern",
    name: "Modern Organza Barong",
    fabric: "Organza",
    description:
      "A slim-cut barong in crisp organza with minimalist tonal embroidery.",
    price: 4200,
    tag: "New",
  },
  {
    id: "pina-silk-royal",
    name: "Royal Piña-Silk Barong",
    fabric: "Piña-Silk",
    description:
      "Luxurious piña-silk blend with dense hand embroidery, made for the groom and principal sponsors.",
    price: 12500,
  },
  {
    id: "cocoon-everyday",
    name: "Cocoon Everyday Barong",
    fabric: "Cocoon",
    description:
      "Breathable cocoon fabric with subtle patterning — easy to wear to the office or events.",
    price: 3600,
  },
  {
    id: "ivory-wedding",
    name: "Ivory Wedding Barong",
    fabric: "Piña",
    description:
      "Ivory piña with gold-toned embroidery and mother-of-pearl buttons for the big day.",
    price: 9800,
    tag: "Limited",
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(n);
