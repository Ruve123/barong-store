import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section id="contact" className="bg-ink text-ivory">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-24">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Your barong, made to your measure
        </h2>
        <p className="mt-4 text-ivory/75">
          Send us your measurements and event date. We&apos;ll confirm fabric
          options, pricing and delivery within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href="mailto:hello@baronglokal.example">Order via Email</a>
          </Button>
          <Button asChild variant="light">
            <a href="https://m.me/baronglokal" target="_blank" rel="noreferrer">
              Chat on Messenger
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
