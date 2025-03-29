<script setup lang="ts">
import type {
  HomeGalleryCategoryInterface,
  HomeGalleryImageInterface,
  HomeGalleryImagesInterface,
} from "@/types/Home.ts";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useHomeStore } from "@/stores/home.ts";
import { storeToRefs } from "pinia";

import { GALLERY_CATEGORIES, GALLERY_IMAGES_MOBILE } from "@/static/Gallery.ts";

const { selectedGalleryCategory, selectedGalleryCategoryGroup } = storeToRefs(useHomeStore());
const { setSelectedGalleryCategory, setSelectedGalleryCategoryGroup } = useHomeStore();

const categories = GALLERY_CATEGORIES;
const mobileImages = GALLERY_IMAGES_MOBILE;

const changeCategory = (item: HomeGalleryCategoryInterface) => {
  setSelectedGalleryCategory(item.value);
};
const isActiveCategory = (item: HomeGalleryCategoryInterface) => {
  return item.value === selectedGalleryCategory.value;
};

const getStyling = (item: string) => {
  return {
    backgroundImage: `url(/src/assets/img/bg/${item}.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
};

const breakpoints = useBreakpoints(breakpointsTailwind);

const isMobile = breakpoints.smaller('md');

const changeGroup = (
  direction: number,
  items: HomeGalleryImagesInterface[] | HomeGalleryImageInterface[],
) => {
  const maxGroup = items.length;
  
  if (maxGroup === 1) {
    return;
  }

  let resultingValue = selectedGalleryCategoryGroup.value + direction;

  if (resultingValue > maxGroup) {
    resultingValue = 1;
  }

  if (resultingValue < 1) {
    resultingValue = maxGroup;
  }

  setSelectedGalleryCategoryGroup(resultingValue);
};
</script>

<template>
  <section class="sectionGallery">
    <div class="sectionGalleryContainer">
      <div class="sectionGalleryName my-8">
        <span class="relative sm:w-[fit-content] mx-auto text-5xl">GALLERY</span>
      </div>

      <template v-if="!isMobile">
        <div class="sectionGalleryCategory lg:mt-8 mb-8">
          <div class="categoriesContainer">
            <button
              v-for="(item, index) in categories"
              :key="index"
              :class="{
              activeB: isActiveCategory(item),
            }"
              @click="changeCategory(item)"
            >
              <span> {{ item.title }} </span>
              <span> {{ item.value }} </span>
              <i></i>
            </button>
          </div>
        </div>
        <div class="sectionGallerySlides relative">
          <div
            v-for="(category, categoryIndex) in categories"
            :key="categoryIndex"
            :id="`sgsBox${categoryIndex + 1}`"
          >
            <template v-if="isActiveCategory(category)">
              <div
                v-for="(group, groupIndex) in category.images"
                :key="groupIndex"
                :class="`sliderBox${categoryIndex + 1}`"
              >
                <div :class="`sb${categoryIndex + 1}Container${groupIndex + 1}`">
                  <template v-if="selectedGalleryCategoryGroup === groupIndex + 1">
                    <div class="sbMBox" :style="getStyling(group.main.url)" />
                    <div
                      v-for="(additional, additionalIndex) in group.additional"
                      :key="additionalIndex"
                      :style="getStyling(additional.url)"
                    />
                  </template>
                </div>
              </div>
              
              <div class="buttonPrev" @click="changeGroup(-1, category.images)" />
              <div class="buttonNext" @click="changeGroup(+1, category.images)" />
            </template>
          </div>
        </div>
      </template>
      <div v-else class="gallery-mobile relative">
        <template v-for="(item, index) in mobileImages" :key="index">
          <div
            v-if="selectedGalleryCategoryGroup === index + 1"
            :style="getStyling(item.url)"
            class="h-full"
          ></div>
        </template>

        <div class="buttonPrev" @click="changeGroup(-1, mobileImages)" />
        <div class="buttonNext" @click="changeGroup(+1, mobileImages)" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.sectionGallery {
  background: black;
}

.sectionGalleryContainer {
  max-width: 1400px;
  margin: auto;
  display: grid;
  color: #efe600;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 6fr;
}

.sectionGalleryName {
  color: #efe600;
  font-size: 52px;
  font-weight: 200;
  text-align: center;
}

.sectionGalleryName span::after {
  content: " ";
  background: url(@/assets/img/utility/underline.png);
  height: 10px;
  width: 150px;
  position: absolute;
  bottom: -8px;
  left: 0;
}

.categoriesContainer {
  margin: auto;
  width: 600px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}

.categoriesContainer button {
  position: relative;
  font-weight: 700;
  line-height: normal;
  font-size: 14px;
  text-transform: uppercase;
  background: #000;
  color: #cdcdcd;
  outline: none;
  cursor: pointer;
  height: 55px;
  box-sizing: border-box;
  border: 2px solid #cdcdcd;
}

.categoriesContainer button:first-child i {
  background: #000;
  position: absolute;
  left: -18px;
  bottom: -9px;
  height: 20px;
  width: 30px;
  z-index: 3;
  transform: rotate(-135deg);
}

.categoriesContainer button:first-child:not(.activeB) i {
  position: absolute;
  left: -12px;
  bottom: -15px;
  width: 24px;
  height: 24px;
  border-bottom: 2px solid #cdcdcd;
  background-color: #000;
  transform: rotate(-139deg);
}

.categoriesContainer button:last-child i {
  background-color: #000;
  position: absolute;
  right: -22px;
  top: -23px;
  height: 35px;
  width: 25px;
  z-index: 3;
  transform: rotate(45deg);
}

.categoriesContainer button:last-child:not(.activeB) i {
  position: absolute;
  right: -13px;
  top: -14px;
  width: 24px;
  height: 24px;
  border-bottom: 2px solid #cdcdcd;
  background-color: #000;
  transform: rotate(45deg);
}

.activeB {
  background: #cdcdcd !important;
  outline: 1px solid #383838;
}

button.activeB span:nth-child(1) {
  color: black;
}

.categoriesContainer span {
  font-size: 16px;
  color: #cdcdcd;
  font-weight: 600;
  text-transform: uppercase;
}

.categoriesContainer button span:nth-child(2) {
  font-size: 10px;
  position: absolute;
  right: 20px;
  bottom: -5px;
  background: #000;
  padding: 0 10px;
}

.sectionGallerySlides {
  grid-area: 2/1/2/-1;
}

.buttonPrev,
.buttonNext {
  background: url(@/assets/img/utility/Arrows.png);
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 3;
  cursor: pointer;
}

.buttonPrev {
  background-position-x: left !important;
  left: 0;
}

.buttonNext {
  background-position-x: right !important;
  right: 0;
}

.sb1Container1,
.sb1Container2,
.sb1Container3,
.sb2Container1,
.sb2Container2,
.sb2Container3,
.sb3Container1 {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
}

.sbMBox {
  min-height: 400px;
  grid-area: 1 / 2 / 3 / 1;
}

.gallery-mobile {
  grid-area: 3 / 1 / 3 / 3 !important;
  max-height: 400px;
  height: 60vh;
  width: 100%;
}

.sectionGallerySlides div {
  background-position: center;
}
</style>
