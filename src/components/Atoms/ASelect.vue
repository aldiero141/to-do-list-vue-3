<template>
  <select
    class="border capitalize w-[6em] text-center"
    name="status"
    id="status"
    @change="$emit('on:change', model)"
    v-model="model"
  >
    <option v-for="option in options" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  options: { type: Array, default: [] },
});
const model = ref("");
</script>
