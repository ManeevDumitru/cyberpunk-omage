<script setup lang="ts">
</script>

<template>
  <section class="footer-content pt-4 lg:pt-8">
    <div class="fContentTInfo pt-8 lg:pt-12 mb-4 lg:mb-12 mx-auto">
      <p class="mb-0 mx-2">
        CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. ©
        2018 CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the
        property of their respective owners.
      </p>
    </div>
    <div class="fContentB">
      <img src="@/assets/img/logo/CDPRlogocc.png" alt="CDPR" class="my-8"/>
    </div>
  </section>
</template>

<style scoped>
section {
  background: #efe600;
  width: 100%;
  position: relative;

  &::before {
    content: " ";
    background: url(@/assets/img/utility/bar6f.png);
    width: 100%;
    height: 49px;
    position: absolute;
    top: -1px;
    left: 0;
  }
}

section .fContentTop #firstUl {
  max-width: 1100px;
  margin: auto;
  text-align: center;
  font-size: 20px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 3fr;
  line-height: 32px;
}

.fContentTop ul li ul {
  display: grid;
  grid-template-columns: 2fr repeat(6, 1fr);
  grid-template-rows: 1fr;
}

.fContentTop ul li ul li {
  font-size: 32px;
}

.fContentTInfo {
  font-size: 16px;
  max-width: 800px;
  text-align: center;
}

.fContentB {
  display: flex;
  justify-content: center;
  max-width: 1100px;
  margin: auto;
  background: #000;
  position: relative;
}

.fContentB::before {
  content: " ";
  position: absolute;
  height: 0;
  width: 0;
  left: 0;
  top: 0;
  border-color: #efe600 transparent;
  border-style: solid;
  border-width: 19px 19px 0 0;
}

.fContentB ul {
  max-width: 500px;
  padding: 25px 0 0 0;
  margin: auto;
  color: #efe600;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
}

.fContentB a {
  color: #fff;
  line-height: 105px;
  box-sizing: border-box;
  vertical-align: middle;
  font-size: 16px;
}

.fContentB ul li a img {
  transform: translate(0, 35%);
}

.fContentBBox4Img {
  max-width: 60%;
  margin: auto;
}
#secondUl li:last-child {
  display: none;
}
</style>
