# Nazare Frontend

Tiny proof-of-concept for representing storefront sections as constrained JSON compositions using [`json-render`](https://json-render.dev/).

## What this proves

- `Hero` is a semantic composite with named slots.
- `Heading`, `Text`, `Button`, and `Image` are presentation primitives.
- The page is described by `src/hero.spec.ts`; changing the hero does not require editing React component code.
- `src/catalog.ts` is the generation contract and `src/registry.tsx` is the React implementation.

This intentionally stops before Shopify/Hydrogen data bindings. The next Nazare-specific layer should resolve business capabilities (for example `collection.products` or `navigation.collectionUrl`) into values consumed by these frontend primitives.

## Run

```bash
pnpm install
pnpm dev
```

Build/typecheck:

```bash
pnpm build
```

## Files

```text
src/
  catalog.ts     constrained vocabulary
  registry.tsx   React implementations
  hero.spec.ts   merchant/agent-editable composition
  App.tsx        renderer host
  styles.css     layout implementation
```
