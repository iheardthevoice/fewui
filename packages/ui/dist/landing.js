import { aD as p, $ as u, an as d, aL as T, ab as f, A as h, a as E, b as C, c as F, d as P, C as A, e as b, f as S, g as _, i as v, E as O, m as L, I as G, n as y, o as D, p as I, P as U, q as R, r as w, R as k, s as M, S as N, t as B, u as W, v as x, w as K, J as Y, N as j, K as q, Q as H } from "./index-DT13B0MX.js";
import { B as aa, F as ea, j as sa, k as oa, l as ta, G as ia, T as ra, x as la, H as na, V as ua, X as ma, Y as ga, Z as ca, a0 as pa, a1 as da, a2 as Ta, a3 as fa, a4 as ha, a5 as Ea, a7 as Ca, a8 as Fa, a9 as Pa, aa as Aa, ad as ba, af as Sa, ag as _a, ah as va, ai as Oa, aj as La, am as Ga, ap as ya, aq as Da, ar as Ia, as as Ua, av as Ra, aA as wa, aC as ka, aE as Ma, aG as Na, aI as Ba, aK as Wa, aN as xa, aO as Ka, aP as Ya } from "./index-DT13B0MX.js";
const V = {
  en: f,
  tr: T
}, J = [
  ["ui-action-group", h],
  ["ui-alert", E],
  ["ui-avatar", C],
  ["ui-badge", F],
  ["ui-button", P],
  ["ui-card", A],
  ["ui-confirm-dialog", b],
  ["ui-date-picker", S],
  ["ui-dialog", _],
  ["ui-dropdown", v],
  ["ui-empty", O],
  ["ui-form-row", L],
  ["ui-icon", G],
  ["ui-input", y],
  ["ui-list", D],
  ["ui-list-item", I],
  ["ui-phone", U],
  ["ui-pin", R],
  ["ui-popover", w],
  ["ui-radio", k],
  ["ui-radio-group", M],
  ["ui-segment", N],
  ["ui-segment-group", B],
  ["ui-select", W],
  ["ui-skeleton", x],
  ["ui-switch", K],
  ["ui-tab-list", Y],
  ["ui-tabs", j],
  ["ui-tab-trigger", q],
  ["ui-toast", H]
];
function Q(m, g = {}) {
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
      const n = V[o];
      n && a.global.mergeLocaleMessage(o, n);
    }
  }
  for (const [e, o] of J)
    m.component(e, o);
}
const Z = {
  install: Q
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
  na as TOAST_GROUP_WINDOW_MS,
  ua as UI_DEFAULTS_KEY,
  ma as applyGoogleFontsCatalogPreview,
  ga as applyGoogleFontsForTheme,
  ca as applyThemeCustomCss,
  u as applyUiTheme,
  pa as buildGoogleFontsLinkTag,
  da as buildGoogleFontsStylesheetUrl,
  Ta as buildThemeEnforcementCss,
  fa as buildThemeStyleAttr,
  ha as clearThemeCustomCss,
  Ea as clearToasts,
  Ca as createUiId,
  Fa as createUiIdFactory,
  Z as default,
  Pa as deriveBrandColorsFromPrimary,
  Aa as dismissToast,
  ba as formatGoogleFontFamilyName,
  Sa as getFewPrimaryColors,
  _a as getThemeCssPath,
  va as getThemePackage,
  Oa as getThemePreset,
  La as googleFontSelectOptions,
  Ga as mergeUiDefaults,
  d as mergeUiTheme,
  ya as provideUiDefaults,
  Da as pushToast,
  Ia as requestConfirm,
  Ua as resetUiIds,
  Ra as resolvePrimaryColor,
  wa as resolveThemeFontFamilies,
  ka as resolveThemeId,
  p as resolveThemePackage,
  Ma as resolveThemePreset,
  Na as resolveThemeVars,
  Ba as setToastExpanded,
  Wa as toggleToastExpanded,
  xa as useUiDefaults,
  Ka as useUiDefaultsOptions,
  Ya as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
