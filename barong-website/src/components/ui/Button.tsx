import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-ink hover:bg-ivory",
  outline: "border border-ink/30 text-ink hover:border-gold hover:text-gold-dark",
  light: "border border-gold text-gold hover:bg-gold hover:text-ink",
};

type ButtonProps = ComponentProps<"button"> & {
  asChild?: boolean;
  variant?: Variant;
};

export default function Button({
  asChild,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
