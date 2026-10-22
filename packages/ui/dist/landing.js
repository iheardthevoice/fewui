import { aY as p, aM as b, a9 as h, ba as f, ap as F, A as E, a as C, b as A, d as _, e as L, g as U, h as D, k as O, l as S, n as y, E as G, r as P, I as v, s as I, t as k, L as R, u as w, P as M, w as x, x as B, R as N, y as W, J as K, K as Y, N as q, O as V, Q, V as $, X as j, W as z, Z as H } from "./custom-css-CnLi66Ir.js";
import { c as ta, i as ia, F as ra, o as la, p as na, q as ua, G as ma, T as ga, $ as Ta, a5 as ca, a6 as da, a7 as pa, aa as ba, ab as ha, ad as fa, ae as Fa, af as Ea, ag as Ca, ah as Aa, aj as _a, ak as La, al as Ua, am as Da, an as Oa, ao as Sa, aq as ya, ar as Ga, as as Pa, au as va, av as Ia, ax as ka, ay as Ra, az as wa, aA as Ma, aE as xa, aF as Ba, aG as Na, aK as Wa, aO as Ka, aQ as Ya, aT as qa, aU as Va, a$ as Qa, b1 as $a, b3 as ja, b4 as za, b5 as Ha, b6 as Ja, b9 as Xa, bb as Za, bd as ae, bf as ee, bg as se } from "./custom-css-CnLi66Ir.js";
const J = {
  en: F,
  tr: f
}, X = [
  ["ui-action-group", E],
  ["ui-alert", C],
  ["ui-avatar", A],
  ["ui-badge", _],
  ["ui-button", L],
  ["ui-card", U],
  ["ui-confirm-dialog", D],
  ["ui-date-picker", O],
  ["ui-dialog", S],
  ["ui-dropdown", y],
  ["ui-empty", G],
  ["ui-form-row", P],
  ["ui-icon", v],
  ["ui-icon-tile", I],
  ["ui-input", k],
  ["ui-list", R],
  ["ui-list-item", w],
  ["ui-phone", M],
  ["ui-pin", x],
  ["ui-popover", B],
  ["ui-radio", N],
  ["ui-radio-group", W],
  ["ui-segment", K],
  ["ui-segment-group", Y],
  ["ui-select", q],
  ["ui-skeleton", V],
  ["ui-switch", Q],
  ["ui-tab-list", $],
  ["ui-tabs", j],
  ["ui-tab-trigger", z],
  ["ui-toast", H]
];
function Z(t, m = {}) {
  var l, n;
  const { i18n: a, locale: i, locales: g, theme: r, mode: T, overrides: c, inline: d } = m, e = r ? p(r) : null;
  if (b(t, e == null ? void 0 : e.defaults), e && h(e, { mode: T, overrides: c, inline: d }), (l = a == null ? void 0 : a.global) != null && l.mergeLocaleMessage) {
    const o = g ?? (i != null ? [i] : [
      typeof a.global.locale == "string" ? a.global.locale : ((n = a.global.locale) == null ? void 0 : n.value) ?? "tr"
    ]);
    for (const s of o) {
      const u = J[s];
      u && a.global.mergeLocaleMessage(s, u);
    }
  }
  for (const [o, s] of X)
    t.component(o, s);
}
const ea = {
  install: Z
};
export {
  ta as BASE_UI_DEFAULTS,
  ia as DEFAULT_THEME_ID,
  ra as FEW_COLOR_SCALE,
  la as FEW_PALETTE_ID,
  na as FEW_PRIMARY,
  ua as FEW_PRIMARY_FOREGROUND,
  ma as GOOGLE_FONTS_CATALOG,
  ga as TOAST_GROUP_WINDOW_MS,
  Ta as UI_DEFAULTS_KEY,
  ca as applyGoogleFontsCatalogPreview,
  da as applyGoogleFontsForTheme,
  pa as applyThemeCustomCss,
  h as applyUiTheme,
  ba as buildGoogleFontsLinkTag,
  ha as buildGoogleFontsStylesheetUrl,
  fa as buildThemeEnforcementCss,
  Fa as buildThemeStyleAttr,
  Ea as clearThemeCustomCss,
  Ca as clearToasts,
  Aa as clearUiTheme,
  _a as computeThemeVars,
  La as createUiId,
  Ua as createUiIdFactory,
  ea as default,
  Da as defineTheme,
  Oa as deriveBrandColorsFromPrimary,
  Sa as dismissToast,
  ya as ensureContrastForMode,
  Ga as expandTokens,
  Pa as extendTheme,
  va as formatFontFamily,
  Ia as formatGoogleFontFamilyName,
  ka as getFewPrimaryColors,
  Ra as getThemeCssPath,
  wa as getThemePackage,
  Ma as googleFontSelectOptions,
  xa as listThemes,
  Ba as mergeTokens,
  Na as mergeUiDefaults,
  Wa as pickContrastForeground,
  b as provideUiDefaults,
  Ka as pushToast,
  Ya as registerTheme,
  qa as requestConfirm,
  Va as resetUiIds,
  p as resolveTheme,
  Qa as resolveThemeFontFamilies,
  $a as resolveThemeVars,
  ja as setToastExpanded,
  za as setUiDefaults,
  Ha as setUiThemeMode,
  Ja as themeConfigToTokens,
  Xa as toggleToastExpanded,
  Za as uiDefaultsMixin,
  ae as useUiDefaults,
  ee as withDerivedBrandTokens,
  se as withDerivedConfigBrandColors
};
//# sourceMappingURL=landing.js.map
