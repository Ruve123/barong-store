"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Button from "@/components/ui/Button";

const links = [
  { href: "#about", label: "Our Story" },
  { href: "#collection", label: "Collection" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-serif text-xl tracking-wide">
          Barong <span className="text-gold">Lokal</span>
        </a>

        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List className="flex items-center gap-8">
            {links.map((l) => (
              <NavigationMenu.Item key={l.href}>
                <NavigationMenu.Link
                  href={l.href}
                  className="text-sm transition-colors hover:text-gold-dark"
                >
                  {l.label}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:inline-flex">
            <a href="#collection">Shop Now</a>
          </Button>

          <Dialog.Root>
            <Dialog.Trigger
              aria-label="Open menu"
              className="rounded-md p-2 hover:bg-sand md:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-ivory p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-serif text-lg">Menu</Dialog.Title>
                  <Dialog.Close aria-label="Close menu" className="rounded-md p-2 hover:bg-sand">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">
                  Site navigation
                </Dialog.Description>
                <nav className="mt-8 flex flex-col gap-5">
                  {links.map((l) => (
                    <Dialog.Close asChild key={l.href}>
                      <a href={l.href} className="text-lg hover:text-gold-dark">
                        {l.label}
                      </a>
                    </Dialog.Close>
                  ))}
                </nav>
                <Dialog.Close asChild>
                  <Button asChild className="mt-auto">
                    <a href="#collection">Shop Now</a>
                  </Button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
