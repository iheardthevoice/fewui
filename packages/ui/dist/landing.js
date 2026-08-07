import { y as m, ad as g, W as p, A as d, a as T, b, B as F, c as h, C, d as L, e as A, E as O, j as P, I as f, k as y, L as E, l as v, P as G, m as R, R as _, n as I, S, o as U, q as k, s as B, r as M, u as w } from "./index-M4oSugpb.js";
import { F as j, g as q, h as z, i as H, G as J, w as Q, x as Z, z as $, H as X, J as aa, K as sa, M as ea, O as oa, Q as ta, U as ia, V as la, Z as ra, $ as ua, a0 as na, a2 as ca, a4 as ma, a5 as ga, a8 as pa, a9 as da, aa as Ta, ab as ba, ae as Fa } from "./index-M4oSugpb.js";
const D = {
  en: p,
  tr: g
}, W = [
  ["ui-action-group", d],
  ["ui-alert", T],
  ["ui-avatar", b],
  ["ui-badge", F],
  ["ui-button", h],
  ["ui-card", C],
  ["ui-date-picker", L],
  ["ui-dialog", A],
  ["ui-empty", O],
  ["ui-form-row", P],
  ["ui-icon", f],
  ["ui-input", y],
  ["ui-list", E],
  ["ui-list-item", v],
  ["ui-phone", G],
  ["ui-popover", R],
  ["ui-radio", _],
  ["ui-radio-group", I],
  ["ui-select", S],
  ["ui-skeleton", U],
  ["ui-tab-list", k],
  ["ui-tabs", B],
  ["ui-tab-trigger", M],
  ["ui-toast", w]
];
function N(u, n = {}) {
  var i, l;
  const { i18n: a, locale: o, locales: c, theme: t } = n;
  if (t && m(t), (i = a == null ? void 0 : a.global) != null && i.mergeLocaleMessage) {
    const e = c ?? (o != null ? [o] : [
      typeof a.global.locale == "string" ? a.global.locale : ((l = a.global.locale) == null ? void 0 : l.value) ?? "tr"
    ]);
    for (const s of e) {
      const r = D[s];
      r && a.global.mergeLocaleMessage(s, r);
    }
  }
  for (const [e, s] of W)
    u.component(e, s);
}
const K = {
  install: N
};
export {
  j as FEW_COLOR_SCALE,
  q as FEW_PALETTE_ID,
  z as FEW_PRIMARY,
  H as FEW_PRIMARY_FOREGROUND,
  J as GOOGLE_FONTS_CATALOG,
  Q as applyGoogleFontsForTheme,
  Z as applyThemeCustomCss,
  m as applyUiTheme,
  $ as buildGoogleFontsLinkTag,
  X as buildGoogleFontsStylesheetUrl,
  aa as buildThemeStyleAttr,
  sa as clearThemeCustomCss,
  ea as clearToasts,
  oa as createUiId,
  ta as createUiIdFactory,
  K as default,
  ia as deriveBrandColorsFromPrimary,
  la as dismissToast,
  ra as getFewPrimaryColors,
  ua as getThemePreset,
  na as googleFontSelectOptions,
  ca as mergeUiTheme,
  ma as pushToast,
  ga as resetUiIds,
  pa as resolvePrimaryColor,
  da as resolveThemeFontFamilies,
  Ta as resolveThemePreset,
  ba as resolveThemeVars,
  Fa as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
