<template>
  <button
    :class="`rounded-[32px] py-[6px] px-4 text-sm font-semibold text-white ${
      props.variant === 'primary' ? 'bg-[#FF0000]' : 'bg-[rgba(0,0,0,0.2)]'
    }`"
  >
    {{ props.label }}
  </button>
</template>
<script setup lang="ts">
import { PropType } from "vue";

type Variant = "primary" | "secondary";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<Variant>,
    required: false,
    default: "primary",
  },
});
</script>
