<template>
  <div class="py-[50px] bg-cs-gray-dark mx-global">
    <h3 class="uppercase text-white font-semibold text-sm mb-9">
      Recommendation Movies
    </h3>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto">
      <MovieCard
        v-for="(movie, i) in recommendationMovies"
        :key="i"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getRecommendationMovies } from "~/composables/useMovie";
const recommendationMovies = getRecommendationMovies();
</script>
