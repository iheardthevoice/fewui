<!-- Dosya ve klasör: ikon uzantıdan seçilir; boyutlar ve özel ikon / renk. -->
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-start gap-4">
      <ui-file name="Menü 2026" kind="folder" />
      <ui-file name="menu-kis.pdf" />
      <ui-file name="urunler.xlsx" />
      <ui-file name="logo.png" />
      <ui-file name="sozlesme.docx" :basename-only="false" />
    </div>

    <div class="flex flex-wrap items-end gap-4">
      <ui-file name="gun-sonu.csv" size="sm" />
      <ui-file name="gun-sonu.csv" size="md" />
      <ui-file name="gun-sonu.csv" size="lg" />
      <ui-file name="Yedek" icon="box-archive" color="amber" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileExample',
}
</script>
