<template>
  <div class="relative bg-cs-gray-dark">
    <div class="absolute h-[333px] w-[100%] bg-cs-gray" />
    <!-- separator -->
    <div class="px-[120px] pb-[115px] pt-[90px] relative">
      <div class="flex items-center mb-[43px] justify-between">
        <div>
          <div class="w-[112px] h-[6px] bg-[#E74C3C]" />
          <h2 class="font-semibold text-2xl text-white mt-3">
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
      <div class="grid grid-cols-5 gap-6 mx-auto">
        <MovieCard v-for="(movie, i) in movies" :key="i" :movie="movie" />
      </div>
    </div>
  </div>
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
</script>
