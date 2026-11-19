# Skills & rules

FewUI is designed for **Cursor rules** and **agent skills** alongside code.

## Cursor rules (`.mdc`)

Rules encode non-negotiables:

- Use `ui-*` components; do not override with arbitrary classes on components.
- i18n for all user-visible strings.
- API access through the app request layer.

Generate a starter rule from the playground: **Download rules** → `fewui-theme.mdc`.

## Agent skills (`SKILL.md`)

Skills tell agents *when* and *how* to use Kit:

- Component choice for forms, dialogs, lists.
- Theme token reference for the current project.
- Links to Kit docs and playground.

Generate from the playground: **Download skill**.

## Component data for agents

`fewui/components.json` lists every component with props (type, default, description), events and slots. It is generated from the source on every build, so an agent can check a prop name or an allowed value instead of guessing. The same data backs the [component pages](./components/); `llms.txt` at the site root indexes them.

## Restta reference

The Restta frontend and landing apps implement these patterns in production. Use them as examples when extending Kit.
