import { Renderer } from "@json-render/react";
import { heroSpec } from "./hero.spec";
import { registry } from "./registry";

export function App() {
  return (
    <main>
      <Renderer spec={heroSpec} registry={registry} />
    </main>
  );
}
