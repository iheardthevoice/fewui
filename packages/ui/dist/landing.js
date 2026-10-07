import { aC as p, Z as u, am as d, aI as T, aa as f, A as h, a as F, b as C, c as E, d as P, C as b, e as A, f as v, g as L, i as S, E as _, m as y, I as O, n as U, o as D, p as G, P as I, q as R, r as w, R as k, s as B, S as M, t as K, u as N, v as W, w as Y, H as q, K as x, J as H, O as j } from "./index-DGfkpsxQ.js";
import { B as aa, F as ea, j as sa, k as oa, l as ta, G as ia, T as ra, x as la, U as na, W as ua, X as ma, Y as ga, $ as ca, a0 as pa, a1 as da, a2 as Ta, a3 as fa, a4 as ha, a6 as Fa, a7 as Ca, a8 as Ea, a9 as Pa, ac as ba, ae as Aa, af as va, ag as La, ah as Sa, ai as _a, al as ya, ao as Oa, ap as Ua, aq as Da, ar as Ga, au as Ia, az as Ra, aB as wa, aD as ka, aF as Ba, aK as Ma, aL as Ka, aM as Na } from "./index-DGfkpsxQ.js";
const z = {
  en: f,
  tr: T
}, J = [
  ["ui-action-group", h],
  ["ui-alert", F],
  ["ui-avatar", C],
  ["ui-badge", E],
  ["ui-button", P],
  ["ui-card", b],
  ["ui-confirm-dialog", A],
  ["ui-date-picker", v],
  ["ui-dialog", L],
  ["ui-dropdown", S],
  ["ui-empty", _],
  ["ui-form-row", y],
  ["ui-icon", O],
  ["ui-input", U],
  ["ui-list", D],
  ["ui-list-item", G],
  ["ui-phone", I],
  ["ui-pin", R],
  ["ui-popover", w],
  ["ui-radio", k],
  ["ui-radio-group", B],
  ["ui-segment", M],
  ["ui-segment-group", K],
  ["ui-select", N],
  ["ui-skeleton", W],
  ["ui-switch", Y],
  ["ui-tab-list", q],
  ["ui-tabs", x],
  ["ui-tab-trigger", H],
  ["ui-toast", j]
];
function V(m, g = {}) {
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
      const n = z[o];
      n && a.global.mergeLocaleMessage(o, n);
    }
  }
  for (const [e, o] of J)
    m.component(e, o);
}
const Z = {
  install: V
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
  Fa as createUiId,
  Ca as createUiIdFactory,
  Z as default,
  Ea as deriveBrandColorsFromPrimary,
  Pa as dismissToast,
  ba as formatGoogleFontFamilyName,
  Aa as getFewPrimaryColors,
  va as getThemeCssPath,
  La as getThemePackage,
  Sa as getThemePreset,
  _a as googleFontSelectOptions,
  ya as mergeUiDefaults,
  d as mergeUiTheme,
  Oa as provideUiDefaults,
  Ua as pushToast,
  Da as requestConfirm,
  Ga as resetUiIds,
  Ia as resolvePrimaryColor,
  Ra as resolveThemeFontFamilies,
  wa as resolveThemeId,
  p as resolveThemePackage,
  ka as resolveThemePreset,
  Ba as resolveThemeVars,
  Ma as useUiDefaults,
  Ka as useUiDefaultsOptions,
  Na as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
