<template>
  <div class="flex flex-col w-full mt-4">
    <div
      class="flex justify-between items-end mb-2"
      v-for="todo in todos"
      :key="todo.id"
    >
      <AText>{{ todo.content }}</AText>
      <div class="flex justify-end">
        <ALabel
          class="mr-2"
          :done="todo.status == 'done' ? true : false"
          @click="$emit('on:label-click', todo.id)"
        >
          {{ todo.status }}
        </ALabel>
        <AButton danger @on:click="$emit('on:remove-click', todo.id)"
          >X</AButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITask } from "@/models/task";
import AText from "../Atoms/AText.vue";
import AButton from "../Atoms/AButton.vue";
import ALabel from "../Atoms/ALabel.vue";

defineProps({
  todos: { type: Array<ITask>, default: "" },
});
</script>
