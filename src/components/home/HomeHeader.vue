<script setup lang="ts">
import SVGIcon from "@/components/general/SVGIcon.vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "@/stores/home.ts";

import { links, platforms } from "@/static/HeaderLinks.ts";

const { isBlinking } = storeToRefs(useHomeStore());
const { turnOn } = useHomeStore();
turnOn();
</script>

<template>
  <div class=" ">
    <div class="headerAwards">
      <img src="@/assets/img/logo/Awards.png" alt="Awards Missing" />
    </div>
    <div class="headerRightField">
      <ul class="headerRightFieldLinks">
        <li v-for="(item, index) in links" :key="index">
          <a :href="item.href">
            <SVGIcon size="42" type="mdi" :path="item.icon" />
          </a>
        </li>
      </ul>
    </div>
    <div class="headerCP77Wrapper">
      <a href="https://www.youtube.com/watch?v=YApuEWtG30w">
        <div class="headerCP77VideoContainer">
          <video autoplay muted loop src="@/assets/video/CP77.mp4" />
          <span id="beepingItem" v-if="isBlinking"></span>
        </div>
      </a>
    </div>
    <div class="headerUnderVideo">
      <div class="headerUnderVideoDate">Released</div>
      <a href="https://www.cyberpunk.net/gb/ru/pre-order">
        <div class="headerUnderVideoButton relative">
          <span>Buy now_</span>
        </div>
      </a>
      <ul class="headerUnderVideoPlatforms">
        <li v-for="(item, index) in platforms" :key="index" class="text-center">
          <SVGIcon type="mdi" :path="item.icon" class="mx-auto"/>
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.headerContainer {
  margin: auto;
}

.headerAwards {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 25px;
}

.headerRightField {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  padding: 35px;
  display: grid;
}

.headerRightFieldLinks {
  padding: 35px;
  font-size: 26px;
}

.headerRightFieldLinks li {
  display: inline-block;
  padding: 0 5px 0 5px;
}

.headerCP77Wrapper {
  height: 100vh;
  min-height: 600px;
  width: 100%;
  margin: auto;
  position: relative;
  z-index: 0;
  overflow: hidden;
  
  &::after {
    content: " ";
    background: url(/src/assets/img/utility/bar1.png);
    width: 105%;
    height: 49px;
    position: absolute;
    bottom: -5px;
    left: -2%;
  }
}

.headerCP77Wrapper::before {
  content: "";
  background: black;
  background: url(@/assets/img/bg/CP77KV.png);
  background-position: center;
  background-size: cover;
  height: 100vh;
  min-height: 600px;
  width: 100vw;
  margin: auto;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.headerCP77VideoContainer {
  z-index: -1;
  position: absolute;
  bottom: 52%;
  left: 54%;
  
  @media screen and (max-width: 1920px) {
    & {
      bottom: 47%;
      left: 48.5%;
    }
  }
}

.headerUnderVideo {
  position: absolute;
  bottom: 35%;
  left: 60%;
  z-index: 1;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  
  @media screen and (max-width: 1920px) {
    & {
      bottom: 25%;
      left: 55%;
    }
  }
}

.headerUnderVideoDate {
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
}

.headerUnderVideoButton {
  background: #ff003c;
  color: #fff;
  width: 400px;
  height: 100px;
  text-align: center;
  text-transform: uppercase;
  line-height: 100px;
  font-size: 32px;
}

.headerUnderVideoButton span {
  position: relative;
  z-index: 2;
}

.headerUnderVideoButton::after {
  content: " ";
  background: url(@/assets/img/utility/AngleButton.png);
  height: 100px;
  width: 400px;
  position: absolute;
  top: 0;
  left: 0;
}

.headerUnderVideoPlatforms {
  padding-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
}

.headerUnderVideoPlatforms li {
  padding: 0 10px;
  display: inline-block;
}

.headerCP77VideoContainer video {
  max-height: 30%;
}

#beepingItem {
  background: #00ffff;
  display: block;
  width: 50px;
  height: 7px;
  position: absolute;
  bottom: 69px;
  left: 156px;
  z-index: 5;
}

#beepingItem::after {
  content: " ";
  position: absolute;
  right: -7px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 0 0 7px;
  border-color: transparent transparent transparent #00ffff;
  transform: rotate(0deg);
}

@media screen and (max-width: 1100px) {
  .headerUnderVideoButton {
    background: none;
    width: 250px;
    height: 65px;
    font-size: 20px;
    line-height: 65px;
    position: relative;
    z-index: 2;
  }
  .headerUnderVideoButton::after {
    background: url(@/assets/img/utility/AngleButtonc.png);
    width: 250px;
    height: 65px;
    z-index: 1;
  }
}
@media screen and (max-width: 800px) {
  header,
  .headerUnderContainer {
    overflow: hidden;
    height: 120vw;
  }
  .headerContainer {
    margin: auto;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .headerAwards img {
    height: 26px;
  }
  .headerRightField {
    width: 100px;
    padding: 15px;
  }
}
</style>
