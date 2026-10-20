import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ivory">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(196,160,90,0.3),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(196,160,90,0.12),transparent_50%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-32">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">
            Handcrafted Filipino Formalwear
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Wear the heritage.
            <br />
            Own the occasion.
          </h1>
          <p className="mt-6 max-w-md text-base text-ivory/75">
            Authentic barong tagalog in piña, jusi and organza — embroidered by
            master artisans and tailored to your measurements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#collection">Shop the Collection</a>
            </Button>
            <Button asChild variant="light">
              <a href="#about">Our Story</a>
            </Button>
          </div>
        </div>

        <div
          aria-hidden
          className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-t-full border border-gold/50 bg-gradient-to-b from-gold/30 to-transparent p-3"
        >
          <div className="flex h-full w-full items-center justify-center rounded-t-full border border-gold/30 bg-ink/40">
            <span className="font-serif text-7xl text-gold">M</span>
          </div>
        </div>
      </div>
    </section>
  );
}
