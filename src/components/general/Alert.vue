<script setup lang="ts">
import { ref, watch, onUnmounted } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "Alert",
  },
  show: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const emit = defineEmits(["close"]);

const isVisible = ref(false);
const isDisappearing = ref(false);
const rectangles = ref([]);

const createRectangles = () => {
  const count = 120;
  const newRectangles = [];

  const colors = [
    "rgba(0, 162, 255, ",
    "rgba(255, 0, 128, ",
    "rgba(128, 0, 255, ",
    "rgba(0, 255, 255, ",
    "rgba(255, 0, 255, ",
  ];

  for (let i = 0; i < count; i++) {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const opacity = Math.random() * 0.7 + 0.3;

    newRectangles.push({
      id: i,
      x: Math.random() * 40,
      y: Math.random() * 100,
      width: Math.random() * 200 + 10,
      height: Math.random() * 4 + 1,
      color: colors[colorIndex] + opacity + ")",
      opacity: opacity,
      rotation: Math.random() * 2 - 1,
      delay: Math.random() * 0.4,
      speed: Math.random() * 300 + 100,
      duration: Math.random() * 0.3 + 0.3,
    });
  }

  rectangles.value = newRectangles;
};

let timer = null;

const showAlert = () => {
  isVisible.value = true;
  isDisappearing.value = false;

  if (props.duration > 0) {
    timer = setTimeout(() => {
      closeAlert();
    }, props.duration);
  }
};

const closeAlert = () => {
  createRectangles();
  isDisappearing.value = true;

  setTimeout(() => {
    isVisible.value = false;
    isDisappearing.value = false;
    emit("close");
  }, 800);
};

// Watch for show prop changes
watch(
  () => props.show,
  (newShow) => {
    if (newShow) {
      showAlert();
    } else if (isVisible.value && !isDisappearing.value) {
      closeAlert();
    }
  },
  { immediate: true },
);

onUnmounted(() => {
  if (timer) clearTimeout(timer);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isVisible || isDisappearing"
      class="fixed bottom-4 right-4 z-50 transition-opacity duration-200"
      :class="{ 'opacity-1': !isVisible && !isDisappearing }"
    >
      <div
        class="alert-container p-4 bg-gray-800 text-white rounded shadow-lg"
        :class="{ 'alert-move-right': isDisappearing, 'glitch-animation': !isDisappearing }"
      >
        {{ text }}
      </div>

      <div v-if="isDisappearing" class="absolute inset-0 overflow-visible pointer-events-none">
        <div
          v-for="rect in rectangles"
          :key="rect.id"
          class="absolute glitch-rect"
          :style="{
            zIndex: 9,
            left: `${rect.x}%`,
            top: `${rect.y}%`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            backgroundColor: rect.color,
            transform: `rotate(${rect.rotation}deg)`,
            opacity: isDisappearing ? 1 : 0,
            transitionDelay: `${rect.delay}s`,
            '--speed': `${rect.speed}px`,
            '--duration': `${rect.duration}s`,
          }"
        />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.alert-container {
  min-width: 200px;
}

.alert-move-right {
  animation: move-right 0.6s forwards;
}

@keyframes glitch-skew {
  0%,
  100% {
    transform: skew(0deg);
  }
  25% {
    opacity: 1;
  }
  10%,
  30%,
  50% {
    transform: skew(5deg);
  }
  20%,
  40%,
  60% {
    transform: skew(-5deg);
  }
  100% {
    opacity: 1;
  }
}

@keyframes glitch-shift {
  0%,
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  10%,
  30%,
  50% {
    clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 90%);
  }
  20%,
  40%,
  60% {
    clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%);
  }
}

@keyframes color-split {
  0%,
  100% {
    text-shadow: none;
  }
  10%,
  30%,
  50% {
    text-shadow:
      2px 2px 0 rgba(255, 0, 0, 0.7),
      -2px -2px 0 rgba(0, 0, 255, 0.7);
  }
}

@keyframes move-right {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(10px);
    opacity: 0.6;
  }
  100% {
    transform: translateX(120%);
  }
}

@keyframes rect-streak {
  0% {
    opacity: 0;
    transform: translateX(0) scaleX(0.3);
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(120%) scaleX(1.2);
  }
}

.glitch-animation {
  animation:
    glitch-skew 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    glitch-shift 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    color-split 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.glitch-rect {
  position: absolute;
  transform-origin: left center;
  animation: rect-streak var(--duration) forwards;
}
</style>
