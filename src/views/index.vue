<script setup lang="ts">
import HomeHeader from "@/components/home/HomeHeader.vue";
import HomeReviews from "@/components/home/HomeReviews.vue";
import HomeIntroduction from "@/components/home/HomeIntroduction.vue";
import HomeFeatures from "@/components/home/HomeFeatures.vue";
import HomeNewsletter from "@/components/home/HomeNewsletter.vue";
import HomeGallery from "@/components/home/HomeGallery.vue";
import HomeNews from "@/components/home/HomeNews.vue";
</script>

<template>
  <HomeHeader />
  <HomeReviews />
  <HomeIntroduction />
  <HomeFeatures />
  <HomeNewsletter />
  <HomeGallery />
  <HomeNews />
  <footer>
    <section class="footerContent">
      <div class="fContentTop">
        <ul id="firstUl">
          <li>
            <a href="https://regulations.cdprojektred.com/en/privacy_policy"
              >Terms of Use & Privacy Policy</a
            >
          </li>
          <li>
            <a href="https://en.cdprojektred.com/jobs/">Careers</a>
          </li>
          <li>
            <span id="WTFm">Where to find us</span>
            <ul id="secondUl">
              <li>
                <a href="https://www.youtube.com/user/CyberPunkGame"
                  ><i class="fab fa-youtube"></i
                ></a>
              </li>
              <li>
                <a href="https://vk.com/CyberpunkGame"><i class="fab fa-vk"></i></a>
              </li>
              <li>
                <a href="https://www.facebook.com/CyberpunkGame"><i class="fab fa-facebook"></i></a>
              </li>
              <li>
                <a href="http://twitter.com/cyberpunkgame"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="https://discord.gg/cyberpunkgame"><i class="fab fa-discord"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/cyberpunkgame/"
                  ><i class="fab fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="https://forums.cdprojektred.com/index.php?forums/cyberpunk.119/"
                  ><i class="fas fa-fire-alt"></i
                ></a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="fContentTInfo">
          CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A.
          © 2018 CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the
          property of their respective owners.
        </div>
      </div>
      <div class="fContentB">
        <ul>
          <li>
            <a href="http://thewitcher.com">
              <img src="@/assets/img/logo/TW3c.png" alt="TW3#404" />
              <span>thewitcher.com</span>
            </a>
          </li>
          <li>
            <a href="https://www.playgwent.com">
              <img src="@/assets/img/logo/GWc.png" alt="Gwent#404" />
              <span>Gwent</span>
            </a>
          </li>
        </ul>
        <div class="fContentBBox4Img">
          <img src="@/assets/img/logo/CDPRlogocc.png" alt="CDPR" />
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped></style>
