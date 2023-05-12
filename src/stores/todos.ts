import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { ITask } from "@/models/task";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<ITask[]>();
  const getTask = computed(() => todos.value);

  const initTask = () => {
    setTimeout(() => {
      todos.value?.push(
        {
          content: "Mandi",
          status: "completed",
          is_removable: true,
        },

        {
          content: "Makan",
          status: "uncompleted",
          is_removable: false,
        },
        {
          content: "Bersih Bersih",
          status: "completed",
          is_removable: true,
        },
        {
          content: "Cuci Baju",
          status: "uncompleted",
          is_removable: false,
        }
      );
    }, 1000);
  };

  const addTask = (arg: ITask) => {
    todos.value?.push(arg);
  };
  const removeTask = (index: number) => {
    todos.value?.splice(index, 1);
  };
  return { todos, initTask, getTask, addTask, removeTask };
});
