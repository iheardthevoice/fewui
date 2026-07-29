import { w as m, a9 as g, Q as p, A as T, a as d, B as b, b as h, C as F, c as C, d as f, E as O, i as P, I as A, j as E, P as L, k as y, R as G, l as R, S as _, m as v, o as S, q as k, p as B, s as I } from "./index-RdtG325-.js";
import { F as Y, f as j, g as q, h as z, G as H, u as J, v as K, x as Q, y as V, z as X, H as $, J as Z, N as aa, O as sa, W as ea, X as oa, Y as ta, $ as la, a1 as ia, a4 as ra, a5 as na, a6 as ua, a7 as ca, aa as ma } from "./index-RdtG325-.js";
const w = {
  en: p,
  tr: g
}, D = [
  ["ui-action-group", T],
  ["ui-alert", d],
  ["ui-badge", b],
  ["ui-button", h],
  ["ui-card", F],
  ["ui-date-picker", C],
  ["ui-dialog", f],
  ["ui-empty", O],
  ["ui-form-row", P],
  ["ui-icon", A],
  ["ui-input", E],
  ["ui-phone", L],
  ["ui-popover", y],
  ["ui-radio", G],
  ["ui-radio-group", R],
  ["ui-select", _],
  ["ui-skeleton", v],
  ["ui-tab-list", S],
  ["ui-tabs", k],
  ["ui-tab-trigger", B],
  ["ui-toast", I]
];
function M(n, u = {}) {
  var l, i;
  const { i18n: a, locale: o, locales: c, theme: t } = u;
  if (t && m(t), (l = a == null ? void 0 : a.global) != null && l.mergeLocaleMessage) {
    const e = c ?? (o != null ? [o] : [
      typeof a.global.locale == "string" ? a.global.locale : ((i = a.global.locale) == null ? void 0 : i.value) ?? "tr"
    ]);
    for (const s of e) {
      const r = w[s];
      r && a.global.mergeLocaleMessage(s, r);
    }
  }
  for (const [e, s] of D)
    n.component(e, s);
}
const W = {
  install: M
};
export {
  Y as FEW_COLOR_SCALE,
  j as FEW_PALETTE_ID,
  q as FEW_PRIMARY,
  z as FEW_PRIMARY_FOREGROUND,
  H as GOOGLE_FONTS_CATALOG,
  J as applyGoogleFontsForTheme,
  K as applyThemeCustomCss,
  m as applyUiTheme,
  Q as buildGoogleFontsLinkTag,
  V as buildGoogleFontsStylesheetUrl,
  X as buildThemeStyleAttr,
  $ as clearThemeCustomCss,
  Z as clearToasts,
  W as default,
  aa as deriveBrandColorsFromPrimary,
  sa as dismissToast,
  ea as getFewPrimaryColors,
  oa as getThemePreset,
  ta as googleFontSelectOptions,
  la as mergeUiTheme,
  ia as pushToast,
  ra as resolvePrimaryColor,
  na as resolveThemeFontFamilies,
  ua as resolveThemePreset,
  ca as resolveThemeVars,
  ma as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
