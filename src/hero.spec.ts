export const heroSpec = {
  root: "hero",
  elements: {
    hero: {
      type: "Hero",
      props: {
        layout: "split-right",
        size: "lg",
        align: "start",
        theme: "light",
      },
      children: [],
      slots: {
        eyebrow: ["eyebrow"],
        heading: ["heading"],
        body: ["body"],
        actions: ["primary-cta", "secondary-cta"],
        media: ["hero-image"],
      },
    },
    eyebrow: {
      type: "Text",
      props: {
        content: "NAZARE FRONTEND",
        tone: "eyebrow",
      },
      children: [],
    },
    heading: {
      type: "Heading",
      props: {
        content: "A storefront made from capabilities, not settings.",
        level: 1,
      },
      children: [],
    },
    body: {
      type: "Text",
      props: {
        content:
          "This hero is a JSON composition of constrained frontend primitives. The React implementation stays fixed while the spec changes.",
        tone: "muted",
      },
      children: [],
    },
    "primary-cta": {
      type: "Button",
      props: {
        label: "Shop collection",
        href: "#collection",
        variant: "primary",
      },
      children: [],
    },
    "secondary-cta": {
      type: "Button",
      props: {
        label: "Learn more",
        href: "#about",
        variant: "secondary",
      },
      children: [],
    },
    "hero-image": {
      type: "Image",
      props: {
        src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=85",
        alt: "Minimal skincare product composition",
      },
      children: [],
    },
  },
} as const;
