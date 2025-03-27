<script setup lang="ts"></script>

<template>
  <section class="features">
    <div class="featuresWrapper">
      <div class="featureBoxWrapper">
        <div class="featureBox">
          <div class="featureBoxText">Play as a hired mercenary</div>
        </div>
        <p>
          Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build
          your legend on the streets of Night City.
        </p>
      </div>
      <div class="featureBoxWrapper">
        <div class="featureBox">
          <div class="featureBoxText">Explore the NightCity</div>
        </div>
        <p>
          Enter the massive open world of Night City, a place that sets new standards in terms of
          visuals, complexity and depth.
        </p>
      </div>
      <div class="featureBoxWrapper">
        <div class="featureBox">
          <div class="featureBoxText">Keanu Motherf*cking Reeves</div>
        </div>
        <p>
          Take the riskiest job of your life and go after a prototype implant that is the key to
          immortality with JOHNY SILVERHAND.
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
