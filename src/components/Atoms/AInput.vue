<template>
  <input
    class="w-full h-full p-2 border-2 border-gray-200 rounded focus:outline-blue-400"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @keydown.enter="$emit('on:enter')"
    @input="inputModel"
  />
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue", "on:enter"]);
defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const inputModel = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>
