import { K as c, ag as g, $ as p, A as d, a as T, b, B as h, c as F, C, d as L, e as P, g as A, E as O, k as f, I as y, l as E, L as v, m as G, P as S, n as R, o as _, R as I, p as U, S as k, q as w, r as B, s as D, u as M, w as N, v as W, y as Y } from "./index-CCaFs7xx.js";
import { F as V, h as X, i as Z, j as $, G as z, H as aa, J as sa, M as ea, N as oa, O as ta, Q as ia, U as ra, W as la, X as na, Y as ua, Z as ma, a2 as ca, a3 as ga, a4 as pa, a5 as da, a7 as Ta, a8 as ba, ab as ha, ac as Fa, ad as Ca, ae as La, ah as Pa } from "./index-CCaFs7xx.js";
const x = {
  en: p,
  tr: g
}, K = [
  ["ui-action-group", d],
  ["ui-alert", T],
  ["ui-avatar", b],
  ["ui-badge", h],
  ["ui-button", F],
  ["ui-card", C],
  ["ui-date-picker", L],
  ["ui-dialog", P],
  ["ui-dropdown", A],
  ["ui-empty", O],
  ["ui-form-row", f],
  ["ui-icon", y],
  ["ui-input", E],
  ["ui-list", v],
  ["ui-list-item", G],
  ["ui-phone", S],
  ["ui-pin", R],
  ["ui-popover", _],
  ["ui-radio", I],
  ["ui-radio-group", U],
  ["ui-segment", k],
  ["ui-segment-group", w],
  ["ui-select", B],
  ["ui-skeleton", D],
  ["ui-tab-list", M],
  ["ui-tabs", N],
  ["ui-tab-trigger", W],
  ["ui-toast", Y]
];
function j(n, u = {}) {
  var i, r;
  const { i18n: a, locale: o, locales: m, theme: t } = u;
  if (t && c(t), (i = a == null ? void 0 : a.global) != null && i.mergeLocaleMessage) {
    const e = m ?? (o != null ? [o] : [
      typeof a.global.locale == "string" ? a.global.locale : ((r = a.global.locale) == null ? void 0 : r.value) ?? "tr"
    ]);
    for (const s of e) {
      const l = x[s];
      l && a.global.mergeLocaleMessage(s, l);
    }
  }
  for (const [e, s] of K)
    n.component(e, s);
}
const H = {
  install: j
};
export {
  V as FEW_COLOR_SCALE,
  X as FEW_PALETTE_ID,
  Z as FEW_PRIMARY,
  $ as FEW_PRIMARY_FOREGROUND,
  z as GOOGLE_FONTS_CATALOG,
  aa as applyGoogleFontsForTheme,
  sa as applyThemeCustomCss,
  c as applyUiTheme,
  ea as buildGoogleFontsLinkTag,
  oa as buildGoogleFontsStylesheetUrl,
  ta as buildThemeStyleAttr,
  ia as clearThemeCustomCss,
  ra as clearToasts,
  la as createUiId,
  na as createUiIdFactory,
  H as default,
  ua as deriveBrandColorsFromPrimary,
  ma as dismissToast,
  ca as getFewPrimaryColors,
  ga as getThemePreset,
  pa as googleFontSelectOptions,
  da as mergeUiTheme,
  Ta as pushToast,
  ba as resetUiIds,
  ha as resolvePrimaryColor,
  Fa as resolveThemeFontFamilies,
  Ca as resolveThemePreset,
  La as resolveThemeVars,
  Pa as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
