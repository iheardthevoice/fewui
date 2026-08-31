import { aB as p, Y as m, al as d, aH as T, a9 as h, A as f, a as C, b as F, c as b, d as E, C as P, e as v, f as y, g as A, i as L, E as G, m as S, I as O, n as _, o as I, p as R, P as w, q as k, r as D, R as M, s as U, S as B, t as N, u as W, v as H, w as q, H as x, K, J as Y, N as j } from "./index-BVvp-vC_.js";
import { F as aa, j as ea, k as sa, l as oa, G as ta, T as ia, x as ra, V as la, W as na, X as ma, Z as ua, $ as ga, a0 as ca, a1 as pa, a2 as da, a3 as Ta, a5 as ha, a6 as fa, a7 as Ca, a8 as Fa, ab as ba, ad as Ea, ae as Pa, af as va, ag as ya, ah as Aa, ao as La, ap as Ga, aq as Sa, at as Oa, ay as _a, aA as Ia, aC as Ra, aE as wa, aL as ka } from "./index-BVvp-vC_.js";
const V = {
  en: h,
  tr: T
}, J = [
  ["ui-action-group", f],
  ["ui-alert", C],
  ["ui-avatar", F],
  ["ui-badge", b],
  ["ui-button", E],
  ["ui-card", P],
  ["ui-confirm-dialog", v],
  ["ui-date-picker", y],
  ["ui-dialog", A],
  ["ui-dropdown", L],
  ["ui-empty", G],
  ["ui-form-row", S],
  ["ui-icon", O],
  ["ui-input", _],
  ["ui-list", I],
  ["ui-list-item", R],
  ["ui-phone", w],
  ["ui-pin", k],
  ["ui-popover", D],
  ["ui-radio", M],
  ["ui-radio-group", U],
  ["ui-segment", B],
  ["ui-segment-group", N],
  ["ui-select", W],
  ["ui-skeleton", H],
  ["ui-switch", q],
  ["ui-tab-list", x],
  ["ui-tabs", K],
  ["ui-tab-trigger", Y],
  ["ui-toast", j]
];
function X(u, g = {}) {
  var r, l;
  const { i18n: a, locale: i, locales: c, theme: s, themeOverrides: t } = g;
  if (typeof s == "string") {
    const e = p(s, t || {});
    m(e.config);
  } else if (s && typeof s == "object") {
    const e = t ? d(s, t) : s;
    m(e);
  }
  if ((r = a == null ? void 0 : a.global) != null && r.mergeLocaleMessage) {
    const e = c ?? (i != null ? [i] : [
      typeof a.global.locale == "string" ? a.global.locale : ((l = a.global.locale) == null ? void 0 : l.value) ?? "tr"
    ]);
    for (const o of e) {
      const n = V[o];
      n && a.global.mergeLocaleMessage(o, n);
    }
  }
  for (const [e, o] of J)
    u.component(e, o);
}
const $ = {
  install: X
};
export {
  aa as FEW_COLOR_SCALE,
  ea as FEW_PALETTE_ID,
  sa as FEW_PRIMARY,
  oa as FEW_PRIMARY_FOREGROUND,
  ta as GOOGLE_FONTS_CATALOG,
  ia as THEME_IDS,
  ra as THEME_PACKAGES,
  la as applyGoogleFontsCatalogPreview,
  na as applyGoogleFontsForTheme,
  ma as applyThemeCustomCss,
  m as applyUiTheme,
  ua as buildGoogleFontsLinkTag,
  ga as buildGoogleFontsStylesheetUrl,
  ca as buildThemeEnforcementCss,
  pa as buildThemeStyleAttr,
  da as clearThemeCustomCss,
  Ta as clearToasts,
  ha as createUiId,
  fa as createUiIdFactory,
  $ as default,
  Ca as deriveBrandColorsFromPrimary,
  Fa as dismissToast,
  ba as formatGoogleFontFamilyName,
  Ea as getFewPrimaryColors,
  Pa as getThemeCssPath,
  va as getThemePackage,
  ya as getThemePreset,
  Aa as googleFontSelectOptions,
  d as mergeUiTheme,
  La as pushToast,
  Ga as requestConfirm,
  Sa as resetUiIds,
  Oa as resolvePrimaryColor,
  _a as resolveThemeFontFamilies,
  Ia as resolveThemeId,
  p as resolveThemePackage,
  Ra as resolveThemePreset,
  wa as resolveThemeVars,
  ka as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
