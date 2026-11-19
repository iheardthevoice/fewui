import { bp as E, bc as F, ah as _, bJ as C, aE as L, A as S, a as A, b as U, e as D, f as I, j as M, k as O, n as v, o as P, q as R, E as G, u as k, I as y, v as w, w as N, L as B, x, P as W, H, J as V, R as j, K as q, Q as K, T as Y, U as J, V as Q, W as $, Z as z, $ as X, _ as Z, a1 as aa } from "./custom-css-BSnmHd47.js";
import { d as ra, l as na, F as ua, r as ma, s as ga, t as Ta, G as ca, X as da, a3 as ba, aa as pa, ab as ha, ad as fa, ae as Ea, af as Fa, ai as _a, aj as Ca, al as La, am as Sa, an as Aa, ap as Ua, aq as Da, ar as Ia, au as Ma, av as Oa, aw as va, az as Pa, aA as Ra, aB as Ga, aC as ka, aD as ya, aF as wa, aG as Na, aH as Ba, aI as xa, aM as Wa, aN as Ha, aP as Va, aQ as ja, aR as qa, aS as Ka, aT as Ya, a$ as Ja, b2 as Qa, b3 as $a, b5 as za, b8 as Xa, ba as Za, be as ae, bg as ee, bj as se, bk as oe, bo as te, bs as ie, bu as le, bw as re, bA as ne, bB as ue, bD as me, bF as ge, bI as Te, bL as ce, bP as de, bR as be, bS as pe } from "./custom-css-BSnmHd47.js";
const c = {
  en: L,
  tr: C
}, ea = [
  ["ui-action-group", S],
  ["ui-alert", A],
  ["ui-avatar", U],
  ["ui-badge", D],
  ["ui-button", I],
  ["ui-card", M],
  ["ui-confirm-dialog", O],
  ["ui-date-picker", v],
  ["ui-dialog", P],
  ["ui-dropdown", R],
  ["ui-empty", G],
  ["ui-form-row", k],
  ["ui-icon", y],
  ["ui-icon-tile", w],
  ["ui-input", N],
  ["ui-list", B],
  ["ui-list-item", x],
  ["ui-phone", W],
  ["ui-pin", H],
  ["ui-popover", V],
  ["ui-radio", j],
  ["ui-radio-group", q],
  ["ui-segment", K],
  ["ui-segment-group", Y],
  ["ui-select", J],
  ["ui-skeleton", Q],
  ["ui-switch", $],
  ["ui-tab-list", z],
  ["ui-tabs", X],
  ["ui-tab-trigger", Z],
  ["ui-toast", aa]
];
function sa(t, d = {}) {
  var r, n, u, m, g;
  const { i18n: a, locale: i, locales: b, theme: l, mode: p, overrides: h, inline: f } = d, s = l ? E(l) : null;
  if (F(t, s == null ? void 0 : s.defaults), s && _(s, { mode: p, overrides: h, inline: f }), (r = a == null ? void 0 : a.global) != null && r.mergeLocaleMessage) {
    const o = b ?? (i != null ? [i] : [
      typeof a.global.locale == "string" ? a.global.locale : ((n = a.global.locale) == null ? void 0 : n.value) ?? "en"
    ]);
    for (const e of o) {
      const T = c[e];
      T ? a.global.mergeLocaleMessage(e, T) : (g = (m = (u = a.global).getLocaleMessage) == null ? void 0 : m.call(u, e)) != null && g.ui || a.global.mergeLocaleMessage(e, c.en);
    }
  }
  for (const [o, e] of ea)
    t.component(o, e);
}
const ta = {
  install: sa
};
export {
  ra as BASE_UI_DEFAULTS,
  na as DEFAULT_THEME_ID,
  ua as FEW_COLOR_SCALE,
  ma as FEW_PALETTE_ID,
  ga as FEW_PRIMARY,
  Ta as FEW_PRIMARY_FOREGROUND,
  ca as GOOGLE_FONTS_CATALOG,
  da as TOAST_GROUP_WINDOW_MS,
  ba as UI_DEFAULTS_KEY,
  pa as UI_THEME_MODE_EVENT,
  ha as UI_THEME_TRANSITION_CLASS,
  fa as applyGoogleFontsCatalogPreview,
  Ea as applyGoogleFontsForTheme,
  Fa as applyThemeCustomCss,
  _ as applyUiTheme,
  _a as buildGoogleFontsLinkTag,
  Ca as buildGoogleFontsStylesheetUrl,
  La as buildThemeEnforcementCss,
  Sa as buildThemeModeScript,
  Aa as buildThemeStyleAttr,
  Ua as clearThemeCustomCss,
  Da as clearToasts,
  Ia as clearUiTheme,
  Ma as colorToRgb,
  Oa as computeThemeVars,
  va as contrastRatio,
  Pa as createUiId,
  Ra as createUiIdFactory,
  ta as default,
  Ga as defineTheme,
  ka as deriveBrandColorsFromPrimary,
  ya as dismissToast,
  wa as ensureContrastForMode,
  Na as ensureLabelContrast,
  Ba as expandTokens,
  xa as extendTheme,
  Wa as formatFontFamily,
  Ha as formatGoogleFontFamilyName,
  Va as getFewPrimaryColors,
  ja as getThemeCssPath,
  qa as getThemePackage,
  Ka as getUiThemeMode,
  Ya as googleFontSelectOptions,
  Ja as listThemes,
  Qa as mergeTokens,
  $a as mergeUiDefaults,
  za as oklchToRgb,
  Xa as parseOklch,
  Za as pickContrastForeground,
  F as provideUiDefaults,
  ae as pushToast,
  ee as registerTheme,
  se as requestConfirm,
  oe as resetUiIds,
  te as resolveSystemMode,
  E as resolveTheme,
  ie as resolveThemeFontFamilies,
  le as resolveThemeVars,
  re as resolveUiThemeMode,
  ne as setToastExpanded,
  ue as setUiDefaults,
  me as setUiThemeMode,
  ge as themeConfigToTokens,
  Te as toggleToastExpanded,
  ce as uiDefaultsMixin,
  de as useUiDefaults,
  be as withDerivedBrandTokens,
  pe as withDerivedConfigBrandColors
};
//# sourceMappingURL=landing.js.map
