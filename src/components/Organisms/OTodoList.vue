<template>
  <div class="flex flex-col w-[40vw] h-screen bg-gray-50 justify-center p-8">
    <ACard>
      <MTodosInput v-model="todo" @on:enter="addTask" @on:click="addTask" />
      <MTodosFilter />
      <MTodosTasks
        :todos="todos"
        @on:label-click="toggleStatus"
        @on:remove-click="removeTask"
      />
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
import { storeToRefs } from "pinia";

const todo = ref("");
const store = useTodosStore();
const { todos } = storeToRefs(store);
const addTask = (): void => {
  const new_task: ITask = {
    id: todos.value.length + 1,
    content: todo.value,
    status: "pending",
  };
  todo.value = "";
  store.addTask(new_task);
};

const removeTask = (id: number): void => {
  store.removeTask(id);
};

const toggleStatus = (id: number): void => {
  store.setStatus(id);
};

store.initTask();
</script>
