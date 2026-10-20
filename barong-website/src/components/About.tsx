import * as Separator from "@radix-ui/react-separator";

const stats = [
  { value: "100%", label: "Hand-embroidered" },
  { value: "3 wks", label: "Made-to-measure" },
  { value: "20+", label: "Years of craft" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-dark">
          Our Story
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl">
          A national garment, made with patience
        </h2>
        <p className="mt-6 text-ink/75">
          The barong tagalog has dressed Filipino weddings, ceremonies and
          celebrations for generations. Each of our pieces begins with
          sheer piña or jusi cloth and is embroidered stitch by stitch
          (calado) by artisans who learned the craft from their families.
        </p>
        <p className="mt-4 text-ink/75">
          We sell directly online, so you get heirloom quality without the
          showroom markup — cut to your measurements and delivered to your door.
        </p>
      </div>

      <Separator.Root className="mx-auto my-12 h-px w-24 bg-gold" />

      <dl className="grid gap-8 text-center sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="font-serif text-4xl text-gold-dark">{s.value}</dt>
            <dd className="mt-1 text-sm text-ink/70">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
