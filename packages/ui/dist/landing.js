import { aN as p, aE as h, a2 as f, a$ as F, ai as C, A as E, a as b, b as _, d as A, e as L, f as U, g as D, j as S, k as O, m as y, E as G, q as P, I as v, r as I, L as k, s as R, P as w, u as M, v as x, R as N, w as B, x as W, y as V, z as q, H as Y, J as j, N as z, Q as H, O as J, V as K } from "./custom-css-v6r5L52A.js";
import { c as oa, h as ta, F as ia, n as ra, o as la, p as na, G as ua, T as ma, X as ga, $ as ca, a0 as da, a1 as Ta, a3 as pa, a4 as ha, a6 as fa, a7 as Fa, a8 as Ca, a9 as Ea, aa as ba, ac as _a, ad as Aa, ae as La, af as Ua, ag as Da, ah as Sa, aj as Oa, ak as ya, al as Ga, an as Pa, ao as va, aq as Ia, ar as ka, as as Ra, at as wa, ax as Ma, ay as xa, az as Na, aC as Ba, aF as Wa, aG as Va, aI as qa, aJ as Ya, aQ as ja, aS as za, aU as Ha, aV as Ja, aW as Ka, aX as Qa, a_ as Xa, b0 as $a, b2 as Za, b3 as ae, b4 as ee } from "./custom-css-v6r5L52A.js";
const Q = {
  en: C,
  tr: F
}, X = [
  ["ui-action-group", E],
  ["ui-alert", b],
  ["ui-avatar", _],
  ["ui-badge", A],
  ["ui-button", L],
  ["ui-card", U],
  ["ui-confirm-dialog", D],
  ["ui-date-picker", S],
  ["ui-dialog", O],
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
  ["ui-select", q],
  ["ui-skeleton", Y],
  ["ui-switch", j],
  ["ui-tab-list", z],
  ["ui-tabs", H],
  ["ui-tab-trigger", J],
  ["ui-toast", K]
];
function $(t, m = {}) {
  var l, n;
  const { i18n: a, locale: i, locales: g, theme: r, mode: c, overrides: d, inline: T } = m, e = r ? p(r) : null;
  if (h(t, e == null ? void 0 : e.defaults), e && f(e, { mode: c, overrides: d, inline: T }), (l = a == null ? void 0 : a.global) != null && l.mergeLocaleMessage) {
    const o = g ?? (i != null ? [i] : [
      typeof a.global.locale == "string" ? a.global.locale : ((n = a.global.locale) == null ? void 0 : n.value) ?? "tr"
    ]);
    for (const s of o) {
      const u = Q[s];
      u && a.global.mergeLocaleMessage(s, u);
    }
  }
  for (const [o, s] of X)
    t.component(o, s);
}
const aa = {
  install: $
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
  Ca as clearThemeCustomCss,
  Ea as clearToasts,
  ba as clearUiTheme,
  _a as computeThemeVars,
  Aa as createUiId,
  La as createUiIdFactory,
  aa as default,
  Ua as defineTheme,
  Da as deriveBrandColorsFromPrimary,
  Sa as dismissToast,
  Oa as ensureContrastForMode,
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
  qa as requestConfirm,
  Ya as resetUiIds,
  p as resolveTheme,
  ja as resolveThemeFontFamilies,
  za as resolveThemeVars,
  Ha as setToastExpanded,
  Ja as setUiDefaults,
  Ka as setUiThemeMode,
  Qa as themeConfigToTokens,
  Xa as toggleToastExpanded,
  $a as uiDefaultsMixin,
  Za as useUiDefaults,
  ae as withDerivedBrandTokens,
  ee as withDerivedConfigBrandColors
};
//# sourceMappingURL=landing.js.map
