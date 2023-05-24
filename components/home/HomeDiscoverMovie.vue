<template>
  <div>
    <div class="absolute h-[333px] w-[100%] bg-cs-gray" />
    <div class="mx-global pb-[115px] pt-[90px] relative">
      <div
        class="flex flex-col md:flex-row md:items-center mb-[43px] md:justify-between"
      >
        <div>
          <div class="w-[112px] h-[6px] bg-orange-primary" />
          <h2
            class="font-semibold text-white mt-3 text-lg md:text-xl xl:text-2xl"
          >
            Discover Movies
          </h2>
        </div>
        <div class="mt-5 md:mt-0">
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
  </div>
</template>
<script setup lang="ts">
import { getDiscoverMovies } from "~/composables/useMovie";

const movies = getDiscoverMovies();
</script>
