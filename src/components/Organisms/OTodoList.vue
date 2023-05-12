<template>
  <div class="flex flex-col w-[40vw] h-screen bg-gray-50 justify-center p-8">
    <ACard>
      <MTodosInput v-model="todo" @on:enter="addTask" @on:click="addTask" />
      <MTodosFilter />
      <MTodosTasks />
    </ACard>
  </div>
</template>

<script setup lang="ts">
import MTodosFilter from "../Molecules/MTodosFilter.vue";
import MTodosInput from "../Molecules/MTodosInput.vue";
import MTodosTasks from "../Molecules/MTodosTasks.vue";
import ACard from "../Atoms/ACard.vue";
import type { ITask } from "@/models/task";

import { useTodosStore } from "@/stores/todos";
import { ref } from "vue";
const todo = ref("");
const store = useTodosStore();
function addTask(): void {
  const new_task: ITask = {
    content: todo.value,
    status: "uncompleted",
    is_removable: false,
  };
  store.addTask(new_task);
}
</script>
