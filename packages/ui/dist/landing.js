import { w as m, aa as g, Q as p, A as d, a as T, B as b, b as F, C as h, c as C, d as f, E as L, i as O, I as P, j as y, P as A, k as E, R as G, l as R, S as _, m as v, o as S, q as I, p as k, s as U } from "./index-TOS2HRHn.js";
import { F as Y, f as j, g as q, h as z, G as H, u as J, v as K, x as Q, y as V, z as X, H as $, J as Z, L as aa, M as ea, N as sa, O as oa, W as ta, X as ia, Y as la, $ as ra, a1 as na, a2 as ua, a5 as ca, a6 as ma, a7 as ga, a8 as pa, ab as da } from "./index-TOS2HRHn.js";
const B = {
  en: p,
  tr: g
}, M = [
  ["ui-action-group", d],
  ["ui-alert", T],
  ["ui-badge", b],
  ["ui-button", F],
  ["ui-card", h],
  ["ui-date-picker", C],
  ["ui-dialog", f],
  ["ui-empty", L],
  ["ui-form-row", O],
  ["ui-icon", P],
  ["ui-input", y],
  ["ui-phone", A],
  ["ui-popover", E],
  ["ui-radio", G],
  ["ui-radio-group", R],
  ["ui-select", _],
  ["ui-skeleton", v],
  ["ui-tab-list", S],
  ["ui-tabs", I],
  ["ui-tab-trigger", k],
  ["ui-toast", U]
];
function w(n, u = {}) {
  var i, l;
  const { i18n: a, locale: o, locales: c, theme: t } = u;
  if (t && m(t), (i = a == null ? void 0 : a.global) != null && i.mergeLocaleMessage) {
    const s = c ?? (o != null ? [o] : [
      typeof a.global.locale == "string" ? a.global.locale : ((l = a.global.locale) == null ? void 0 : l.value) ?? "tr"
    ]);
    for (const e of s) {
      const r = B[e];
      r && a.global.mergeLocaleMessage(e, r);
    }
  }
  for (const [s, e] of M)
    n.component(s, e);
}
const N = {
  install: w
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
  aa as createUiId,
  ea as createUiIdFactory,
  N as default,
  sa as deriveBrandColorsFromPrimary,
  oa as dismissToast,
  ta as getFewPrimaryColors,
  ia as getThemePreset,
  la as googleFontSelectOptions,
  ra as mergeUiTheme,
  na as pushToast,
  ua as resetUiIds,
  ca as resolvePrimaryColor,
  ma as resolveThemeFontFamilies,
  ga as resolveThemePreset,
  pa as resolveThemeVars,
  da as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
