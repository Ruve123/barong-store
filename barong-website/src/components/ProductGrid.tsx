"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "@/components/ui/Button";
import { formatPrice, products, type Product } from "@/data/products";

function ProductImage({ product }: { product: Product }) {
  return (
    <AspectRatio.Root ratio={4 / 5} className="overflow-hidden rounded-lg bg-sand">
      {product.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      ) : (
        <div
          role="img"
          aria-label={`${product.name} placeholder`}
          className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-sand to-gold/30"
        >
          <span className="font-serif text-5xl text-gold-dark">{product.fabric[0]}</span>
          <span className="mt-2 text-xs uppercase tracking-widest text-ink/50">
            {product.fabric}
          </span>
        </div>
      )}
    </AspectRatio.Root>
  );
}

export default function ProductGrid() {
  return (
    <section id="collection" className="bg-sand/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-dark">
            The Collection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl">Find your barong</h2>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.id}>
              <Dialog.Root>
                <Dialog.Trigger className="group block w-full text-left">
                  <div className="relative">
                    <ProductImage product={p} />
                    {p.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-xs text-ivory">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-serif text-lg group-hover:text-gold-dark">
                    {p.name}
                  </h3>
                  <p className="text-sm text-ink/60">{p.fabric}</p>
                  <p className="mt-1 font-medium">{formatPrice(p.price)}</p>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/60" />
                  <Dialog.Content className="fixed left-1/2 top-1/2 z-50 grid max-h-[90vh] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-xl bg-ivory p-6 shadow-2xl sm:grid-cols-2">
                    <ProductImage product={p} />
                    <div className="flex flex-col">
                      <Dialog.Title className="font-serif text-2xl">{p.name}</Dialog.Title>
                      <p className="mt-1 text-sm text-ink/60">{p.fabric}</p>
                      <p className="mt-4 text-2xl text-gold-dark">{formatPrice(p.price)}</p>
                      <Dialog.Description className="mt-4 text-ink/75">
                        {p.description}
                      </Dialog.Description>
                      <div className="mt-auto flex gap-3 pt-6">
                        <Dialog.Close asChild>
                          <Button asChild className="flex-1">
                            <a href="#contact">Order This Barong</a>
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close asChild>
                          <Button variant="outline">Close</Button>
                        </Dialog.Close>
                      </div>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
