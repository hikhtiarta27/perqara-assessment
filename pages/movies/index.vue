<template>
  <section class="relative bg-cs-gray-dark mt-[66px]">
    <div class="absolute h-[323px] w-[100%] bg-cs-gray" />
    <div class="mx-global pb-[115px] pt-[90px] relative">
      <div class="flex items-center mb-[43px] justify-between">
        <div>
          <div class="w-[112px] h-[6px] bg-orange-primary" />
          <h2
            class="font-semibold text-white mt-3 text-xl md:text-2xl xl:text-3xl"
          >
            Movies
          </h2>
        </div>
      </div>
      <div class="flex flex-row items-start">
        <div
          class="mr-[30px] rounded-lg bg-black w-[160px] md:w-[220px] lg:w-[240px] py-5 space-y-[18px] cta-bg"
        >
          <h5 class="font-semibold text-base text-white-soft px-[18px]">
            Sort Result By
          </h5>
          <div class="w-full h-[1px] bg-[rgba(255,255,255,0.07)]" />
          <div class="px-[18px] my-[10px] w-full">
            <div class="relative">
              <button
                type="button"
                class="bg-[rgba(224,224,224,0.13)] text-sm text-white-soft py-[10px] pl-5 pr-3 rounded justify-between flex flex-row w-full items-center"
                @click="showDropdownMenu"
              >
                <span class="mr-1">Dropdown</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
              <ul
                :class="`absolute space-y-2 top-10 bg-[#111419] p-[15px] w-full rounded-br-lg rounded-bl-lg ${
                  isShowDropdownMenu ? 'block' : 'hidden'
                }`"
              >
                <li v-for="dm in dropdownMenu" :key="dm">
                  <span class="text-[13px] text-white">{{ dm }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full h-[1px] bg-[rgba(255,255,255,0.07)]" />
          <h5 class="font-semibold text-base text-white-soft px-[18px]">
            Genre
          </h5>
          <div class="w-full h-[1px] bg-[rgba(255,255,255,0.07)]" />
          <div class="space-y-4">
            <div
              v-for="(cb, i) in checkboxes"
              :key="cb"
              class="flex flex-row items-center justify-between px-[18px]"
            >
              <label :for="`checkbox-${i}`" class="text-sm text-white">{{
                cb
              }}</label>
              <input
                :id="`checkbox-${i}`"
                type="checkbox"
                :value="cb"
                class="cb-bg"
              />
            </div>
          </div>
        </div>
        <!-- content -->
        <div class="flex-1">
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto"
          >
            <MovieCard v-for="(movie, i) in movies" :key="i" :movie="movie" />
          </div>
          <div class="mt-10 flex justify-center">
            <CustomButton label="Load More" />
          </div>
        </div>
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
const checkboxes: string[] = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
];
const isShowDropdownMenu = ref(false);
const showDropdownMenu = () => {
  isShowDropdownMenu.value = !isShowDropdownMenu.value;
};
const dropdownMenu: string[] = [
  "Popularity Ascending",
  "Popularity Descending",
  "Release Date Ascending",
  "Release Date Descending",
  "Rating Ascending",
  "Rating Descending",
];
</script>
<style scoped>
.cta-bg {
  background: linear-gradient(180deg, #0e1723 0%, rgba(30, 35, 42, 0) 100%);
}
.cb-bg {
  accent-color: #e74c3c;
}
</style>
