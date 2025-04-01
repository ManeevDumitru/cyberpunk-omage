<script setup lang="ts">
import { NEWS } from "@/static/News.ts";

const newsItems = NEWS;
</script>

<template>
  <section class="sectionNews mx-auto mb-12">
    <div class="sectionNewsTitle text-center lg:text-left my-8 mx-4">
      <span class="text-custom-underline">News</span>
    </div>
    <ul class="sectionNewsBox mx-auto">
      <li>
        <a href="#">
          <div class="snMainBox relative">
            <div class="snMainBoxT relative">
              <div class="rowTop">
                <span id="snMDate" class="text-xl">19.11.2019</span>
                <span id="replaceMDate" class="text-xl">More</span>
              </div>
              <div class="rowBottom">
                <h3 class="text-xl sm:text-2xl lg:text-3xl leading-none">Welcome the finalists of the "Cyberpunk 2077" cosplay contest!</h3>
              </div>
              <div class="snMainBoxB leading-none text-lg lg:text-xl">
                The best cosplay costumes we're chosen and we present you the results!
              </div>
            </div>
            <i></i>
          </div>
        </a>
      </li>
      <li v-for="(news, index) in newsItems" :key="index">
        <a :href="news.link">
          <div class="newsBox">
            <div class="newsBoxT relative">
              <div class="relative">
                <span class="replaceSDate text-xl">More</span>
                <span class="date text-xl">{{ news.date }}</span>
              </div>
              <h3 class="text-xl sm:text-2xl lg:text-3xl leading-none">{{ news.title }}</h3>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="postcss">
.sectionNews {
  max-width: 1400px;
  color: #cdcdcd;
  display: grid;
}

.sectionNewsTitle {
  color: #efe600;
  font-size: 52px;
  font-weight: 200;
  margin-top: 30px;
}

.sectionNewsTitle h2::after {
  content: " ";
  background: url(@/assets/img/utility/underline.png);
  height: 10px;
  width: 150px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.sectionNewsBox {
  max-width: 1300px;
  padding: 0 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px;
  grid-gap: 25px;
}

.sectionNewsBox li:first-child {
  grid-area: 1/1/3/1;
}

.snMainBox {
  height: 100%;
  width: 100%;
  background: #02d7f2;
  box-sizing: border-box;
  padding: 0 30px 30px;
  display: grid;
  //grid-template-rows: 1fr 1fr;
  text-align: left;
}

.snMainBox::before {
  content: " ";
  position: absolute;
  height: 0;
  width: 0;
  left: 0;
  top: 0;
  border-color: #000000 transparent;
  border-style: solid;
  border-width: 19px 19px 0 0;
}

.snMainBox:hover {
  background: #fafafa;
}

.snMainBoxT {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.snMainBoxT::after {
  content: "";
  background: #000;
  height: 3px;
  width: 50px;
  position: absolute;
  top: 50px;
}

#snMDate {
  position: absolute;
  right: 0;
  top: 25px;
  font-size: 18px;
}

.snMainBox:hover #snMDate {
  display: none;
}

#replaceMDate,
.replaceSDate {
  position: absolute;
  right: 0;
  top: 20px;
  display: none;
}

.snMainBox:hover #replaceMDate {
  display: block;
}

.snMainBoxB {
  font-size: 20px;
}

.newsBox {
  background: #000;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px 30px;
  color: #cdcdcd;
  font-weight: 100;
  border: 1px solid #cdcdcd;
}

.newsBox:hover {
  background: #fafafa;
  color: #000;
}

.newsBoxT {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 75px 1fr;
}

.newsBoxT::after {
  content: " ";
  background: #cdcdcd;
  width: 50px;
  height: 3px;
  position: absolute;
  top: 50px;
}

.newsBox:hover .newsBoxT::after {
  background: #000;
}

.date {
  position: absolute;
  right: 0;
  top: 25px;
  font-size: 18px;
}

.newsBox:hover .date {
  display: none;
}

.newsBox:hover .replaceSDate {
  display: block;
}

@media screen and (max-width: 1000px) {
  .sectionNewsBox {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }
}
</style>
