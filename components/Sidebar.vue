<template>
  <div
    :class="`lg:hidden fixed top-0 bottom-0 overflow-hidden left-0 right-0 transition-opacity duration-200 mt-[66px] ${
      isSidebarVisible ? 'opacity-100 z-[100]' : 'opacity-0 z-[-10]'
    }`"
  >
    <div :class="`bg-white h-screen transition-all w-[220px]`">
      <ul class="flex flex-col w-full">
        <li v-for="menu in menus" :key="menu" class="flex">
          <NuxtLink
            :onclick="showSidebar"
            class="px-[20px] font-semibold text-black text-sm uppercase hover:bg-gray-100 flex-1 py-3"
            :to="{ path: menu.toLowerCase() }"
          >
            <span>{{ menu }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div
      :class="`ml-[220px] absolute top-0 left-0 bottom-0 right-0 transition-all ${
        isSidebarVisible ? 'bg-[rgba(0,0,0,0.5)]' : 'bg-[rgba(0,0,0,0)]'
      }`"
      @click="showSidebar"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { menus } from "~/composables/useHeader";

const isSidebarVisible = ref(false);

const showSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

watch(isSidebarVisible, (_, newValue) => {
  disableScroll(!newValue);
});

defineExpose({
  showSidebar,
});

const disableScroll = (b: boolean) => {
  if (!b) {
    document.body.className = "overflow-y-auto";
  } else {
    document.body.className = "overflow-y-hidden lg:overflow-y-auto";
  }
};
</script>
