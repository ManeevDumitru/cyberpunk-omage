<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";
import { useGlobalStore } from "@/stores/global.ts";

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true,
  },
});

const { toggleAppLoadedState } = useGlobalStore();

const showLoading = ref(props.isLoading);
const rectangles = ref(
  Array.from({ length: 96 }, (_, i) => ({
    id: i,
    revealed: false,
    delay: 0,
    shade: Math.random() * 0.2 - 0.1, // Random shade variation between -10% and +10%
  })),
);

const adjustColor = (baseColor: string, shade: number) => {
  const parseHex = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const { r, g, b } = parseHex(baseColor);

  const adjustedR = Math.min(255, Math.max(0, Math.round(r * (1 + shade))));
  const adjustedG = Math.min(255, Math.max(0, Math.round(g * (1 + shade))));
  const adjustedB = Math.min(255, Math.max(0, Math.round(b * (1 + shade))));

  return `#${adjustedR.toString(16).padStart(2, "0")}${adjustedG.toString(16).padStart(2, "0")}${adjustedB.toString(16).padStart(2, "0")}`;
};

let timer = null;

watch(
  () => props.isLoading,
  (newLoading) => {
    if (!newLoading) {
      const groups: number[][] = [];
      const rows = 12;
      const cols = 8;
      const takenIndices = new Set<number>();

      for (let g = 0; g < 24; g++) {
        const group: number[] = [];

        while (group.length < 4) {
          const row = Math.floor(Math.random() * rows);
          const col = Math.floor(Math.random() * cols);
          const index = row * cols + col;

          if (!takenIndices.has(index)) {
            takenIndices.add(index);
            group.push(index);
          }
        }

        groups.push(group);
      }

      groups.forEach((group, groupIndex) => {
        setTimeout(() => {
          rectangles.value = rectangles.value.map((rect, idx) =>
            group.includes(idx) ? { ...rect, revealed: true, delay: Math.random() * 0.3 } : rect,
          );
        }, groupIndex * 50);
      });

      timer = setTimeout(() => {
        showLoading.value = false;
        toggleAppLoadedState(true);
      }, 1600);
    }
  },
);

onUnmounted(() => clearTimeout(timer));
</script>

<template>
  <div
    v-if="showLoading"
    style="position: fixed"
    class="top-0 left-0 inset-0 bg-transparent z-50 w-[100vw] h-[100vh] flex flex-col"
  >
    <div v-for="row in 12" :key="row" class="flex flex-1">
      <div
        v-for="rect in rectangles.slice((row - 1) * 8, row * 8)"
        :key="rect.id"
        class="flex-1 transition-all duration-500 perspective-1000 relative overflow-hidden"
      >
        <div
          class="w-full h-full absolute border border-black backface-hidden transition-transform duration-500 glitch-effect"
          :style="{
            backgroundColor: adjustColor('#efe600', rect.shade),
            transitionDelay: `${rect.delay || 0}s`,
          }"
          :class="{
            'rotate-y-180 skew-x-12 scale-110 opacity-0': rect.revealed,
          }"
        >
          <div
            v-if="rect.revealed"
            class="absolute inset-0 pointer-events-none glitch-overlay"
          ></div>
        </div>
        <div
          class="w-full h-full absolute backface-hidden transition-transform duration-500 rotate-y-180"
          :class="{
            'rotate-y-0': rect.revealed,
          }"
          :style="{
            transitionDelay: `${rect.delay || 0}s`,
          }"
        >
          <slot
            name="content"
            :revealedRectangles="rectangles.filter((r) => r.clicked).length"
          ></slot>
        </div>
      </div>
    </div>
  </div>
  <slot v-if="!showLoading && rectangles.every((r) => r.clicked)"></slot>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
  position: relative;
}

.backface-hidden {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.rotate-y-0 {
  transform: rotateY(0deg);
}

.glitch-effect {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.glitch-overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
  mix-blend-mode: overlay;
}
</style>
