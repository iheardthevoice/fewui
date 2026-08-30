import { aA as p, Y as m, ak as d, aG as T, a9 as h, A as f, a as C, b as F, c as b, d as P, C as E, e as v, f as A, g as y, i as G, E as L, m as S, I as O, n as _, o as I, p as R, P as k, q as w, r as D, R as M, s as U, S as B, t as N, u as W, v as x, w as K, H, K as Y, J as j, N as q } from "./index-D9bCwCpk.js";
import { F as aa, j as ea, k as sa, l as oa, G as ta, T as ia, x as ra, V as la, W as na, X as ma, Z as ua, $ as ga, a0 as ca, a1 as pa, a2 as da, a3 as Ta, a5 as ha, a6 as fa, a7 as Ca, a8 as Fa, ab as ba, ad as Pa, ae as Ea, af as va, ag as Aa, ah as ya, an as Ga, ao as La, ap as Sa, as as Oa, ax as _a, az as Ia, aB as Ra, aD as ka, aK as wa } from "./index-D9bCwCpk.js";
const V = {
  en: h,
  tr: T
}, z = [
  ["ui-action-group", f],
  ["ui-alert", C],
  ["ui-avatar", F],
  ["ui-badge", b],
  ["ui-button", P],
  ["ui-card", E],
  ["ui-confirm-dialog", v],
  ["ui-date-picker", A],
  ["ui-dialog", y],
  ["ui-dropdown", G],
  ["ui-empty", L],
  ["ui-form-row", S],
  ["ui-icon", O],
  ["ui-input", _],
  ["ui-list", I],
  ["ui-list-item", R],
  ["ui-phone", k],
  ["ui-pin", w],
  ["ui-popover", D],
  ["ui-radio", M],
  ["ui-radio-group", U],
  ["ui-segment", B],
  ["ui-segment-group", N],
  ["ui-select", W],
  ["ui-skeleton", x],
  ["ui-switch", K],
  ["ui-tab-list", H],
  ["ui-tabs", Y],
  ["ui-tab-trigger", j],
  ["ui-toast", q]
];
function J(u, g = {}) {
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
  for (const [e, o] of z)
    u.component(e, o);
}
const Z = {
  install: J
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
  Z as default,
  Ca as deriveBrandColorsFromPrimary,
  Fa as dismissToast,
  ba as formatGoogleFontFamilyName,
  Pa as getFewPrimaryColors,
  Ea as getThemeCssPath,
  va as getThemePackage,
  Aa as getThemePreset,
  ya as googleFontSelectOptions,
  d as mergeUiTheme,
  Ga as pushToast,
  La as requestConfirm,
  Sa as resetUiIds,
  Oa as resolvePrimaryColor,
  _a as resolveThemeFontFamilies,
  Ia as resolveThemeId,
  p as resolveThemePackage,
  Ra as resolveThemePreset,
  ka as resolveThemeVars,
  wa as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
