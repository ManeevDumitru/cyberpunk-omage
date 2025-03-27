import { acceptHMRUpdate, defineStore } from "pinia";
import { useRandomValue } from "@/composables/useRandomValue.ts";

const useHomeStore = defineStore("home", {
  state: () => ({
    // home header blinker
    isBlinking: false,
    blinkingIntervalTime: null as null | number,
    blinkingInterval: null,

    // home gallery
    selectedGalleryCategory: "R23",
    selectedGalleryCategoryGroup: 1,
  }),

  actions: {
    // home header blinker
    turnOn() {
      this.isBlinking = true;
      this.blinkingIntervalTime = useRandomValue(200, 700);
      setTimeout(this.turnOff, this.blinkingIntervalTime);
    },
    turnOff() {
      this.isBlinking = false;
      this.blinkingIntervalTime = useRandomValue(300, 1000);
      setTimeout(this.turnOn, this.blinkingIntervalTime);
    },

    // home gallery
    setSelectedGalleryCategory(category: string) {
      this.selectedGalleryCategory = category;
      this.selectedGalleryCategoryGroup = 1;
    },
    setSelectedGalleryCategoryGroup(group: number) {
      this.selectedGalleryCategoryGroup = group;
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot));
}

export { useHomeStore };
