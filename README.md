# design-system-components

Design system baseado no padrão **shadcn/ui + registry**. Repositório isolado de componentes de UI, consumido pelos projetos via **Git submodule**.

## Estrutura

```
src/
  registry/
    ui/
      button.tsx   # Button com cva (variantes/tamanhos) + estado de clique
      card.tsx     # Card composável (Header/Title/Description/Content/Footer)
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

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "./index";
```

Este repositório é adicionado como submódulo em `sistema-principal/src/components/shared`.
