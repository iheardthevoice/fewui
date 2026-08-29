import { O as c, am as g, a3 as p, A as d, a as T, b as h, B as F, c as C, C as f, d as b, e as L, f as P, h as y, E as A, l as E, I as G, m as O, L as S, n as v, P as R, o as _, p as w, R as I, q as k, S as U, r as D, s as B, t as M, u as N, w as W, y as x, x as Y, H as j } from "./index-D1d729cG.js";
import { F as z, i as J, j as Z, k as aa, G as sa, K as ea, M as oa, N as ta, Q as ia, U as ra, V as la, W as na, X as ua, Y as ma, $ as ca, a0 as ga, a1 as pa, a2 as da, a5 as Ta, a7 as ha, a8 as Fa, a9 as Ca, aa as fa, ac as ba, ad as La, ae as Pa, ah as ya, ai as Aa, aj as Ea, ak as Ga, an as Oa } from "./index-D1d729cG.js";
const q = {
  en: p,
  tr: g
}, K = [
  ["ui-action-group", d],
  ["ui-alert", T],
  ["ui-avatar", h],
  ["ui-badge", F],
  ["ui-button", C],
  ["ui-card", f],
  ["ui-confirm-dialog", b],
  ["ui-date-picker", L],
  ["ui-dialog", P],
  ["ui-dropdown", y],
  ["ui-empty", A],
  ["ui-form-row", E],
  ["ui-icon", G],
  ["ui-input", O],
  ["ui-list", S],
  ["ui-list-item", v],
  ["ui-phone", R],
  ["ui-pin", _],
  ["ui-popover", w],
  ["ui-radio", I],
  ["ui-radio-group", k],
  ["ui-segment", U],
  ["ui-segment-group", D],
  ["ui-select", B],
  ["ui-skeleton", M],
  ["ui-switch", N],
  ["ui-tab-list", W],
  ["ui-tabs", x],
  ["ui-tab-trigger", Y],
  ["ui-toast", j]
];
function V(n, u = {}) {
  var i, r;
  const { i18n: a, locale: o, locales: m, theme: t } = u;
  if (t && c(t), (i = a == null ? void 0 : a.global) != null && i.mergeLocaleMessage) {
    const e = m ?? (o != null ? [o] : [
      typeof a.global.locale == "string" ? a.global.locale : ((r = a.global.locale) == null ? void 0 : r.value) ?? "tr"
    ]);
    for (const s of e) {
      const l = q[s];
      l && a.global.mergeLocaleMessage(s, l);
    }
  }
  for (const [e, s] of K)
    n.component(e, s);
}
const Q = {
  install: V
};
export {
  z as FEW_COLOR_SCALE,
  J as FEW_PALETTE_ID,
  Z as FEW_PRIMARY,
  aa as FEW_PRIMARY_FOREGROUND,
  sa as GOOGLE_FONTS_CATALOG,
  ea as applyGoogleFontsCatalogPreview,
  oa as applyGoogleFontsForTheme,
  ta as applyThemeCustomCss,
  c as applyUiTheme,
  ia as buildGoogleFontsLinkTag,
  ra as buildGoogleFontsStylesheetUrl,
  la as buildThemeEnforcementCss,
  na as buildThemeStyleAttr,
  ua as clearThemeCustomCss,
  ma as clearToasts,
  ca as createUiId,
  ga as createUiIdFactory,
  Q as default,
  pa as deriveBrandColorsFromPrimary,
  da as dismissToast,
  Ta as formatGoogleFontFamilyName,
  ha as getFewPrimaryColors,
  Fa as getThemePreset,
  Ca as googleFontSelectOptions,
  fa as mergeUiTheme,
  ba as pushToast,
  La as requestConfirm,
  Pa as resetUiIds,
  ya as resolvePrimaryColor,
  Aa as resolveThemeFontFamilies,
  Ea as resolveThemePreset,
  Ga as resolveThemeVars,
  Oa as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
