<template>
  <div class="relative">
    <div class="">
      <ul
        id="bannerCarousel"
        ref="bannerCarousel"
        class="flex flex-row space-x-[32px] snap-x snap-mandatory overflow-x-hidden py-[76px] justify-start"
      >
        <li
          v-for="(banner, i) in banners"
          :id="`banner-${i}`"
          :key="i"
          :class="`snap-always snap-center transition-opacity ${
            activeBanner != i && 'opacity-50'
          }`"
        >
          <CustomBanner :banner="banner" />
        </li>
      </ul>
    </div>
    <ul class="slider">
      <li v-for="(_, i) in banners" :key="`indicator-${i}`">
        <button
          type="button"
          :class="`transition-all duration-300 slider-indicator ${
            i == activeBanner ? 'active' : ''
          }`"
          @click="goToBanner(i)"
        ></button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getBannerMovies } from "~/composables/useMovie";
const banners = getBannerMovies();

const bannerCarousel = ref(null);
const activeBanner = ref<number>(0);
const goToBanner = (i: number) => {
  const carousel = document.getElementById("bannerCarousel");
  const bannerI = document.getElementById(`banner-${i}`);
  if (carousel && bannerI) {
    bannerI.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
  activeBanner.value = i;
};
</script>

<style scoped>
.slider-indicator {
  @apply h-3 w-3 rounded-full bg-[rgba(255,255,255,0.5)];
}
.slider-indicator.active {
  @apply h-[12px] w-[60px] bg-orange-primary rounded-full;
}
.slider {
  @apply mb-[30px] lg:my-[40px] flex justify-center  space-x-4 cursor-pointer;
}
</style>
