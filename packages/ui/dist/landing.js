import { i as g, t as c, j as p, A as d, k as T, l as h, B as F, m as b, C, n as L, o as P, q as f, E as A, F as O, I as y, s as E, L as v, v as G, P as S, u as R, w as _, R as I, x as U, y as k, z as w, S as B, G as D, H as M, J as N, K as W, N as x } from "./index-DEEtzBEQ.js";
import { O as J, Q, U as $, V as X, W as Z, $ as aa, a0 as sa, a1 as ea, a2 as oa, a3 as ta, a4 as ia, e as ra, a5 as la, d as na, a6 as ua, g as ma, a7 as ga, a8 as ca, a9 as pa, aa as da, h as Ta, ab as ha, ad as Fa, ae as ba, af as Ca, ag as La, ah as Pa } from "./index-DEEtzBEQ.js";
const K = {
  en: p,
  tr: c
}, V = [
  ["ui-action-group", d],
  ["ui-alert", T],
  ["ui-avatar", h],
  ["ui-badge", F],
  ["ui-button", b],
  ["ui-card", C],
  ["ui-date-picker", L],
  ["ui-dialog", P],
  ["ui-dropdown", f],
  ["ui-empty", A],
  ["ui-form-row", O],
  ["ui-icon", y],
  ["ui-input", E],
  ["ui-list", v],
  ["ui-list-item", G],
  ["ui-phone", S],
  ["ui-pin", R],
  ["ui-popover", _],
  ["ui-radio", I],
  ["ui-radio-group", U],
  ["ui-segment", k],
  ["ui-segment-group", w],
  ["ui-select", B],
  ["ui-skeleton", D],
  ["ui-tab-list", M],
  ["ui-tabs", N],
  ["ui-tab-trigger", W],
  ["ui-toast", x]
];
function Y(n, u = {}) {
  var i, r;
  const { i18n: a, locale: o, locales: m, theme: t } = u;
  if (t && g(t), (i = a == null ? void 0 : a.global) != null && i.mergeLocaleMessage) {
    const e = m ?? (o != null ? [o] : [
      typeof a.global.locale == "string" ? a.global.locale : ((r = a.global.locale) == null ? void 0 : r.value) ?? "tr"
    ]);
    for (const s of e) {
      const l = K[s];
      l && a.global.mergeLocaleMessage(s, l);
    }
  }
  for (const [e, s] of V)
    n.component(e, s);
}
const q = {
  install: Y
};
export {
  J as FEW_COLOR_SCALE,
  Q as FEW_PALETTE_ID,
  $ as FEW_PRIMARY,
  X as FEW_PRIMARY_FOREGROUND,
  Z as GOOGLE_FONTS_CATALOG,
  aa as applyGoogleFontsForTheme,
  sa as applyThemeCustomCss,
  g as applyUiTheme,
  ea as buildGoogleFontsLinkTag,
  oa as buildGoogleFontsStylesheetUrl,
  ta as buildThemeStyleAttr,
  ia as clearThemeCustomCss,
  ra as clearToasts,
  la as createUiId,
  na as createUiIdFactory,
  q as default,
  ua as deriveBrandColorsFromPrimary,
  ma as dismissToast,
  ga as getFewPrimaryColors,
  ca as getThemePreset,
  pa as googleFontSelectOptions,
  da as mergeUiTheme,
  Ta as pushToast,
  ha as resetUiIds,
  Fa as resolvePrimaryColor,
  ba as resolveThemeFontFamilies,
  Ca as resolveThemePreset,
  La as resolveThemeVars,
  Pa as withDerivedBrandColors
};
//# sourceMappingURL=landing.js.map
