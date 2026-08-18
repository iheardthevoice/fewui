import { M as g, aj as c, a1 as p, A as d, a as T, b as F, B as b, c as h, C, d as f, e as L, g as P, E as y, k as A, I as E, l as G, L as O, m as v, P as S, n as R, o as _, R as I, p as k, S as w, q as U, r as B, s as D, u as M, w as N, v as W, y as Y } from "./index-Ba7Royof.js";
import { F as Q, h as Z, i as $, j as z, G as X, H as aa, J as ea, K as sa, N as oa, O as ta, Q as ia, U as ra, V as la, W as na, Y as ua, Z as ma, $ as ga, a0 as ca, a3 as pa, a5 as da, a6 as Ta, a7 as Fa, a8 as ba, aa as ha, ab as Ca, ae as fa, af as La, ag as Pa, ah as ya, ak as Aa } from "./index-Ba7Royof.js";
const j = {
  en: p,
  tr: c
}, x = [
  ["ui-action-group", d],
  ["ui-alert", T],
  ["ui-avatar", F],
  ["ui-badge", b],
  ["ui-button", h],
  ["ui-card", C],
  ["ui-date-picker", f],
  ["ui-dialog", L],
  ["ui-dropdown", P],
  ["ui-empty", y],
  ["ui-form-row", A],
  ["ui-icon", E],
  ["ui-input", G],
  ["ui-list", O],
  ["ui-list-item", v],
  ["ui-phone", S],
  ["ui-pin", R],
  ["ui-popover", _],
  ["ui-radio", I],
  ["ui-radio-group", k],
  ["ui-segment", w],
  ["ui-segment-group", U],
  ["ui-select", B],
  ["ui-skeleton", D],
  ["ui-tab-list", M],
  ["ui-tabs", N],
  ["ui-tab-trigger", W],
  ["ui-toast", Y]
];
function K(n, u = {}) {
  var i, r;
  const { i18n: a, locale: o, locales: m, theme: t } = u;
  if (t && g(t), (i = a == null ? void 0 : a.global) != null && i.mergeLocaleMessage) {
    const s = m ?? (o != null ? [o] : [
      typeof a.global.locale == "string" ? a.global.locale : ((r = a.global.locale) == null ? void 0 : r.value) ?? "tr"
    ]);
    for (const e of s) {
      const l = j[e];
      l && a.global.mergeLocaleMessage(e, l);
    }
  }
  for (const [s, e] of x)
    n.component(s, e);
}
const q = {
  install: K
};
export {
  Q as FEW_COLOR_SCALE,
  Z as FEW_PALETTE_ID,
  $ as FEW_PRIMARY,
  z as FEW_PRIMARY_FOREGROUND,
  X as GOOGLE_FONTS_CATALOG,
  aa as applyGoogleFontsCatalogPreview,
  ea as applyGoogleFontsForTheme,
  sa as applyThemeCustomCss,
  g as applyUiTheme,
  oa as buildGoogleFontsLinkTag,
  ta as buildGoogleFontsStylesheetUrl,
  ia as buildThemeEnforcementCss,
  ra as buildThemeStyleAttr,
  la as clearThemeCustomCss,
  na as clearToasts,
  ua as createUiId,
  ma as createUiIdFactory,
  q as default,
  ga as deriveBrandColorsFromPrimary,
  ca as dismissToast,
  pa as formatGoogleFontFamilyName,
  da as getFewPrimaryColors,
  Ta as getThemePreset,
  Fa as googleFontSelectOptions,
  ba as mergeUiTheme,
  ha as pushToast,
  Ca as resetUiIds,
  fa as resolvePrimaryColor,
  La as resolveThemeFontFamilies,
  Pa as resolveThemePreset,
  ya as resolveThemeVars,
  Aa as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
