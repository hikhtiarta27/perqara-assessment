<template>
  <section class="bg-white pt-8 mx-global">
    <div class="mt-5 md:mt-0 md:ml-[250px]">
      <h5 class="text-[#FF0000] font-semibold text-sm uppercase">Overview</h5>
      <p
        class="text-black text-xs md:text-sm max-w-[526px] leading-6 md:leading-7 mt-2"
      >
        Wonder Woman comes into conflict with the Soviet Union during the Cold
        War in the 1980s and finds a formidable foe by the name of the Cheetah.
      </p>
    </div>
    <div class="mt-10 pb-[58px]">
      <h5 class="text-[#FF0000] font-semibold text-sm uppercase">Reviews</h5>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mt-6">
        <ReviewCard :review="reviews[0]" />
        <ReviewCard :review="reviews[1]" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Review } from "~/types/review";

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
