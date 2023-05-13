<template>
  <div class="flex w-full mt-2 justify-end items-end">
    <AText class="mr-2">Sort status : </AText>
    <ASelect :options="statuses" @on:change="$emit('on:change', $event)" />
  </div>
</template>

<script setup lang="ts">
import ASelect from "../Atoms/ASelect.vue";
import AText from "../Atoms/AText.vue";

// const sortTask = (status: string) => {
//   $emit.
// };

defineProps({
  statuses: { type: Array, default: [] },
});
</script>
