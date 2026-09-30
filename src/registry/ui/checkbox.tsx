import * as React from "react";
import { Check } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const checkboxVariants = cva(
  "peer inline-flex shrink-0 items-center justify-center rounded border border-primary " +
    "text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
    "disabled:cursor-not-allowed disabled:opacity-50 " +
    "data-[state=checked]:bg-primary data-[state=checked]:border-primary " +
    "data-[state=unchecked]:bg-background",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        default: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const iconSize = {
  sm: "h-3 w-3",
  default: "h-3.5 w-3.5",
  lg: "h-4 w-4",
} as const;

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Estado controlado do checkbox. */
  checked?: boolean;
  /** Estado inicial em modo não controlado. */
  defaultChecked?: boolean;
  /** Disparado quando o estado muda. */
  onCheckedChange?: (checked: boolean) => void;
  /** Tamanho visual do checkbox. */
  size?: VariantProps<typeof checkboxVariants>["size"];
}

/**
 * Checkbox acessível baseado em input nativo.
 * Suporta modo controlado (`checked` + `onCheckedChange`) e não controlado (`defaultChecked`).
 * Tamanhos: sm, default, lg.
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
          checkboxVariants({ size }),
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        data-state={state}
      >
        <input
          ref={ref}
          type="checkbox"
          aria-checked={isChecked}
          className="sr-only"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        {isChecked ? (
          <Check className={cn(iconSize[size ?? "default"])} strokeWidth={3} />
        ) : null}
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
