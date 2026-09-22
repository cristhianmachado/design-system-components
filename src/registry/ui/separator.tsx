import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const separatorVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  /** Se true, o separator é puramente visual e removido da árvore de acessibilidade. */
  decorative?: boolean;
}

/**
 * Separator (divisor) horizontal ou vertical.
 * Use `decorative` para separadores meramente visuais.
 */
const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <div
      ref={ref}
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation ?? "horizontal"}
      className={cn(separatorVariants({ orientation }), className)}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator, separatorVariants };
