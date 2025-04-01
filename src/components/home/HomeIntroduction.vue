<script setup lang="ts">
</script>

<template>
  <section class="introduction">
    <div class="introduction-inner">
      <div class="boxForIntroduction">
        <div class="fieldForLabel text-lg lg:text-2xl relative mb-4">It's not enough to be yourself...</div>
        <p class="fieldForText">
          Cyberpunk 2077 is an upcoming role-playing video game developed by CD Projekt Red, an
          internal studio of publisher CD Projekt, that is releasing for Microsoft Windows,
          PlayStation 4, Stadia, and Xbox One on 16 April 2020. Adapted from the Cyberpunk franchise,
          it takes place in dystopian Night City, an open world with six distinct regions. Players
          assume the role of the customisable mercenary V in a first-person perspective, with skills
          in hacking and machinery, an arsenal of ranged weapons, and options for melee combat.
        </p>
      </div>
      <p id="introductionP2">
        Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis
        obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going
        after a one-of-a-kind implant that is the key to immortality. You can customize your
        character’s cyberware, skillset and playstyle, and explore a vast city where the choices you
        make shape the story and the world around you.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.introduction {
  background-image: url(@/assets/img/bg/CP77Intr.png);
  background-position: center;
  background-size: cover;
  height: 750px;
  margin: auto;
  position: relative;
  
  &::before {
    content: " ";
    background: url(@/assets/img/utility/bar2inv.png);
    background-size: cover;
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  &::after {
    content: " ";
    background: url(@/assets/img/utility/bar3.png);
    background-size: cover;
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.introduction-inner {
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
  }
  
  &::after {
      content: " ";
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 100%;
      background: linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
  }
}

.boxForIntroduction {
  background: #fcee0a;
  max-width: 500px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  padding: 25px 55px 25px;
  display: grid;
  grid-template-rows: auto 1fr;
  //overflow: hidden;
  z-index: 2;
  
  &::after {
    content: " ";
    background: url(@/assets/img/utility/bar5.png);
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: -30px;
    left: 0;
  }
  
  @media screen and (max-width: 1000px){
    & {
      display: block;
      padding: 25px 25px;
      position: absolute;
      right: 0;
      top: 30%;
    }
  }
}

.fieldForLabel {
  text-transform: uppercase;
  font-weight: 700;
}

.fieldForLabel::after {
  content: " ";
  background: url(@/assets/img/utility/bar4.png);
  max-width: 200px;
  width: 100%;
  height: 10px;
  position: absolute;
  bottom: -6px;
  left: 0;
}

#introductionP2 {
  position: absolute;
  bottom: 0;
  color: #fff;
  z-index: 2;
  padding: 0 10.66667vw 0;
  display: none;
  
  @media screen and (max-width: 1000px) {
    & {
      display: block
    }
  }
}
</style>
