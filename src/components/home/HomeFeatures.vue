<script setup lang="ts">
import type { HomeFeatureInterface } from "@/types/Home.ts";
import { features } from "@/static/Features.ts";

const getStyling = (item: HomeFeatureInterface) => {
  const imageUrl = new URL(`../../assets/img/bg/${item.imgPath}`, import.meta.url).href;
  console.log(`../../${item.imgPath}`);
  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
};

const featureItems = features.map((item) => {
  return {
    ...item,
    styling: getStyling(item),
  };
});
</script>

<template>
  <section class="features">
    <div class="featuresWrapper">
      <div v-for="(item, index) in featureItems" :key="index" class="featureBoxWrapper">
        <div :style="item.styling" class="featureBox">
          <div class="featureBoxText text-xl">
            {{ item.title }}
          </div>
        </div>
        <p>
          {{ item.desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featureBoxWrapper p {
  color: #fff;
  font-weight: 200;
  font-size: 16px;
  display: inline-block;
  margin: 20px 12px 0 12px;
}

.features {
  background: #000;
  max-width: 1400px;
  margin: auto;
}

.featuresWrapper {
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.featureBox {
  height: 250px;
}

/* Does not work otherwise */

.featureBoxText {
  background: yellow;
  width: 300px;
  position: absolute;
  bottom: 25px;
  right: 0;
  padding: 15px;
  text-transform: uppercase;
}

.featureBoxWrapper {
  margin: 0 20px;
  
}

.featureBoxWrapper .featureBox {
  position: relative;
}

.featureBoxWrapper:first-child .featureBox {
  background: url(@/assets/img/bg/Moto.png);
  background-position: left;
  background-size: initial;
  background-repeat: no-repeat;
}

.featureBoxWrapper:nth-child(2) .featureBox {
  background: url(@/assets/img/bg/City.png);
  background-position: left;
  background-size: initial;
  background-repeat: no-repeat;
}

.featureBoxWrapper:last-child .featureBox {
  background: url(@/assets/img/bg/KeanuReeves.png);
  background-position: left;
  background-size: initial;
  background-repeat: no-repeat;
}

@media screen and (max-width: 1000px) {
  .featuresWrapper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    text-align: center;
  }
  .featureBoxWrapper {
    margin: 20px 0;
    
  }
  .featureBox {
    margin: auto;
  }
}
</style>
