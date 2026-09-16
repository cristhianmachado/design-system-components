import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../src";

export function DemoApp() {
  const [count, setCount] = useState(0);

  return (
    <main className="mx-auto max-w-3xl p-8 space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">
          Design System — Showcase
        </h1>
        <p className="text-muted-foreground text-sm">
          Componentes base (padrão shadcn/registry) consumidos via submódulo.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Botão interativo</CardTitle>
          <CardDescription>
            Clique para ver o estado mudar (feedback de active:scale).
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Button onClick={() => setCount((c) => c + 1)}>
            Cliques: {count}
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </CardContent>
        <CardFooter className="gap-2">
          <Button size="sm" variant="outline" onClick={() => setCount(0)}>
            Resetar
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
