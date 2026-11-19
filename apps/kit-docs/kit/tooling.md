# TypeScript & tooling

## Types

fewui's source is JavaScript, but the package ships declarations generated from the components themselves (`types/index.d.ts`). You get:

- **Typed props in templates.** Every `ui-*` tag is declared in Vue's `GlobalComponents`, so Volar completes props and flags unknown values:

  ```html
  <ui-button color="error" />
  <!--        ^ Type '"error"' is not assignable to type '"primary" | "secondary" | … -->
  ```

- **Typed props in script**: `import type { ButtonProps, DialogProps } from 'fewui'`.
- **Typed composables**: `useToast`, `useConfirm`, `useDialog`, theme helpers (`setUiTheme`, `applyUiTheme`, `defineTheme`).

Enum unions come from each prop's `validator`, so they cannot drift from the runtime. Less-used utilities are declared loosely (`any`) rather than guessed.

Nothing to configure: the `types` field and the `exports` map point at the declarations.

## Machine-readable component data

`fewui/components.json` lists every component with its props (type, default, description), events and slots. It is the same data the docs are generated from, and is meant for editor tooling and AI agents:

```js
import components from 'fewui/components.json' with { type: 'json' }
```

## Working on fewui

| Command (repo root) | What it does |
| --- | --- |
| `pnpm build:lib` | Builds the library (`dist/`), after regenerating theme CSS, types and component docs |
| `pnpm test` | Unit and component tests (Vitest + happy-dom) |
| `pnpm lint` | ESLint — real errors only, no formatting rules |
| `pnpm check` | Everything CI runs: theme CSS, API vocabulary, generated files, types, lint, tests |
| `pnpm build:meta` | Regenerates `types/` and the component pages of this site |
| `pnpm docs:dev` | Playground on `:5175` (`?examples=1` lists every example) |
| `pnpm kit-docs:dev` | This site on `:5174` |

### Checks that run before every build

- **Theme CSS** — each `themes/<id>/color.css` is generated from `preset.js`; a stale file fails the check.
- **API vocabulary** — event names are kebab-case, `color` only takes tone names, `variant` never takes a tone, sizes come from the shared scale.
- **Generated files** — `types/` and the component pages must match the source.

### Adding a component

1. `packages/ui/src/components/<Name>.vue` — Options API, typed props with validators, explicit `emits`, text through `resolveUiText`.
2. Styles as `ui-<name>` classes in `themes/components/parts/<name>.css` (imported from `themes/components/index.css`).
3. Strings in `src/locales/tr.js` and `en.js`.
4. Register in `src/index.js` (import, named export, `GLOBAL_COMPONENTS`).
5. An example in `apps/docs/src/examples/<Name>Example.vue` — it becomes the live demo and the copy-paste snippet on the component page.
6. A test in `packages/ui/tests/components/`.
7. `pnpm build:lib` — regenerates types and docs.
