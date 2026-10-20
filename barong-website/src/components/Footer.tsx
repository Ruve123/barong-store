const columns = [
  {
    title: "Shop",
    links: [
      { label: "Piña", href: "#collection" },
      { label: "Jusi", href: "#collection" },
      { label: "Organza", href: "#collection" },
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
    <footer className="border-t border-ink/10 bg-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl">
            Mopon <span className="text-gold">Barong</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-ink/70">
            Handcrafted barong tagalog, made to measure and delivered nationwide.
          </p>
        </div>
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink/50">
              {c.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-gold-dark">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-ink/10 py-5 text-center text-xs text-ink/50">
        © {new Date().getFullYear()} Mopon Barong. All rights reserved.
      </div>
    </footer>
  );
}
