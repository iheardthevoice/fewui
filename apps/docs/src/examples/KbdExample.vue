<template>
  <div class="flex flex-col gap-4 text-sm text-foreground">
    <p class="flex items-center gap-2">
      Ürün aramak için
      <ui-kbd keys="mod+k" />
      tuşlarına basın.
    </p>
    <p class="flex items-center gap-2">
      Adisyonu yazdır
      <ui-kbd :keys="['mod', 'shift', 'p']" />
    </p>
    <p class="flex items-center gap-2 text-xs text-muted-foreground">
      Kapatmak için
      <ui-kbd
        keys="esc"
        size="sm"
      />
      · Onaylamak için
      <ui-kbd size="sm">Enter</ui-kbd>
    </p>
  </div>
</template>

<script>
export default {
  name: 'KbdExample',
}
</script>
