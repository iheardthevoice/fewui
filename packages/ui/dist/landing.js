import { N as g, al as c, a2 as p, A as d, a as T, b as F, B as C, c as b, C as f, d as h, e as L, f as P, h as y, E as A, l as E, I as G, m as O, L as v, n as S, P as R, o as _, p as I, R as w, q as U, S as k, r as D, s as B, t as M, v as N, x as W, w as x, z as j } from "./index-BSgBTzND.js";
import { F as X, i as Z, j as $, k as H, G as aa, J as ea, K as sa, M as oa, O as ta, Q as ia, U as ra, V as la, W as na, X as ua, Z as ma, $ as ga, a0 as ca, a1 as pa, a4 as da, a6 as Ta, a7 as Fa, a8 as Ca, a9 as ba, ab as fa, ac as ha, ad as La, ag as Pa, ah as ya, ai as Aa, aj as Ea, am as Ga } from "./index-BSgBTzND.js";
const q = {
  en: p,
  tr: c
}, K = [
  ["ui-action-group", d],
  ["ui-alert", T],
  ["ui-avatar", F],
  ["ui-badge", C],
  ["ui-button", b],
  ["ui-card", f],
  ["ui-confirm-dialog", h],
  ["ui-date-picker", L],
  ["ui-dialog", P],
  ["ui-dropdown", y],
  ["ui-empty", A],
  ["ui-form-row", E],
  ["ui-icon", G],
  ["ui-input", O],
  ["ui-list", v],
  ["ui-list-item", S],
  ["ui-phone", R],
  ["ui-pin", _],
  ["ui-popover", I],
  ["ui-radio", w],
  ["ui-radio-group", U],
  ["ui-segment", k],
  ["ui-segment-group", D],
  ["ui-select", B],
  ["ui-skeleton", M],
  ["ui-tab-list", N],
  ["ui-tabs", W],
  ["ui-tab-trigger", x],
  ["ui-toast", j]
];
function V(n, u = {}) {
  var i, r;
  const { i18n: a, locale: o, locales: m, theme: t } = u;
  if (t && g(t), (i = a == null ? void 0 : a.global) != null && i.mergeLocaleMessage) {
    const s = m ?? (o != null ? [o] : [
      typeof a.global.locale == "string" ? a.global.locale : ((r = a.global.locale) == null ? void 0 : r.value) ?? "tr"
    ]);
    for (const e of s) {
      const l = q[e];
      l && a.global.mergeLocaleMessage(e, l);
    }
  }
  for (const [s, e] of K)
    n.component(s, e);
}
const z = {
  install: V
};
export {
  X as FEW_COLOR_SCALE,
  Z as FEW_PALETTE_ID,
  $ as FEW_PRIMARY,
  H as FEW_PRIMARY_FOREGROUND,
  aa as GOOGLE_FONTS_CATALOG,
  ea as applyGoogleFontsCatalogPreview,
  sa as applyGoogleFontsForTheme,
  oa as applyThemeCustomCss,
  g as applyUiTheme,
  ta as buildGoogleFontsLinkTag,
  ia as buildGoogleFontsStylesheetUrl,
  ra as buildThemeEnforcementCss,
  la as buildThemeStyleAttr,
  na as clearThemeCustomCss,
  ua as clearToasts,
  ma as createUiId,
  ga as createUiIdFactory,
  z as default,
  ca as deriveBrandColorsFromPrimary,
  pa as dismissToast,
  da as formatGoogleFontFamilyName,
  Ta as getFewPrimaryColors,
  Fa as getThemePreset,
  Ca as googleFontSelectOptions,
  ba as mergeUiTheme,
  fa as pushToast,
  ha as requestConfirm,
  La as resetUiIds,
  Pa as resolvePrimaryColor,
  ya as resolveThemeFontFamilies,
  Aa as resolveThemePreset,
  Ea as resolveThemeVars,
  Ga as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
