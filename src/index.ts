// Ponto de entrada limpo do design system.
// Consumidores importam tudo a partir daqui: import { Button, Card } from '...'

export { Button, buttonVariants, type ButtonProps } from "./registry/ui/button";
export { Badge, badgeVariants, type BadgeProps } from "./registry/ui/badge";
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./registry/ui/card";
export { cn } from "./registry/lib/utils";

// Estilos base (tokens + preset). Consumidores podem importar:
//   import '@vibecoding/design-system-components/src/styles.css'
