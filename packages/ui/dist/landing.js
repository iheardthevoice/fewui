import { bq as E, bd as F, ai as C, bK as _, aF as L, A as S, a as U, b as A, e as D, f as I, j as M, k as O, n as v, o as G, q as R, E as k, u as y, I as P, v as w, w as N, L as x, y as B, x as W, P as q, J as H, K, R as V, N as Y, T as J, U as j, V as Q, W as X, X as $, _ as z, a0 as Z, $ as aa, a2 as ea } from "./custom-css-hwfmZD1z.js";
import { d as na, l as ua, F as ma, r as ga, s as Ta, t as ca, G as ba, Y as da, a4 as pa, ab as ha, ac as fa, ae as Ea, af as Fa, ag as Ca, aj as _a, ak as La, am as Sa, an as Ua, ao as Aa, aq as Da, ar as Ia, as as Ma, av as Oa, aw as va, ax as Ga, aA as Ra, aB as ka, aC as ya, aD as Pa, aE as wa, aG as Na, aH as xa, aI as Ba, aJ as Wa, aN as qa, aO as Ha, aQ as Ka, aR as Va, aS as Ya, aT as Ja, aU as ja, b0 as Qa, b3 as Xa, b4 as $a, b6 as za, b9 as Za, bb as ae, bf as ee, bh as se, bk as oe, bl as te, bp as ie, bt as le, bv as re, bx as ne, bB as ue, bC as me, bE as ge, bG as Te, bJ as ce, bM as be, bQ as de, bS as pe, bT as he } from "./custom-css-hwfmZD1z.js";
const c = {
  en: L,
  tr: _
}, sa = [
  ["ui-action-group", S],
  ["ui-alert", U],
  ["ui-avatar", A],
  ["ui-badge", D],
  ["ui-button", I],
  ["ui-card", M],
  ["ui-confirm-dialog", O],
  ["ui-date-picker", v],
  ["ui-dialog", G],
  ["ui-dropdown", R],
  ["ui-empty", k],
  ["ui-form-row", y],
  ["ui-icon", P],
  ["ui-icon-tile", w],
  ["ui-input", N],
  ["ui-list", x],
  ["ui-list-item", B],
  ["ui-list-group", W],
  ["ui-phone", q],
  ["ui-pin", H],
  ["ui-popover", K],
  ["ui-radio", V],
  ["ui-radio-group", Y],
  ["ui-segment", J],
  ["ui-segment-group", j],
  ["ui-select", Q],
  ["ui-skeleton", X],
  ["ui-switch", $],
  ["ui-tab-list", z],
  ["ui-tabs", Z],
  ["ui-tab-trigger", aa],
  ["ui-toast", ea]
];
function oa(t, b = {}) {
  var r, n, u, m, g;
  const { i18n: a, locale: i, locales: d, theme: l, mode: p, overrides: h, inline: f } = b, s = l ? E(l) : null;
  if (F(t, s == null ? void 0 : s.defaults), s && C(s, { mode: p, overrides: h, inline: f }), (r = a == null ? void 0 : a.global) != null && r.mergeLocaleMessage) {
    const o = d ?? (i != null ? [i] : [
      typeof a.global.locale == "string" ? a.global.locale : ((n = a.global.locale) == null ? void 0 : n.value) ?? "en"
    ]);
    for (const e of o) {
      const T = c[e];
      T ? a.global.mergeLocaleMessage(e, T) : (g = (m = (u = a.global).getLocaleMessage) == null ? void 0 : m.call(u, e)) != null && g.ui || a.global.mergeLocaleMessage(e, c.en);
    }
  }
  for (const [o, e] of sa)
    t.component(o, e);
}
const ia = {
  install: oa
};
export {
  na as BASE_UI_DEFAULTS,
  ua as DEFAULT_THEME_ID,
  ma as FEW_COLOR_SCALE,
  ga as FEW_PALETTE_ID,
  Ta as FEW_PRIMARY,
  ca as FEW_PRIMARY_FOREGROUND,
  ba as GOOGLE_FONTS_CATALOG,
  da as TOAST_GROUP_WINDOW_MS,
  pa as UI_DEFAULTS_KEY,
  ha as UI_THEME_MODE_EVENT,
  fa as UI_THEME_TRANSITION_CLASS,
  Ea as applyGoogleFontsCatalogPreview,
  Fa as applyGoogleFontsForTheme,
  Ca as applyThemeCustomCss,
  C as applyUiTheme,
  _a as buildGoogleFontsLinkTag,
  La as buildGoogleFontsStylesheetUrl,
  Sa as buildThemeEnforcementCss,
  Ua as buildThemeModeScript,
  Aa as buildThemeStyleAttr,
  Da as clearThemeCustomCss,
  Ia as clearToasts,
  Ma as clearUiTheme,
  Oa as colorToRgb,
  va as computeThemeVars,
  Ga as contrastRatio,
  Ra as createUiId,
  ka as createUiIdFactory,
  ia as default,
  ya as defineTheme,
  Pa as deriveBrandColorsFromPrimary,
  wa as dismissToast,
  Na as ensureContrastForMode,
  xa as ensureLabelContrast,
  Ba as expandTokens,
  Wa as extendTheme,
  qa as formatFontFamily,
  Ha as formatGoogleFontFamilyName,
  Ka as getFewPrimaryColors,
  Va as getThemeCssPath,
  Ya as getThemePackage,
  Ja as getUiThemeMode,
  ja as googleFontSelectOptions,
  Qa as listThemes,
  Xa as mergeTokens,
  $a as mergeUiDefaults,
  za as oklchToRgb,
  Za as parseOklch,
  ae as pickContrastForeground,
  F as provideUiDefaults,
  ee as pushToast,
  se as registerTheme,
  oe as requestConfirm,
  te as resetUiIds,
  ie as resolveSystemMode,
  E as resolveTheme,
  le as resolveThemeFontFamilies,
  re as resolveThemeVars,
  ne as resolveUiThemeMode,
  ue as setToastExpanded,
  me as setUiDefaults,
  ge as setUiThemeMode,
  Te as themeConfigToTokens,
  ce as toggleToastExpanded,
  be as uiDefaultsMixin,
  de as useUiDefaults,
  pe as withDerivedBrandTokens,
  he as withDerivedConfigBrandColors
};
//# sourceMappingURL=landing.js.map
