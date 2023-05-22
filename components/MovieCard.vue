<template>
  <div
    :key="props.movie.title"
    class="block"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="relative">
      <div class="absolute right-0">
        <h6
          class="font-bold text-white py-[5px] px-[10px] bg-cs-gray-dark opacity-[80%]"
        >
          {{ props.movie.rating.toFixed(1) }}
        </h6>
      </div>
      <NuxtImg :src="props.movie.path" />
      <div class="img-overlay">
        <div
          class="flex flex-col h-full justify-between py-[70px] items-center"
        >
          <div class="flex flex-row">
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
            <h5 class="font-semibold text-2xl text-white ml-[10px]">
              {{ props.movie.rating }}
            </h5>
          </div>
          <h3 class="font-semibold text-[18px] text-white">Action</h3>
          <CustomButton label="View" />
        </div>
      </div>
    </div>
    <h4
      class="mt-[13px] mb-[3px] text-base font-semibold text-white line-clamp-1"
    >
      {{ props.movie.title }}
    </h4>
    <h6 class="text-sm font-normal text-[#929292]">{{ props.movie.year }}</h6>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { Movie } from "~/types/movie";

const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
    required: true,
  },
});

const isHover = ref<boolean>(false);
</script>
<style scoped>
.img-overlay {
  @apply absolute top-0 left-0 right-0 bottom-0 z-10 bg-black transition-colors ease-in duration-100 opacity-0 hover:opacity-80;
}
</style>
