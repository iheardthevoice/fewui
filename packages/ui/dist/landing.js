import { aB as p, Y as u, al as d, aH as T, a9 as f, A as h, a as E, b as C, c as F, d as b, C as A, e as P, f as v, g as L, i as S, E as y, m as _, I as U, n as G, o as O, p as D, P as I, q as R, r as k, R as w, s as B, S as M, t as N, u as K, v as W, w as H, H as Y, K as q, J as x, N as j } from "./index-Dl8ewdAT.js";
import { B as aa, F as ea, j as sa, k as oa, l as ta, G as ia, T as ra, x as la, U as na, V as ua, W as ma, X as ga, Z as ca, $ as pa, a0 as da, a1 as Ta, a2 as fa, a3 as ha, a5 as Ea, a6 as Ca, a7 as Fa, a8 as ba, ab as Aa, ad as Pa, ae as va, af as La, ag as Sa, ah as ya, ak as _a, an as Ua, ao as Ga, ap as Oa, aq as Da, at as Ia, ay as Ra, aA as ka, aC as wa, aE as Ba, aJ as Ma, aK as Na, aL as Ka } from "./index-Dl8ewdAT.js";
const J = {
  en: f,
  tr: T
}, V = [
  ["ui-action-group", h],
  ["ui-alert", E],
  ["ui-avatar", C],
  ["ui-badge", F],
  ["ui-button", b],
  ["ui-card", A],
  ["ui-confirm-dialog", P],
  ["ui-date-picker", v],
  ["ui-dialog", L],
  ["ui-dropdown", S],
  ["ui-empty", y],
  ["ui-form-row", _],
  ["ui-icon", U],
  ["ui-input", G],
  ["ui-list", O],
  ["ui-list-item", D],
  ["ui-phone", I],
  ["ui-pin", R],
  ["ui-popover", k],
  ["ui-radio", w],
  ["ui-radio-group", B],
  ["ui-segment", M],
  ["ui-segment-group", N],
  ["ui-select", K],
  ["ui-skeleton", W],
  ["ui-switch", H],
  ["ui-tab-list", Y],
  ["ui-tabs", q],
  ["ui-tab-trigger", x],
  ["ui-toast", j]
];
function X(m, g = {}) {
  var r, l;
  const { i18n: a, locale: i, locales: c, theme: s, themeOverrides: t } = g;
  if (typeof s == "string") {
    const e = p(s, t || {});
    u(e.config);
  } else if (s && typeof s == "object") {
    const e = t ? d(s, t) : s;
    u(e);
  }
  if ((r = a == null ? void 0 : a.global) != null && r.mergeLocaleMessage) {
    const e = c ?? (i != null ? [i] : [
      typeof a.global.locale == "string" ? a.global.locale : ((l = a.global.locale) == null ? void 0 : l.value) ?? "tr"
    ]);
    for (const o of e) {
      const n = J[o];
      n && a.global.mergeLocaleMessage(o, n);
    }
  }
  for (const [e, o] of V)
    m.component(e, o);
}
const $ = {
  install: X
};
export {
  aa as BASE_UI_DEFAULTS,
  ea as FEW_COLOR_SCALE,
  sa as FEW_PALETTE_ID,
  oa as FEW_PRIMARY,
  ta as FEW_PRIMARY_FOREGROUND,
  ia as GOOGLE_FONTS_CATALOG,
  ra as THEME_IDS,
  la as THEME_PACKAGES,
  na as UI_DEFAULTS_KEY,
  ua as applyGoogleFontsCatalogPreview,
  ma as applyGoogleFontsForTheme,
  ga as applyThemeCustomCss,
  u as applyUiTheme,
  ca as buildGoogleFontsLinkTag,
  pa as buildGoogleFontsStylesheetUrl,
  da as buildThemeEnforcementCss,
  Ta as buildThemeStyleAttr,
  fa as clearThemeCustomCss,
  ha as clearToasts,
  Ea as createUiId,
  Ca as createUiIdFactory,
  $ as default,
  Fa as deriveBrandColorsFromPrimary,
  ba as dismissToast,
  Aa as formatGoogleFontFamilyName,
  Pa as getFewPrimaryColors,
  va as getThemeCssPath,
  La as getThemePackage,
  Sa as getThemePreset,
  ya as googleFontSelectOptions,
  _a as mergeUiDefaults,
  d as mergeUiTheme,
  Ua as provideUiDefaults,
  Ga as pushToast,
  Oa as requestConfirm,
  Da as resetUiIds,
  Ia as resolvePrimaryColor,
  Ra as resolveThemeFontFamilies,
  ka as resolveThemeId,
  p as resolveThemePackage,
  wa as resolveThemePreset,
  Ba as resolveThemeVars,
  Ma as useUiDefaults,
  Na as useUiDefaultsOptions,
  Ka as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
