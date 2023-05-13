<template>
  <button
    class="px-[0.875em] h-[2em] flex flex-column items-center text-white rounded"
    :class="{
      'bg-blue-400': !danger,
      'bg-red-400': danger,
    }"
    @click.stop="$emit('on:click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  danger: { type: Boolean, default: false },
});
</script>
