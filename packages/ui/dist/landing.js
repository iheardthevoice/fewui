import { s as m, a0 as g, L as p, A as T, a as d, B as b, b as h, C as f, c as C, d as F, E as L, F as v, I as y, f as G, P as O, g as P, R as A, h as S, S as k, i as B, k as E, m as w, l as M, o as N } from "./index-DZlWBF9X.js";
import { G as q, q as J, r as V, t as W, u as X, v as Y, w as Z, x as j, J as z, K as H, M as Q, N as $, O as aa, U as ea, W as oa, X as sa, Y as ta, Z as la, a1 as ia } from "./index-DZlWBF9X.js";
const R = {
  en: p,
  tr: g
}, U = [
  ["ui-action-group", T],
  ["ui-alert", d],
  ["ui-badge", b],
  ["ui-button", h],
  ["ui-card", f],
  ["ui-date-picker", C],
  ["ui-dialog", F],
  ["ui-empty", L],
  ["ui-form-row", v],
  ["ui-icon", y],
  ["ui-input", G],
  ["ui-phone", O],
  ["ui-popover", P],
  ["ui-radio", A],
  ["ui-radio-group", S],
  ["ui-select", k],
  ["ui-skeleton", B],
  ["ui-tab-list", E],
  ["ui-tabs", w],
  ["ui-tab-trigger", M],
  ["ui-toast", N]
];
function _(n, u = {}) {
  var l, i;
  const { i18n: a, locale: s, locales: c, theme: t } = u;
  if (t && m(t), (l = a == null ? void 0 : a.global) != null && l.mergeLocaleMessage) {
    const o = c ?? (s != null ? [s] : [
      typeof a.global.locale == "string" ? a.global.locale : ((i = a.global.locale) == null ? void 0 : i.value) ?? "tr"
    ]);
    for (const e of o) {
      const r = R[e];
      r && a.global.mergeLocaleMessage(e, r);
    }
  }
  for (const [o, e] of U)
    n.component(o, e);
}
const D = {
  install: _
};
export {
  q as GOOGLE_FONTS_CATALOG,
  J as applyGoogleFontsForTheme,
  V as applyThemeCustomCss,
  m as applyUiTheme,
  W as buildGoogleFontsLinkTag,
  X as buildGoogleFontsStylesheetUrl,
  Y as buildThemeStyleAttr,
  Z as clearThemeCustomCss,
  j as clearToasts,
  D as default,
  z as deriveBrandColorsFromPrimary,
  H as dismissToast,
  Q as getThemePreset,
  $ as googleFontSelectOptions,
  aa as mergeUiTheme,
  ea as pushToast,
  oa as resolvePrimaryColor,
  sa as resolveThemeFontFamilies,
  ta as resolveThemePreset,
  la as resolveThemeVars,
  ia as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
