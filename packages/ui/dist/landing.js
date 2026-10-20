import { aS as p, aG as h, a3 as f, b4 as F, aj as b, A as E, a as C, b as _, d as A, e as L, f as D, g as O, j as S, k as U, m as y, E as G, q as P, I as v, r as I, L as k, s as R, P as w, u as M, v as x, R as N, w as B, x as W, y as V, z as K, H as Y, J as j, N as q, Q as z, O as H, V as X } from "./custom-css-CK1z0mOT.js";
import { c as oa, h as ta, F as ia, n as ra, o as la, p as na, G as ua, T as ma, X as ga, a0 as da, a1 as Ta, a2 as ca, a4 as pa, a5 as ha, a7 as fa, a8 as Fa, a9 as ba, aa as Ea, ab as Ca, ad as _a, ae as Aa, af as La, ag as Da, ah as Oa, ai as Sa, ak as Ua, al as ya, am as Ga, ao as Pa, ap as va, ar as Ia, as as ka, at as Ra, au as wa, ay as Ma, az as xa, aA as Na, aE as Ba, aI as Wa, aK as Va, aN as Ka, aO as Ya, aV as ja, aX as qa, aZ as za, a_ as Ha, a$ as Xa, b0 as Ja, b3 as Qa, b5 as Za, b7 as $a, b9 as ae, ba as ee } from "./custom-css-CK1z0mOT.js";
const J = {
  en: b,
  tr: F
}, Q = [
  ["ui-action-group", E],
  ["ui-alert", C],
  ["ui-avatar", _],
  ["ui-badge", A],
  ["ui-button", L],
  ["ui-card", D],
  ["ui-confirm-dialog", O],
  ["ui-date-picker", S],
  ["ui-dialog", U],
  ["ui-dropdown", y],
  ["ui-empty", G],
  ["ui-form-row", P],
  ["ui-icon", v],
  ["ui-input", I],
  ["ui-list", k],
  ["ui-list-item", R],
  ["ui-phone", w],
  ["ui-pin", M],
  ["ui-popover", x],
  ["ui-radio", N],
  ["ui-radio-group", B],
  ["ui-segment", W],
  ["ui-segment-group", V],
  ["ui-select", K],
  ["ui-skeleton", Y],
  ["ui-switch", j],
  ["ui-tab-list", q],
  ["ui-tabs", z],
  ["ui-tab-trigger", H],
  ["ui-toast", X]
];
function Z(t, m = {}) {
  var l, n;
  const { i18n: a, locale: i, locales: g, theme: r, mode: d, overrides: T, inline: c } = m, e = r ? p(r) : null;
  if (h(t, e == null ? void 0 : e.defaults), e && f(e, { mode: d, overrides: T, inline: c }), (l = a == null ? void 0 : a.global) != null && l.mergeLocaleMessage) {
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
  da as applyGoogleFontsCatalogPreview,
  Ta as applyGoogleFontsForTheme,
  ca as applyThemeCustomCss,
  f as applyUiTheme,
  pa as buildGoogleFontsLinkTag,
  ha as buildGoogleFontsStylesheetUrl,
  fa as buildThemeEnforcementCss,
  Fa as buildThemeStyleAttr,
  ba as clearThemeCustomCss,
  Ea as clearToasts,
  Ca as clearUiTheme,
  _a as computeThemeVars,
  Aa as createUiId,
  La as createUiIdFactory,
  aa as default,
  Da as defineTheme,
  Oa as deriveBrandColorsFromPrimary,
  Sa as dismissToast,
  Ua as ensureContrastForMode,
  ya as expandTokens,
  Ga as extendTheme,
  Pa as formatFontFamily,
  va as formatGoogleFontFamilyName,
  Ia as getFewPrimaryColors,
  ka as getThemeCssPath,
  Ra as getThemePackage,
  wa as googleFontSelectOptions,
  Ma as listThemes,
  xa as mergeTokens,
  Na as mergeUiDefaults,
  Ba as pickContrastForeground,
  h as provideUiDefaults,
  Wa as pushToast,
  Va as registerTheme,
  Ka as requestConfirm,
  Ya as resetUiIds,
  p as resolveTheme,
  ja as resolveThemeFontFamilies,
  qa as resolveThemeVars,
  za as setToastExpanded,
  Ha as setUiDefaults,
  Xa as setUiThemeMode,
  Ja as themeConfigToTokens,
  Qa as toggleToastExpanded,
  Za as uiDefaultsMixin,
  $a as useUiDefaults,
  ae as withDerivedBrandTokens,
  ee as withDerivedConfigBrandColors
};
//# sourceMappingURL=landing.js.map
