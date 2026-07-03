# FewUI Kit

FewUI is not only a Vue component library. It is an **AI-native design system**: components, design tokens, Cursor rules, and agent skills share one contract so humans and AI assistants build UIs with the same vocabulary.

## What Kit includes

- **`ui-*` components** — forms, dialogs, tables, navigation, and more.
- **`UiThemeConfig`** — runtime theming via CSS custom properties (`applyUiTheme`, `mergeUiTheme`).
- **Presets** — `panel` (admin), `flat` (solid surfaces), `landing` (tenant sites).
- **Playground** — live component gallery with a theme sidebar ([localhost:5175](http://localhost:5175)).
- **Rules & skills** — exportable Cursor rules and `SKILL.md` for agent workflows.

## AI-first philosophy

Traditional UI kits document props for humans. FewUI also documents **decisions**:

- Which component to use for a pattern (never raw `<button>` for primary actions).
- How errors surface (`ui-alert`, API message helpers).
- How theming flows from a single `primaryColor` to accents and SSR.

Restta (restaurant POS, web module, landing) is the reference production app built on Kit.

## Next steps

- [Getting started](./getting-started)
- [Theming](./theming)
- [Skills & rules](./skills-and-rules)
