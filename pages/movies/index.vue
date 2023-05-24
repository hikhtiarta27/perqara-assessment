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
      <div class="flex flex-col md:flex-row items-start">
        <MovieCategory />
        <MovieDiscover />
      </div>
    </div>
  </section>
</template>
