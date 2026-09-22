# design-system-components

Design system baseado no padrão **shadcn/ui + registry**. Repositório isolado de componentes de UI, consumido pelos projetos via **Git submodule**.

## Estrutura

```
src/
  registry/
    ui/
      button.tsx     # Button com cva (variantes/tamanhos) + estado de clique
      card.tsx       # Card composável (Header/Title/Description/Content/Footer)
      badge.tsx      # Badge de status/rótulo com variantes
      input.tsx      # Input de texto base
      alert.tsx      # Alert (Title/Description) com variantes
      label.tsx      # Label de formulário com variantes
      skeleton.tsx   # Skeleton placeholder de carregamento
      separator.tsx  # Separator (divisor) horizontal/vertical
    lib/
      utils.ts     # cn() (clsx + tailwind-merge)
  index.ts         # barrel export limpo
  styles.css       # tokens de tema (shadcn HSL) + Tailwind
registry.json      # metadata no formato shadcn registry
tailwind.preset.cjs # preset compartilhado de tokens
demo/              # app Vite standalone para ver os componentes
```

## Rodar isolado

```bash
npm install
npm run dev   # http://localhost:5170
```

## Componentes

| Componente | Descrição |
| --- | --- |
| `Button` | Botão interativo com variantes (default, secondary, outline, ghost, destructive), tamanhos e feedback de clique. |
| `Card` | Card composável: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`. |
| `Badge` | Rótulo de status com variantes. |
| `Input` | Campo de texto base. |
| `Alert` | Mensagem de destaque: `AlertTitle`, `AlertDescription`. |
| `Label` | Rótulo de formulário com variantes. |
| `Skeleton` | Placeholder animado para estados de carregamento. |
| `Separator` | Divisor horizontal/vertical com suporte a acessibilidade. |

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Input,
  Label,
  Separator,
} from "./index";
```

Este repositório é adicionado como submódulo em `sistema-principal/src/components/shared`.
