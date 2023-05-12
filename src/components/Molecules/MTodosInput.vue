<template>
  <ATitle>To Do List</ATitle>
  <div class="flex h-[2em] w-full justify-between mt-4">
    <AInput
      class="mr-2"
      :value="modelValue"
      :placeholder="placeholder"
      @input="inputModel"
      @on:enter="$emit('on:enter')"
    />
    <AButton @on:click="$emit('on:click')"> Add </AButton>
  </div>
</template>

<script setup lang="ts">
import AButton from "../Atoms/AButton.vue";
import AInput from "../Atoms/AInput.vue";
import ATitle from "../Atoms/ATitle.vue";

const emit = defineEmits(["update:modelValue", "on:enter"]);

const inputModel = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};

defineProps({
  text: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  modelValue: {
    type: String,
    default: "",
  },
});
</script>
