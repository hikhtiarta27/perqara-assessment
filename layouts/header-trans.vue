<template>
  <div>
    <CustomHeader
      :bg-color="`${
        !isScrolled ? 'bg-[rgba(255,255,255,0.05)]' : 'bg-cs-gray'
      }`"
      @show-sidebar="showSidebar"
    />
    <slot />
    <CustomFooter />
    <Sidebar ref="sidebarRef" />
  </div>
</template>
<script setup lang="ts">
import { handleSidebar } from "~/composables/useHeader";
const { showSidebar, sidebarRef } = handleSidebar();

const isScrolled = ref<boolean>(false);

const onScroll = () => {
  if (!isScrolled.value && window.scrollY > 50) {
    isScrolled.value = true;
  }

  if (window.scrollY === 0) {
    isScrolled.value = false;
  }
};

if (process.client) {
  window.addEventListener("scroll", onScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
</script>
