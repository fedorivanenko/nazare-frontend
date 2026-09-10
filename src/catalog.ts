import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/react/schema";
import { z } from "zod";

export const catalog = defineCatalog(schema, {
  components: {
    Hero: {
      description:
        "Primary page hero. Composes presentation primitives into constrained semantic slots.",
      props: z.object({
        layout: z.enum(["centered", "split-left", "split-right", "overlay"]),
        size: z.enum(["sm", "md", "lg", "screen"]),
        align: z.enum(["start", "center", "end"]),
        theme: z.enum(["light", "dark"]),
      }),
      slots: ["eyebrow", "heading", "body", "actions", "media"],
    },
    Heading: {
      description: "Semantic heading text.",
      props: z.object({
        content: z.string(),
        level: z.union([z.literal(1), z.literal(2), z.literal(3)]),
      }),
    },
    Text: {
      description: "Supporting text content.",
      props: z.object({
        content: z.string(),
        tone: z.enum(["default", "muted", "eyebrow"]),
      }),
    },
    Button: {
      description: "Navigation call to action.",
      props: z.object({
        label: z.string(),
        href: z.string(),
        variant: z.enum(["primary", "secondary"]),
      }),
    },
    Image: {
      description: "Responsive storefront image.",
      props: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    },
  },
  actions: {},
});

export type NazareCatalog = typeof catalog;
