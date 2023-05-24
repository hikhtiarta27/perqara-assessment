<template>
  <div
    class="bg-black flex flex-row h-[234px] md:h-[324px] w-screen md:w-[540px]"
  >
    <div class="relative">
      <div class="w-[174px] md:w-[244px] absolute top-[-7.5%]">
        <NuxtImg
          sizes="xs:174px md:244px lg:488px"
          loading="lazy"
          preset="default"
          :src="props.banner.path"
          :alt="props.banner.title"
        />
      </div>
    </div>
    <div
      class="py-[25px] px-6 ml-[174px] md:ml-[246px] flex flex-col overflow-hidden"
    >
      <div class="flex flex-row items-center">
        <div class="w-4 h-4">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0815 1.13274C13.4286 0.326776 14.5714 0.326779 14.9185 1.13274L18.0912 8.50027C18.236 8.83645 18.5529 9.06667 18.9173 9.10047L26.9047 9.84128C27.7785 9.92232 28.1316 11.0091 27.4724 11.5883L21.4459 16.8825C21.1709 17.124 21.0499 17.4966 21.1303 17.8536L22.894 25.679C23.087 26.535 22.1625 27.2067 21.4079 26.7587L14.5106 22.6632C14.1958 22.4763 13.8042 22.4763 13.4894 22.6632L6.59208 26.7587C5.83755 27.2067 4.91305 26.535 5.10599 25.679L6.86967 17.8536C6.95015 17.4965 6.82911 17.124 6.55413 16.8825L0.527634 11.5883C-0.131628 11.0091 0.2215 9.92232 1.09527 9.84128L9.08266 9.10047C9.44711 9.06667 9.76399 8.83645 9.90876 8.50027L13.0815 1.13274Z"
              fill="#FFB802"
            />
          </svg>
        </div>
        <h5 class="font-bold text-lg text-white ml-[10px]">
          {{ props.banner.rating }}
        </h5>
      </div>
      <h1 class="font-medium text-white text-base md:text-[28px] mt-1 mb-2">
        {{ props.banner.title }}
      </h1>
      <div class="flex flex-row items-center">
        <span class="text-white text-xs md:text-base font-normal">{{
          props.banner.year
        }}</span>
        <div
          class="w-[7px] h-[7px] bg-[rgba(255,255,255,0.5)] rounded-full mx-2"
        />
        <span class="text-white text-xs md:text-base font-normal">{{
          props.banner.genre
        }}</span>
      </div>
      <p class="text-xs text-white mt-3 font-normal">
        {{ props.banner.desc }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { Movie } from "~/types/movie";

const props = defineProps({
  banner: {
    type: Object as PropType<Movie>,
    required: true,
  },
});
</script>
