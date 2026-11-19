<!-- Tema sağlayıcı: sayfanın bir bölümüne ayrı tema, mod, ana renk ve yoğunluk uygular (önizleme, iç içe tema). -->
<template>
  <div class="flex flex-col gap-4">
    <div class="max-w-xs">
      <ui-segment-group v-model="mode" size="sm" aria-label="Önizleme modu">
        <ui-segment value="light" label="Açık" icon="sun" />
        <ui-segment value="dark" label="Koyu" icon="moon" />
      </ui-segment-group>
    </div>

    <div class="grid max-w-3xl gap-4 md:grid-cols-2">
      <ui-theme-provider
        v-for="preview in previews"
        :key="preview.label"
        theme="web"
        :mode="mode"
        :overrides="preview.overrides"
        :defaults="preview.defaults"
        background
      >
        <div class="p-4">
          <ui-card :title="preview.label" description="Site önizlemesi" icon="palette">
            <div class="flex flex-col gap-4">
              <ui-form-row label="Kişi sayısı">
                <ui-input model-value="4" />
              </ui-form-row>
              <ui-button block>Rezervasyon yap</ui-button>
            </div>
          </ui-card>
        </div>
      </ui-theme-provider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeProviderExample',
  data() {
    return {
      mode: 'dark',
      previews: [
        { label: 'Turuncu marka', overrides: { primary: '#ea580c' }, defaults: null },
        { label: 'Yeşil marka, sıkı yoğunluk', overrides: { primary: '#15803d' }, defaults: { density: 'compact' } },
      ],
    }
  },
}
</script>
