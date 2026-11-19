# Accessibility

fewui implements the WAI-ARIA Authoring Practices patterns by hand (it does not wrap a headless primitive library). This page states what the components do for you, and what remains your responsibility.

## What components guarantee

### Modal layers — `ui-dialog`, `ui-sheet`, `ui-confirm-dialog`, `ui-command`

- `role="dialog"` + `aria-modal`, labelled by the title and described by the description.
- Focus moves into the layer when it opens and returns to the opener when it closes.
- Tab cycles inside the layer. If focus lands on the page behind it (mouse, screen-reader navigation, a programmatic `focus()`), it is pulled back.
- Escape closes only the topmost layer: an open select or menu inside a dialog closes first, the dialog on the next press.
- Background scrolling is locked while a modal layer is open.

Focus containment deliberately leaves alone: layers opened from the modal (popover, select, date picker), toasts, third-party widgets appended to `<body>`, other `aria-modal` dialogs, and anything marked `data-ui-focus-allow`.

### Floating layers — `ui-popover`, `ui-dropdown`, `ui-select`, pickers, `ui-context-menu`, `ui-menubar`

- **Select**: `listbox` / `option`, `aria-activedescendant`, arrows, Home/End, PageUp/PageDown, type-ahead.
- **Menus**: `menu` / `menuitem` / `menuitemcheckbox` / `menuitemradio`, submenus with `aria-haspopup` and `aria-expanded`, arrows, Home/End, type-ahead, Tab closes and returns focus.
- **Popover and dropdown triggers**: the `#trigger` slot exposes `triggerAttrs` (`aria-haspopup`, `aria-expanded`, `aria-controls`). Bind it to your trigger button:

```html
<ui-dropdown :items="items">
  <template #trigger="{ toggle, triggerAttrs }">
    <ui-button v-bind="triggerAttrs" @click="toggle">Seçenekler</ui-button>
  </template>
</ui-dropdown>
```

- **Tooltip**: `role="tooltip"`, linked to the trigger with `aria-describedby` while open (skipped when the tooltip text equals the trigger's accessible name, so it is not read twice), shown on hover and focus, dismissed with Escape.

### Composite widgets

| Component | Pattern |
| --- | --- |
| `ui-tabs` | `tablist` / `tab` / `tabpanel`, roving tabindex, arrows, Home/End |
| `ui-accordion` | header buttons with `aria-expanded` / `aria-controls`, `region` panels, arrows, Home/End |
| `ui-segment-group`, `ui-radio-group`, `ui-chip-group` | `radiogroup` / `radio` with roving tabindex |
| `ui-slider` (range) | one `slider` per thumb with min/max/now/text |
| `ui-resizable-handle` | `separator` with value attributes; arrows, Home/End, Enter to collapse |
| `ui-pagination`, `ui-breadcrumb` | `nav` landmark, `aria-current="page"` |
| `ui-date-picker` | labelled day buttons, roving tabindex, arrows by day/week, Home/End, PageUp/PageDown by month |
| `ui-chart` | `role="img"` with a label, a visually hidden data table, keyboard-readable values |

### Status messages

`ui-toast` announces through two live regions that exist before any toast is shown: `polite` for information, `assertive` for the `danger` tone. Toasts do not auto-dismiss while the pointer or keyboard focus is on them.

### Motion and direction

Animations are reduced or removed under `prefers-reduced-motion`. Right-to-left is covered in [Localization & RTL](./localization).

## What stays your job

- **Names.** Icon-only buttons need `aria-label`; popovers used as dialogs need `aria-label` on `ui-popover`; charts need `aria-label`.
- **Form labels.** Put every control in `ui-form-row`; it wires the label, description and error to the control.
- **Contrast of your theme.** Token helpers (`ensureContrastForMode`, `pickContrastForeground`) derive readable foregrounds, but a custom palette should still be checked.
- **Content order and headings** in your pages.

## Known gaps

- `ui-date-picker` exposes days as labelled buttons in a named group, not as an ARIA `grid`.
- Not yet verified with a real screen reader, or in Firefox and Safari.
- Bar and area charts distinguish series by colour and legend only; line charts also use dash patterns.
