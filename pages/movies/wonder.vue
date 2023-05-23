<template>
  <section class="relative bg-cs-gray-dark">
    <div class="w-full h-[300px] md:h-[340px] lg:h-[420px]">
      <NuxtImg src="/img/bg-wonder-woman.png" class="w-full" />
    </div>
    <div class="relative">
      <div
        class="absolute z-10 ml-[40px] md:ml-[60px] lg:ml-[80px] xl:ml-[120px] top-0"
      >
        <div class="flex flex-row items-start">
          <NuxtImg src="/img/wonder-woman.png" width="220" height="330" />
        </div>
      </div>
      <div class="ml-[260px] md:ml-[310px] lg:ml-[330px] xl:ml-[370px] mb-8">
        <p class="text-white font-medium text-lg">2022</p>
        <h1 class="text-white font-semibold text-lg md:text-3xl lg:text-4xl">
          Wonder Woman 1984
        </h1>
        <p class="mt-1 text-white text-sm font-medium">
          Fantasy, Action, Adventure
        </p>
      </div>
      <div class="meta-container relative h-[80px] bg-[rgba(0,0,0,0.5)]">
        <div
          class="flex flex-row justify-around pr-[120px] ml-[330px] h-full py-[20px]"
        >
          <div class="meta-section">
            <div class="flex flex-row items-center">
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0815 1.13274C13.4286 0.326776 14.5714 0.326779 14.9185 1.13274L18.0912 8.50027C18.236 8.83645 18.5529 9.06667 18.9173 9.10047L26.9047 9.84128C27.7785 9.92232 28.1316 11.0091 27.4724 11.5883L21.4459 16.8825C21.1709 17.124 21.0499 17.4966 21.1303 17.8536L22.894 25.679C23.087 26.535 22.1625 27.2067 21.4079 26.7587L14.5106 22.6632C14.1958 22.4763 13.8042 22.4763 13.4894 22.6632L6.59208 26.7587C5.83755 27.2067 4.91305 26.535 5.10599 25.679L6.86967 17.8536C6.95015 17.4965 6.82911 17.124 6.55413 16.8825L0.527634 11.5883C-0.131628 11.0091 0.2215 9.92232 1.09527 9.84128L9.08266 9.10047C9.44711 9.06667 9.76399 8.83645 9.90876 8.50027L13.0815 1.13274Z"
                  fill="#FFB802"
                />
              </svg>
              <h5 class="font-semibold text-[36px] text-white-soft ml-[10px]">
                7.0
              </h5>
              <div class="ml-3">
                <h5 class="meta-title">USER SCORES</h5>
                <h5 class="meta-desc">3621 VOTES</h5>
              </div>
            </div>
          </div>
          <div class="divider" />
          <div class="meta-section">
            <h5 class="meta-title">STATUS</h5>
            <h5 class="meta-desc">RELEASED</h5>
          </div>
          <div class="divider" />
          <div class="meta-section">
            <h5 class="meta-title">LANGUAGE</h5>
            <h5 class="meta-desc">ENGLISH</h5>
          </div>
          <div class="divider" />
          <div class="meta-section">
            <h5 class="meta-title">BUDGET</h5>
            <h5 class="meta-desc">$200,000,000.00</h5>
          </div>
          <div class="divider" />
          <div class="meta-section">
            <h5 class="meta-title">PRODUCTION</h5>
            <h5 class="meta-desc">DC Entertainment</h5>
          </div>
        </div>
      </div>
      <section class="bg-white pt-8 mx-global">
        <div class="ml-[250px]">
          <h5 class="text-[#FF0000] font-semibold text-sm uppercase">
            Overview
          </h5>
          <p class="text-black text-sm max-w-[526px] leading-7 mt-2">
            Wonder Woman comes into conflict with the Soviet Union during the
            Cold War in the 1980s and finds a formidable foe by the name of the
            Cheetah.
          </p>
        </div>
        <div class="mt-10 pb-[58px]">
          <h5 class="text-[#FF0000] font-semibold text-sm uppercase">
            Reviews
          </h5>
          <div class="grid grid-cols-2 gap-5 mt-6">
            <ReviewCard :review="reviews[0]" />
            <ReviewCard :review="reviews[1]" />
          </div>
        </div>
      </section>
      <div class="py-[50px] bg-cs-gray-dark mx-global">
        <h3 class="uppercase text-white font-semibold text-sm mb-9">
          Recommendation Movies
        </h3>
        <div
          class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto"
        >
          <MovieCard v-for="(movie, i) in movies" :key="i" :movie="movie" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Movie } from "~/types/movie";
import { Review } from "~/types/review";
definePageMeta({
  layout: "header-trans",
});

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
];

const reviews: Review[] = [
  {
    date: "December 18, 2020",
    name: "Switch.",
    rating: 7.0,
    comment: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos`,
  },
  {
    comment: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com. <br> The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only`,
    date: "December 18, 2020",
    name: "msbreviews",
    rating: 8.0,
  },
];
</script>
<style scoped>
.meta-title {
  @apply text-[rgba(255,255,255,0.5)] text-xs font-medium;
}
.meta-desc {
  @apply text-white text-xs font-medium mt-[3px];
}
.meta-section {
  @apply flex flex-col px-[34px] border-[rgba(255,255,255,0.2)] justify-center;
}
.divider {
  @apply w-[1px] bg-[rgba(255,255,255,0.2)];
}
</style>
