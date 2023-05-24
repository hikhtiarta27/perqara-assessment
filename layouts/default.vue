<template>
  <div>
    <CustomHeader @show-sidebar="showSidebar" />
    <slot />
    <CustomFooter />
    <Sidebar ref="sidebarRef" />
  </div>
</template>
<script setup lang="ts">
import { handleSidebar } from "~/composables/useHeader";
const { showSidebar, sidebarRef } = handleSidebar();
</script>
