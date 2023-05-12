import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref(0);
  const getTodos = computed(() => todos.value);

  return { todos, getTodos };
});
