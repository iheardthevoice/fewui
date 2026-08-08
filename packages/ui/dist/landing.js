import { J as c, af as g, Z as p, A as d, a as T, b, B as F, c as h, C, d as L, e as f, g as A, E as O, k as P, I as E, l as v, L as y, m as G, P as S, n as R, R as _, o as I, S as k, p as U, q as w, r as B, t as D, v as M, u as N, x as W } from "./index-lyNYfxMX.js";
import { F as H, h as J, i as Q, j as X, G as Z, z as $, H as aa, K as ea, M as sa, N as oa, O as ta, Q as ia, V as ra, W as la, X as na, Y as ua, a1 as ma, a2 as ca, a3 as ga, a4 as pa, a6 as da, a7 as Ta, aa as ba, ab as Fa, ac as ha, ad as Ca, ag as La } from "./index-lyNYfxMX.js";
const x = {
  en: p,
  tr: g
}, Y = [
  ["ui-action-group", d],
  ["ui-alert", T],
  ["ui-avatar", b],
  ["ui-badge", F],
  ["ui-button", h],
  ["ui-card", C],
  ["ui-date-picker", L],
  ["ui-dialog", f],
  ["ui-dropdown", A],
  ["ui-empty", O],
  ["ui-form-row", P],
  ["ui-icon", E],
  ["ui-input", v],
  ["ui-list", y],
  ["ui-list-item", G],
  ["ui-phone", S],
  ["ui-popover", R],
  ["ui-radio", _],
  ["ui-radio-group", I],
  ["ui-segment", k],
  ["ui-segment-group", U],
  ["ui-select", w],
  ["ui-skeleton", B],
  ["ui-tab-list", D],
  ["ui-tabs", M],
  ["ui-tab-trigger", N],
  ["ui-toast", W]
];
function K(n, u = {}) {
  var i, r;
  const { i18n: a, locale: o, locales: m, theme: t } = u;
  if (t && c(t), (i = a == null ? void 0 : a.global) != null && i.mergeLocaleMessage) {
    const s = m ?? (o != null ? [o] : [
      typeof a.global.locale == "string" ? a.global.locale : ((r = a.global.locale) == null ? void 0 : r.value) ?? "tr"
    ]);
    for (const e of s) {
      const l = x[e];
      l && a.global.mergeLocaleMessage(e, l);
    }
  }
  for (const [s, e] of Y)
    n.component(s, e);
}
const j = {
  install: K
};
export {
  H as FEW_COLOR_SCALE,
  J as FEW_PALETTE_ID,
  Q as FEW_PRIMARY,
  X as FEW_PRIMARY_FOREGROUND,
  Z as GOOGLE_FONTS_CATALOG,
  $ as applyGoogleFontsForTheme,
  aa as applyThemeCustomCss,
  c as applyUiTheme,
  ea as buildGoogleFontsLinkTag,
  sa as buildGoogleFontsStylesheetUrl,
  oa as buildThemeStyleAttr,
  ta as clearThemeCustomCss,
  ia as clearToasts,
  ra as createUiId,
  la as createUiIdFactory,
  j as default,
  na as deriveBrandColorsFromPrimary,
  ua as dismissToast,
  ma as getFewPrimaryColors,
  ca as getThemePreset,
  ga as googleFontSelectOptions,
  pa as mergeUiTheme,
  da as pushToast,
  Ta as resetUiIds,
  ba as resolvePrimaryColor,
  Fa as resolveThemeFontFamilies,
  ha as resolveThemePreset,
  Ca as resolveThemeVars,
  La as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
