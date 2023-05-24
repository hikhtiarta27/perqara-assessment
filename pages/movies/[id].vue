<template>
  <section class="relative bg-cs-gray-dark">
    <div class="w-full h-[150px] md:h-[340px] lg:h-[420px]">
      <NuxtImg
        loading="lazy"
        src="/img/bg-wonder-woman.png"
        fit="cover"
        alt="wonder-women.png"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
        preset="default"
      />
    </div>
    <div class="relative">
      <div
        class="absolute z-10 ml-[20px] md:ml-[60px] lg:ml-[80px] xl:ml-[120px] top-0"
      >
        <div class="flex flex-row items-start w-[150px] md:w-[220px]">
          <NuxtImg
            preset="default"
            loading="lazy"
            src="/img/wonder-woman.png"
            alt="wonder-women.png"
            sizes="xs:150px md:220px lg:440px"
          />
        </div>
      </div>
      <div class="ml-[190px] md:ml-[310px] lg:ml-[330px] xl:ml-[370px] mb-8">
        <p class="text-white font-medium text-sm md:text-lg">2022</p>
        <h1 class="text-white font-semibold text-lg md:text-3xl lg:text-4xl">
          Wonder Woman 1984
        </h1>
        <p class="mt-1 text-white text-sm font-medium">
          Fantasy, Action, Adventure
        </p>
      </div>
      <div
        class="meta-container relative h-[80px] md:h-[80px] bg-[rgba(0,0,0,0.5)]"
      >
        <div
          class="flex flex-col md:flex-row md:pr-[120px] ml-[190px] md:ml-[290px] lg:ml-[310px] xl:ml-[340px] h-full py-[20px] overflow-x-scroll"
        >
          <div class="meta-section flex-2">
            <div
              class="flex flex-row-reverse md:flex-row items-center justify-end"
            >
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
              <h5
                class="font-semibold text-white-soft ml-[10px] text-sm md:text-2xl xl:text-4xl mr-2 md:mr-0"
              >
                7.0
              </h5>
              <div class="ml-0 md:ml-3">
                <h5 class="meta-title">USER SCORES</h5>
                <h5 class="meta-desc">3621 VOTES</h5>
              </div>
            </div>
          </div>
          <div class="divider" />
          <div class="meta-section flex-1">
            <h5 class="meta-title">STATUS</h5>
            <h5 class="meta-desc">RELEASED</h5>
          </div>
          <div class="divider" />
          <div class="meta-section flex-1">
            <h5 class="meta-title">LANGUAGE</h5>
            <h5 class="meta-desc">ENGLISH</h5>
          </div>
          <div class="divider" />
          <div class="meta-section flex-1">
            <h5 class="meta-title">BUDGET</h5>
            <h5 class="meta-desc">$200,000,000.00</h5>
          </div>
          <div class="divider" />
          <div class="meta-section flex-1">
            <h5 class="meta-title">PRODUCTION</h5>
            <h5 class="meta-desc">DC Entertainment</h5>
          </div>
        </div>
      </div>
      <MovieReview />
      <RecommendationMovie />
    </div>
  </section>
</template>
<script setup lang="ts">
import MovieReview from "~/components/movie-detail/MovieReview.vue";
import RecommendationMovie from "~/components/movie-detail/RecommendationMovie.vue";

definePageMeta({
  layout: "header-trans",
});
</script>
<style scoped>
.meta-title {
  @apply text-[rgba(255,255,255,0.5)] text-xs font-medium;
}
.meta-desc {
  @apply text-white text-xs font-medium mt-[3px];
}
.meta-section {
  @apply flex flex-col md:px-[20px] xl:px-[34px] border-[rgba(255,255,255,0.2)] justify-center mt-3 md:mt-0;
}
.divider {
  @apply w-[1px] bg-[rgba(255,255,255,0.2)];
}
</style>
