<template>
  <div class="flex-1">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
      <MovieCard
        v-for="(movie, i) in paginationMovies"
        :key="i"
        :movie="movie"
      />
    </div>
    <div class="mt-10 flex justify-center">
      <CustomButton label="Load More" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { getPaginationMovies } from "~/composables/useMovie";

const paginationMovies = getPaginationMovies();
</script>
