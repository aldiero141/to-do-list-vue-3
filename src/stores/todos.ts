import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { ITask } from "@/models/task";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<ITask[]>([]);
  const getTask = computed(() => todos.value);
  const initTask = () => {
    todos.value?.push(
      {
        id: 1,
        content: "Mandi",
        status: "done",
      },
      {
        id: 2,
        content: "Makan",
        status: "pending",
      },
      {
        id: 3,
        content: "Bersih Bersih",
        status: "pending",
      },
      {
        id: 4,
        content: "Cuci Baju",
        status: "done",
      }
    );
  };

  const addTask = (arg: ITask) => {
    todos.value?.push(arg);
  };
  const removeTask = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };
  const setStatus = (id: number) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    todos.value[index].status =
      todos.value[index].status === "done" ? "pending" : "done";
  };

  return { todos, getTask, initTask, addTask, removeTask, setStatus };
});
