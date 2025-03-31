<script setup lang="ts">
import { useGlobalStore } from "@/stores/global.ts";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import Loading from "@/components/general/Loading.vue";
import { watch } from "vue";

const route = useRoute();
const { isAppLoaded, isAppLoading } = storeToRefs(useGlobalStore());
const { toggleAppLoading } = useGlobalStore();

setTimeout(() => {
  toggleAppLoading(false);
}, 500);

watch(
  isAppLoaded,
  (newLoading) => {
    let style = "hidden";

    if (newLoading) {
      style = "auto";
    }

    document.body.style.overflow = style;
    // document.body.style.scrollbarGutter = 'stable';
  }, {
    immediate: true
  }
);
</script>

<template>
  <Loading :is-loading="isAppLoading" />

  <component :is="route.meta.layoutComponent" />
</template>

<style scoped />
