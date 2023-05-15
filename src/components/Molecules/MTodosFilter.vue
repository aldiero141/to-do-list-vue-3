<template>
  <div class="flex w-full mt-2 justify-end items-end">
    <AText class="mr-2">Sort : </AText>
    <ASelect
      class="mr-4"
      :options="statuses"
      @on:change="$emit('on:sort', $event)"
    />
    <AText class="mr-2">Filter : </AText>
    <ASelect :options="statuses" @on:change="$emit('on:filter', $event)" />
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
