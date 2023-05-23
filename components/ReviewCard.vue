<template>
  <div
    class="drop-shadow-md rounded-[14px] bg-[#F9F9F9] h-[284px] p-6 flex flex-col"
  >
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-row items-center">
        <div class="rounded-full bg-[#1E232B36] w-[48px] h-[48px]"></div>
        <div class="flex flex-col ml-[18px]">
          <h5 class="font-bold text-sm uppercase">{{ props.review.name }}</h5>
          <span class="text-xs text-[#666666]">{{ props.review.date }}</span>
        </div>
      </div>
      <div
        class="bg-[#C4C4C447] px-2 lg:px-3 rounded-md flex flex-row items-center"
      >
        <div class="w-[17px] h-[17px] mr-2">
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
        <h5
          class="font-semibold text-black text-base md:text-lg lg:text-xl xl:text-3xl"
        >
          {{ props.review.rating.toFixed(1) }}
        </h5>
      </div>
    </div>
    <div class="overflow-hidden">
      <p
        class="text-xs md:text-sm italic mt-6 text-black md:line-clamp-[7] lg:line-clamp-[7]"
      >
        {{ props.review.comment }}
      </p>
    </div>
    <span class="text-xs md:text-sm italic text-orange-primary underline"
      >read the rest.</span
    >
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { Review } from "~/types/review";

const props = defineProps({
  review: {
    type: Object as PropType<Review>,
    required: true,
  },
});
</script>
