<template>
  <section class="relative bg-cs-gray-dark mt-[66px]">
    <div class="">
      <ul
        id="bannerCarousel"
        ref="bannerCarousel"
        class="flex flex-row space-x-[32px] snap-x snap-mandatory overflow-x-hidden py-[76px]"
        @mouseover="disableScroll(true)"
        @mouseleave="disableScroll(false)"
      >
        <li
          v-for="(banner, i) in banners"
          :id="`banner-${i}`"
          :key="i"
          :class="`snap-always snap-center ${
            activeBanner != i && 'opacity-50'
          }`"
        >
          <CustomBanner />
        </li>
      </ul>
    </div>
    <ul class="slider">
      <li v-for="(_, i) in banners" :key="`indicator-${i}`">
        <button
          type="button"
          :class="`transition-all duration-100 slider-indicator ${
            i == activeBanner ? 'active' : ''
          }`"
          @click="goToBanner(i)"
        ></button>
      </li>
    </ul>
    <div class="absolute h-[333px] w-[100%] bg-cs-gray" />
    <div class="mx-global pb-[115px] pt-[90px] relative">
      <div class="flex items-center mb-[43px] justify-between">
        <div>
          <div class="w-[112px] h-[6px] bg-orange-primary" />
          <h2
            class="font-semibold text-white mt-3 text-base md:text-xl xl:text-2xl"
          >
            Discover Movies
          </h2>
        </div>
        <div>
          <CustomButton label="Popularity" />
          <CustomButton
            class="ml-[21px]"
            label="Release Date"
            variant="secondary"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto">
        <MovieCard v-for="(movie, i) in movies" :key="i" :movie="movie" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Movie } from "~/types/movie";

const movies: Movie[] = [
  {
    rating: 7.0,
    title: "Wonder Woman",
    year: 2020,
    path: "/img/wonder-woman.png",
  },
  {
    rating: 6.4,
    title: "Below Zero",
    year: 2021,
    path: "/img/below-zero.png",
  },
  {
    rating: 6.3,
    title: "The Little Things",
    year: 2021,
    path: "/img/little-thing.png",
  },
  {
    rating: 6.5,
    title: "Outside the Wire",
    year: 2021,
    path: "/img/outside-the-wire.png",
  },
  {
    rating: 5.1,
    title: "Black Water Abyss",
    year: 2020,
    path: "/img/black-water-abyss.png",
  },
  //
  {
    rating: 4.6,
    title: "Breach",
    year: 2021,
    path: "/img/breach.png",
  },
  {
    rating: 8.3,
    title: "Soul",
    year: 2020,
    path: "/img/soul.png",
  },
  {
    rating: 6.9,
    title: "Fast & Furious Presents: Hobbs & Shaw",
    year: 2019,
    path: "/img/fast-and-furious.png",
  },
  {
    rating: 7.6,
    title: "The Croods: A New Age",
    year: 2020,
    path: "/img/the-croods.png",
  },
  {
    rating: 6.3,
    title: "Vanguard",
    year: 2020,
    path: "/img/vanguard.png",
  },
];
const bannerCarousel = ref(null);
const activeBanner = ref<number>(0);
const goToBanner = (i: number) => {
  const carousel = document.getElementById("bannerCarousel");
  const bannerI = document.getElementById(`banner-${i}`);
  if (carousel && bannerI) {
    carousel.scrollTo({
      behavior: "smooth",
      left: (bannerI.offsetWidth / 1.5) * i,
    });
  }
  activeBanner.value = i;
};
const disableScroll = (b: boolean) => {
  if (!b) {
    document.body.style.overflowX = "auto";
  } else {
    document.body.style.overflowX = "hidden";
  }
};
const banners: string[] = ["1", "2", "3", "4", "5"];
</script>
<style scoped>
.slider-indicator {
  @apply h-3 w-3 rounded-full bg-[rgba(255,255,255,0.5)];
}
.slider-indicator.active {
  @apply h-[12px] w-[60px] bg-orange-primary rounded-full;
}
.slider {
  @apply mt-[40px] flex justify-center mb-[47px] space-x-4 cursor-pointer;
}
</style>
