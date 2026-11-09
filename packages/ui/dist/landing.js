import { b2 as p, aS as b, a9 as h, bi as f, as as F, A as C, a as E, b as L, d as _, e as A, g as D, h as O, k as U, l as S, n as k, E as y, r as I, I as P, s as v, t as G, L as R, u as w, P as M, w as x, x as B, R as W, y as N, J as K, K as q, N as V, O as Y, Q as J, V as Q, X as Z, W as z, Z as H } from "./custom-css-BpXQTKeF.js";
import { c as ta, i as ia, F as ra, o as la, p as na, q as ua, G as ma, T as ca, $ as ga, a5 as Ta, a6 as da, a7 as pa, aa as ba, ab as ha, ad as fa, ae as Fa, ag as Ca, ah as Ea, ai as La, ak as _a, al as Aa, am as Da, an as Oa, ao as Ua, ap as Sa, aq as ka, ar as ya, at as Ia, au as Pa, av as va, aw as Ga, ay as Ra, az as wa, aB as Ma, aC as xa, aD as Ba, aE as Wa, aI as Na, aJ as Ka, aK as qa, aL as Va, aO as Ya, aQ as Ja, aU as Qa, aW as Za, aZ as za, a_ as Ha, b5 as Xa, b7 as $a, bb as ja, bc as as, bd as ss, be as es, bh as os, bk as ts, bm as is, bo as rs, bp as ls } from "./custom-css-BpXQTKeF.js";
const X = {
  en: F,
  tr: f
}, $ = [
  ["ui-action-group", C],
  ["ui-alert", E],
  ["ui-avatar", L],
  ["ui-badge", _],
  ["ui-button", A],
  ["ui-card", D],
  ["ui-confirm-dialog", O],
  ["ui-date-picker", U],
  ["ui-dialog", S],
  ["ui-dropdown", k],
  ["ui-empty", y],
  ["ui-form-row", I],
  ["ui-icon", P],
  ["ui-icon-tile", v],
  ["ui-input", G],
  ["ui-list", R],
  ["ui-list-item", w],
  ["ui-phone", M],
  ["ui-pin", x],
  ["ui-popover", B],
  ["ui-radio", W],
  ["ui-radio-group", N],
  ["ui-segment", K],
  ["ui-segment-group", q],
  ["ui-select", V],
  ["ui-skeleton", Y],
  ["ui-switch", J],
  ["ui-tab-list", Q],
  ["ui-tabs", Z],
  ["ui-tab-trigger", z],
  ["ui-toast", H]
];
function j(t, m = {}) {
  var l, n;
  const { i18n: a, locale: i, locales: c, theme: r, mode: g, overrides: T, inline: d } = m, s = r ? p(r) : null;
  if (b(t, s == null ? void 0 : s.defaults), s && h(s, { mode: g, overrides: T, inline: d }), (l = a == null ? void 0 : a.global) != null && l.mergeLocaleMessage) {
    const o = c ?? (i != null ? [i] : [
      typeof a.global.locale == "string" ? a.global.locale : ((n = a.global.locale) == null ? void 0 : n.value) ?? "tr"
    ]);
    for (const e of o) {
      const u = X[e];
      u && a.global.mergeLocaleMessage(e, u);
    }
  }
  for (const [o, e] of $)
    t.component(o, e);
}
const sa = {
  install: j
};
export {
  ta as BASE_UI_DEFAULTS,
  ia as DEFAULT_THEME_ID,
  ra as FEW_COLOR_SCALE,
  la as FEW_PALETTE_ID,
  na as FEW_PRIMARY,
  ua as FEW_PRIMARY_FOREGROUND,
  ma as GOOGLE_FONTS_CATALOG,
  ca as TOAST_GROUP_WINDOW_MS,
  ga as UI_DEFAULTS_KEY,
  Ta as applyGoogleFontsCatalogPreview,
  da as applyGoogleFontsForTheme,
  pa as applyThemeCustomCss,
  h as applyUiTheme,
  ba as buildGoogleFontsLinkTag,
  ha as buildGoogleFontsStylesheetUrl,
  fa as buildThemeEnforcementCss,
  Fa as buildThemeStyleAttr,
  Ca as clearThemeCustomCss,
  Ea as clearToasts,
  La as clearUiTheme,
  _a as colorToRgb,
  Aa as computeThemeVars,
  Da as contrastRatio,
  Oa as createUiId,
  Ua as createUiIdFactory,
  sa as default,
  Sa as defineTheme,
  ka as deriveBrandColorsFromPrimary,
  ya as dismissToast,
  Ia as ensureContrastForMode,
  Pa as ensureLabelContrast,
  va as expandTokens,
  Ga as extendTheme,
  Ra as formatFontFamily,
  wa as formatGoogleFontFamilyName,
  Ma as getFewPrimaryColors,
  xa as getThemeCssPath,
  Ba as getThemePackage,
  Wa as googleFontSelectOptions,
  Na as listThemes,
  Ka as mergeTokens,
  qa as mergeUiDefaults,
  Va as oklchToRgb,
  Ya as parseOklch,
  Ja as pickContrastForeground,
  b as provideUiDefaults,
  Qa as pushToast,
  Za as registerTheme,
  za as requestConfirm,
  Ha as resetUiIds,
  p as resolveTheme,
  Xa as resolveThemeFontFamilies,
  $a as resolveThemeVars,
  ja as setToastExpanded,
  as as setUiDefaults,
  ss as setUiThemeMode,
  es as themeConfigToTokens,
  os as toggleToastExpanded,
  ts as uiDefaultsMixin,
  is as useUiDefaults,
  rs as withDerivedBrandTokens,
  ls as withDerivedConfigBrandColors
};
//# sourceMappingURL=landing.js.map
