import { aP as p, aE as h, a2 as f, b1 as F, ai as b, A as C, a as E, b as L, d as _, e as A, f as U, g as D, j as S, k as O, m as P, E as y, q as G, I as v, r as I, L as k, s as R, P as w, u as M, v as x, R as B, w as N, x as W, y as Y, z as q, H, J as K, N as V, Q as j, O as z, V as X } from "./custom-css-Bo-efet4.js";
import { c as oa, h as ta, F as ia, n as ra, o as la, p as na, G as ua, T as ma, X as ga, $ as ca, a0 as da, a1 as Ta, a3 as pa, a4 as ha, a6 as fa, a7 as Fa, a8 as ba, a9 as Ca, aa as Ea, ac as La, ad as _a, ae as Aa, af as Ua, ag as Da, ah as Sa, aj as Oa, ak as Pa, al as ya, an as Ga, ao as va, aq as Ia, ar as ka, as as Ra, at as wa, ax as Ma, ay as xa, az as Ba, aC as Na, aG as Wa, aH as Ya, aK as qa, aL as Ha, aS as Ka, aU as Va, aW as ja, aX as za, aY as Xa, aZ as Ja, b0 as Qa, b2 as Za, b4 as $a, b5 as ae, b6 as ee } from "./custom-css-Bo-efet4.js";
const J = {
  en: b,
  tr: F
}, Q = [
  ["ui-action-group", C],
  ["ui-alert", E],
  ["ui-avatar", L],
  ["ui-badge", _],
  ["ui-button", A],
  ["ui-card", U],
  ["ui-confirm-dialog", D],
  ["ui-date-picker", S],
  ["ui-dialog", O],
  ["ui-dropdown", P],
  ["ui-empty", y],
  ["ui-form-row", G],
  ["ui-icon", v],
  ["ui-input", I],
  ["ui-list", k],
  ["ui-list-item", R],
  ["ui-phone", w],
  ["ui-pin", M],
  ["ui-popover", x],
  ["ui-radio", B],
  ["ui-radio-group", N],
  ["ui-segment", W],
  ["ui-segment-group", Y],
  ["ui-select", q],
  ["ui-skeleton", H],
  ["ui-switch", K],
  ["ui-tab-list", V],
  ["ui-tabs", j],
  ["ui-tab-trigger", z],
  ["ui-toast", X]
];
function Z(t, m = {}) {
  var l, n;
  const { i18n: a, locale: i, locales: g, theme: r, mode: c, overrides: d, inline: T } = m, e = r ? p(r) : null;
  if (h(t, e == null ? void 0 : e.defaults), e && f(e, { mode: c, overrides: d, inline: T }), (l = a == null ? void 0 : a.global) != null && l.mergeLocaleMessage) {
    const o = g ?? (i != null ? [i] : [
      typeof a.global.locale == "string" ? a.global.locale : ((n = a.global.locale) == null ? void 0 : n.value) ?? "tr"
    ]);
    for (const s of o) {
      const u = J[s];
      u && a.global.mergeLocaleMessage(s, u);
    }
  }
  for (const [o, s] of Q)
    t.component(o, s);
}
const aa = {
  install: Z
};
export {
  oa as BASE_UI_DEFAULTS,
  ta as DEFAULT_THEME_ID,
  ia as FEW_COLOR_SCALE,
  ra as FEW_PALETTE_ID,
  la as FEW_PRIMARY,
  na as FEW_PRIMARY_FOREGROUND,
  ua as GOOGLE_FONTS_CATALOG,
  ma as TOAST_GROUP_WINDOW_MS,
  ga as UI_DEFAULTS_KEY,
  ca as applyGoogleFontsCatalogPreview,
  da as applyGoogleFontsForTheme,
  Ta as applyThemeCustomCss,
  f as applyUiTheme,
  pa as buildGoogleFontsLinkTag,
  ha as buildGoogleFontsStylesheetUrl,
  fa as buildThemeEnforcementCss,
  Fa as buildThemeStyleAttr,
  ba as clearThemeCustomCss,
  Ca as clearToasts,
  Ea as clearUiTheme,
  La as computeThemeVars,
  _a as createUiId,
  Aa as createUiIdFactory,
  aa as default,
  Ua as defineTheme,
  Da as deriveBrandColorsFromPrimary,
  Sa as dismissToast,
  Oa as ensureContrastForMode,
  Pa as expandTokens,
  ya as extendTheme,
  Ga as formatFontFamily,
  va as formatGoogleFontFamilyName,
  Ia as getFewPrimaryColors,
  ka as getThemeCssPath,
  Ra as getThemePackage,
  wa as googleFontSelectOptions,
  Ma as listThemes,
  xa as mergeTokens,
  Ba as mergeUiDefaults,
  Na as pickContrastForeground,
  h as provideUiDefaults,
  Wa as pushToast,
  Ya as registerTheme,
  qa as requestConfirm,
  Ha as resetUiIds,
  p as resolveTheme,
  Ka as resolveThemeFontFamilies,
  Va as resolveThemeVars,
  ja as setToastExpanded,
  za as setUiDefaults,
  Xa as setUiThemeMode,
  Ja as themeConfigToTokens,
  Qa as toggleToastExpanded,
  Za as uiDefaultsMixin,
  $a as useUiDefaults,
  ae as withDerivedBrandTokens,
  ee as withDerivedConfigBrandColors
};
//# sourceMappingURL=landing.js.map
