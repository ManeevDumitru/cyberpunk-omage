<script setup lang="ts">
import { review } from "@/static/Reviews.ts";
import { onMounted, onUnmounted, ref, computed } from "vue";

const items = ref(review);
const currentIndex = ref(0);
const isAnimating = ref(false);
const previousReview = ref(items.value[0]);

const nextReview = () => {
  previousReview.value = items.value[currentIndex.value];
  isAnimating.value = true;

  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
    isAnimating.value = false;
  }, 300);
};

const activeReview = computed(() => items.value[currentIndex.value]);
let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  intervalId = setInterval(nextReview, 2000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <section class="reviews-section">
    <div class="reviews-wrapper">
      <TransitionGroup name="fade" tag="div" class="reviews-container">
        <div
          :key="previousReview.title"
          class="reviewContent previous-review"
          :class="{ 'glitch-animation': isAnimating }"
        >
          <div class="rcT">{{ previousReview.title }}</div>
          <div class="rcB">{{ previousReview.outlet }}</div>
        </div>
        <div
          :key="activeReview.title"
          class="reviewContent active-review"
          :class="{ emerging: isAnimating }"
        >
          <div class="rcT">{{ activeReview.title }}</div>
          <div class="rcB">{{ activeReview.outlet }}</div>
        </div>
      </TransitionGroup>
    </div>
    <p class="release-date-container">Already released!</p>
  </section>
</template>

<style scoped lang="scss">
.reviews-section {
  position: relative;
  color: #00ffff;
  text-align: center;

  .reviews-wrapper {
    position: relative;
    min-height: 100px;
  }

  .reviews-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100px;
	  overflow: hidden;

    .reviewContent {
      position: absolute;
      text-align: center;
      width: 500px;
      transition: all 0.5s ease;
      margin: auto;
    }

    .previous-review {
      z-index: 1;
    }

    .active-review {
      z-index: 2;
      opacity: 0;
    }

    .emerging {
      animation: emerge 0.5s ease-out forwards;
    }
  }

  .rcT {
    position: relative;

    &::after {
      content: " ";
      background: #00ffff;
      height: 2px;
      width: 150px;
      position: absolute;
      left: 50%;
      bottom: -5px;
      transform: translate(-50%);
    }
  }

  .rcB {
    padding-top: 10px;
    font-size: 17px;
    font-weight: 700;
  }
}

.release-date-container {
  position: relative;

  &::after {
    content: " ";
    background: #00ffff;
    width: 175px;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
}

@keyframes emerge {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

// Aggressive glitch animation keyframes
@keyframes glitch-skew {
  0%,
  100% {
    transform: skew(0deg);
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

.glitch-animation {
  animation:
    glitch-skew 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    glitch-shift 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    color-split 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

// Fade and glitch transition timing
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
