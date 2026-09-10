import { useMemo, useState } from "react";
import { Renderer } from "@json-render/react";
import { heroSpec } from "./hero.spec";
import { registry } from "./registry";

type Layout = "centered" | "split-left" | "split-right" | "overlay";
type Size = "sm" | "md" | "lg" | "screen";
type Align = "start" | "center" | "end";
type Theme = "light" | "dark";

type HeroControls = {
  layout: Layout;
  size: Size;
  align: Align;
  theme: Theme;
  eyebrow: string;
  heading: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
};

const initialControls: HeroControls = {
  layout: "split-right",
  size: "lg",
  align: "start",
  theme: "light",
  eyebrow: "NAZARE FRONTEND",
  heading: "A storefront made from capabilities, not settings.",
  body: "This hero is a JSON composition of constrained frontend primitives. The React implementation stays fixed while the spec changes.",
  primaryLabel: "Shop collection",
  secondaryLabel: "Learn more",
};

export function App() {
  const [controls, setControls] = useState(initialControls);
  const [showSpec, setShowSpec] = useState(false);

  const spec = useMemo(() => {
    const next = structuredClone(heroSpec);

    Object.assign(next.elements.hero.props, {
      layout: controls.layout,
      size: controls.size,
      align: controls.align,
      theme: controls.theme,
    });

    next.elements.eyebrow.props.content = controls.eyebrow;
    next.elements.heading.props.content = controls.heading;
    next.elements.body.props.content = controls.body;
    next.elements["primary-cta"].props.label = controls.primaryLabel;
    next.elements["secondary-cta"].props.label = controls.secondaryLabel;

    return next;
  }, [controls]);

  function update<K extends keyof HeroControls>(key: K, value: HeroControls[K]) {
    setControls((current) => ({ ...current, [key]: value }));
  }

  return (
    <main className="playground">
      <aside className="controls" aria-label="Hero controls">
        <div className="controls__header">
          <div>
            <strong>Nazare Hero</strong>
            <span>Live JSON-render controls</span>
          </div>
          <button type="button" onClick={() => setControls(initialControls)}>
            Reset
          </button>
        </div>

        <label>
          Layout
          <select value={controls.layout} onChange={(event) => update("layout", event.target.value as Layout)}>
            <option value="split-right">Split right</option>
            <option value="split-left">Split left</option>
            <option value="centered">Centered</option>
            <option value="overlay">Overlay</option>
          </select>
        </label>

        <div className="controls__row">
          <label>
            Size
            <select value={controls.size} onChange={(event) => update("size", event.target.value as Size)}>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="screen">Screen</option>
            </select>
          </label>

          <label>
            Align
            <select value={controls.align} onChange={(event) => update("align", event.target.value as Align)}>
              <option value="start">Start</option>
              <option value="center">Center</option>
              <option value="end">End</option>
            </select>
          </label>
        </div>

        <label>
          Theme
          <select value={controls.theme} onChange={(event) => update("theme", event.target.value as Theme)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>

        <label>
          Eyebrow
          <input value={controls.eyebrow} onChange={(event) => update("eyebrow", event.target.value)} />
        </label>

        <label>
          Heading
          <textarea rows={3} value={controls.heading} onChange={(event) => update("heading", event.target.value)} />
        </label>

        <label>
          Body
          <textarea rows={4} value={controls.body} onChange={(event) => update("body", event.target.value)} />
        </label>

        <div className="controls__row">
          <label>
            Primary CTA
            <input value={controls.primaryLabel} onChange={(event) => update("primaryLabel", event.target.value)} />
          </label>

          <label>
            Secondary CTA
            <input value={controls.secondaryLabel} onChange={(event) => update("secondaryLabel", event.target.value)} />
          </label>
        </div>

        <button className="controls__spec-toggle" type="button" onClick={() => setShowSpec((value) => !value)}>
          {showSpec ? "Hide generated spec" : "Show generated spec"}
        </button>

        {showSpec && <pre className="controls__spec">{JSON.stringify(spec, null, 2)}</pre>}
      </aside>

      <section className="preview" aria-label="Live hero preview">
        <Renderer spec={spec} registry={registry} />
      </section>
    </main>
  );
}
