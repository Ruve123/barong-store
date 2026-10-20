const columns = [
  {
    title: "Shop",
    links: [
      { label: "Venushia", href: "#collection" },
      { label: "Mono JJ", href: "#collection" },
      { label: "Hugo", href: "#collection" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  },
];

export default async function Footer() {
  "use cache";
  return (
    <footer className="gold-frame bg-ink text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl">
            Barong <span className="text-gold">Lokal</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-ivory/70">
            Handcrafted barong tagalog, made to measure and delivered nationwide.
          </p>
        </div>
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">
              {c.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="relative py-5 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} Barong Lokal. All rights reserved.
      </div>
    </footer>
  );
}
