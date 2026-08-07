import { H as c, ae as g, Y as p, A as d, a as T, b, B as F, c as h, C, d as L, e as f, E as A, j as O, I as P, k as y, L as E, l as G, P as S, m as v, R, n as _, S as I, o as U, p as k, q as B, s as M, u as w, t as D, w as N } from "./index-CfhXbiM6.js";
import { F as z, g as H, h as J, i as X, G as Q, y as Z, z as $, J as aa, K as ea, M as sa, N as oa, O as ta, U as ia, V as ra, W as la, X as ua, a0 as na, a1 as ma, a2 as ca, a3 as ga, a5 as pa, a6 as da, a9 as Ta, aa as ba, ab as Fa, ac as ha, af as Ca } from "./index-CfhXbiM6.js";
const W = {
  en: p,
  tr: g
}, Y = [
  ["ui-action-group", d],
  ["ui-alert", T],
  ["ui-avatar", b],
  ["ui-badge", F],
  ["ui-button", h],
  ["ui-card", C],
  ["ui-date-picker", L],
  ["ui-dialog", f],
  ["ui-empty", A],
  ["ui-form-row", O],
  ["ui-icon", P],
  ["ui-input", y],
  ["ui-list", E],
  ["ui-list-item", G],
  ["ui-phone", S],
  ["ui-popover", v],
  ["ui-radio", R],
  ["ui-radio-group", _],
  ["ui-segment", I],
  ["ui-segment-group", U],
  ["ui-select", k],
  ["ui-skeleton", B],
  ["ui-tab-list", M],
  ["ui-tabs", w],
  ["ui-tab-trigger", D],
  ["ui-toast", N]
];
function x(u, n = {}) {
  var i, r;
  const { i18n: a, locale: o, locales: m, theme: t } = n;
  if (t && c(t), (i = a == null ? void 0 : a.global) != null && i.mergeLocaleMessage) {
    const s = m ?? (o != null ? [o] : [
      typeof a.global.locale == "string" ? a.global.locale : ((r = a.global.locale) == null ? void 0 : r.value) ?? "tr"
    ]);
    for (const e of s) {
      const l = W[e];
      l && a.global.mergeLocaleMessage(e, l);
    }
  }
  for (const [s, e] of Y)
    u.component(s, e);
}
const V = {
  install: x
};
export {
  z as FEW_COLOR_SCALE,
  H as FEW_PALETTE_ID,
  J as FEW_PRIMARY,
  X as FEW_PRIMARY_FOREGROUND,
  Q as GOOGLE_FONTS_CATALOG,
  Z as applyGoogleFontsForTheme,
  $ as applyThemeCustomCss,
  c as applyUiTheme,
  aa as buildGoogleFontsLinkTag,
  ea as buildGoogleFontsStylesheetUrl,
  sa as buildThemeStyleAttr,
  oa as clearThemeCustomCss,
  ta as clearToasts,
  ia as createUiId,
  ra as createUiIdFactory,
  V as default,
  la as deriveBrandColorsFromPrimary,
  ua as dismissToast,
  na as getFewPrimaryColors,
  ma as getThemePreset,
  ca as googleFontSelectOptions,
  ga as mergeUiTheme,
  pa as pushToast,
  da as resetUiIds,
  Ta as resolvePrimaryColor,
  ba as resolveThemeFontFamilies,
  Fa as resolveThemePreset,
  ha as resolveThemeVars,
  Ca as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
