# FewUI Kit

FewUI is not only a Vue component library. It is an **AI-native design system**: components, design tokens, Cursor rules, and agent skills share one contract so humans and AI assistants build UIs with the same vocabulary.

## What Kit includes

- **`ui-*` components** — forms, dialogs, tables, navigation, and more.
- **Theme packages** — `defineTheme` + light/dark tokens, generated `color.css`, `ui-theme-provider` for scoped preview.
- **Themes** — `web` (admin panel), `liquidglass` (iOS), `android` (Material 3), `landing` (tenant sites), `fewui`.
- **Types and component data** — generated declarations for every `ui-*` tag and a machine-readable `components.json`.
- **Playground** — live component gallery with a theme sidebar ([fewui-docs.pages.dev](https://fewui-docs.pages.dev)).
- **Rules & skills** — exportable Cursor rules and `SKILL.md` for agent workflows.

## AI-first philosophy

Traditional UI kits document props for humans. FewUI also documents **decisions**:

- Which component to use for a pattern (never raw `<button>` for primary actions).
- How errors surface (`ui-alert`, API message helpers).
- How theming flows from a single `primaryColor` to accents and SSR.

Restta (restaurant POS, web module, landing) is the reference production app built on Kit.

## Next steps

- [Getting started](./getting-started)
- [Components](./components/)
- [Theming](./theming)
- [Localization & RTL](./localization)
- [Accessibility](./accessibility)
- [TypeScript & tooling](./tooling)
- [Skills & rules](./skills-and-rules)
