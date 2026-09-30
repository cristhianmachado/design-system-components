import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent " +
    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed " +
    "disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        default: "h-6 w-11",
        lg: "h-7 w-[52px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const thumbVariants = cva(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform " +
    "data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4",
        default: "h-5 w-5 data-[state=checked]:translate-x-5",
        lg: "h-6 w-6 data-[state=checked]:translate-x-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof switchVariants> {
  /** Estado controlado do switch. */
  checked?: boolean;
  /** Estado inicial em modo não controlado. */
  defaultChecked?: boolean;
  /** Disparado quando o estado muda. */
  onCheckedChange?: (checked: boolean) => void;
}

/**
 * Switch (toggle) acessível baseado em checkbox nativo.
 * Suporta modo controlado (`checked` + `onCheckedChange`) e não controlado (`defaultChecked`).
 * Tamanhos: sm, default, lg.
 */
const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      size = "default",
      checked,
      defaultChecked,
      onCheckedChange,
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState(
      defaultChecked ?? false
    );
    const isChecked = isControlled ? checked : internalChecked;
    const state = isChecked ? "checked" : "unchecked";

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalChecked(event.target.checked);
      }
      onCheckedChange?.(event.target.checked);
      onChange?.(event);
    };

    return (
      <label
        className={cn(
          switchVariants({ size }),
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        data-state={state}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          aria-checked={isChecked}
          className="sr-only"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <span className={cn(thumbVariants({ size }))} data-state={state} />
      </label>
    );
  }
);
Switch.displayName = "Switch";

export { Switch, switchVariants };
