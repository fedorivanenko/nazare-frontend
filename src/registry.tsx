import { defineRegistry } from "@json-render/react";
import { catalog } from "./catalog";

export const { registry } = defineRegistry(catalog, {
  components: {
    Hero: ({ props, slots }) => (
      <section
        className="hero"
        data-layout={props.layout}
        data-size={props.size}
        data-align={props.align}
        data-theme={props.theme}
      >
        <div className="hero__media">{slots?.media}</div>
        <div className="hero__content">
          {slots?.eyebrow && <div className="hero__eyebrow">{slots.eyebrow}</div>}
          <div className="hero__heading">{slots?.heading}</div>
          {slots?.body && <div className="hero__body">{slots.body}</div>}
          {slots?.actions && <div className="hero__actions">{slots.actions}</div>}
        </div>
      </section>
    ),
    Heading: ({ props }) => {
      const Tag = `h${props.level}` as "h1" | "h2" | "h3";
      return <Tag>{props.content}</Tag>;
    },
    Text: ({ props }) => <p data-tone={props.tone}>{props.content}</p>,
    Button: ({ props }) => (
      <a className="button" data-variant={props.variant} href={props.href}>
        {props.label}
      </a>
    ),
    Image: ({ props }) => <img src={props.src} alt={props.alt} />,
  },
});
