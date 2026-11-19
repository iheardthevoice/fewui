<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <span class="text-xs text-muted-foreground">248 kayıttan {{ (page - 1) * 20 + 1 }}–{{ Math.min(page * 20, 248) }} arası</span>
      <ui-pagination
        v-model="page"
        :total="248"
        :page-size="20"
      />
    </div>

    <ui-pagination
      v-model="compactPage"
      :page-count="40"
      :sibling-count="2"
      :show-edges="false"
      size="sm"
    />
  </div>
</template>

<script>
export default {
  name: 'PaginationExample',
  data() {
    return {
      page: 6,
      compactPage: 1,
    }
  },
}
</script>
