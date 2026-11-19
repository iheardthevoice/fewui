<template>
  <div class="flex items-center gap-1 text-sm text-foreground">
    <span>Siparişi alan:</span>
    <ui-hover-card placement="bottom-start">
      <template #trigger>
        <ui-button
          variant="link"
          to="/"
        >
          Elif Kaya
        </ui-button>
      </template>
      <div class="flex gap-3">
        <ui-avatar name="Elif Kaya" />
        <div class="flex min-w-0 flex-col gap-1">
          <span class="font-medium">Elif Kaya</span>
          <span class="text-muted-foreground">Salon sorumlusu · 2 yıldır ekipte</span>
          <span class="text-xs text-muted-foreground">Bugün 14 sipariş aldı</span>
        </div>
      </div>
    </ui-hover-card>
  </div>
</template>

<script>
export default {
  name: 'HoverCardExample',
}
</script>
