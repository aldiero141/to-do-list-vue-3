<template>
  <div
    class="flex items-center justify-center text-l text-left capitalize h-[2em] w-[6em] px-[0.875em] border rounded cursor-pointer"
    :class="{
      'border-green-600 text-green-600 hover:bg-green-100': done,
      'border-orange-600 text-orange-500 hover:bg-orange-100': !done,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  done: { type: Boolean, default: false },
});
</script>
