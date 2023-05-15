import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { ITask } from "@/models/task";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<ITask[]>([]);
  const filter = ref("");
  const getTask = computed(() => todos.value);
  const getDoneTask = computed(() =>
    todos.value.filter((todo) => todo.status == "done")
  );
  const getPendingTask = computed(() =>
    todos.value.filter((todo) => todo.status == "pending")
  );
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

  const sortTaskByStatus = (status: string) => {
    if (status == "done") {
      todos.value.sort(function (a, b) {
        if (a.status < b.status) {
          return -1;
        }
        if (a.status > b.status) {
          return 1;
        }
        return 0;
      });
    }
    if (status == "pending") {
      todos.value.sort(function (a, b) {
        if (a.status > b.status) {
          return -1;
        }
        if (a.status < b.status) {
          return 1;
        }
        return 0;
      });
    }
    if (status == "reset") {
      todos.value.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    }
  };

  const filterTaskByStatus = (status: string) => {
    filter.value = status;
  };

  return {
    todos,
    filter,
    getTask,
    getDoneTask,
    getPendingTask,
    initTask,
    addTask,
    removeTask,
    setStatus,
    sortTaskByStatus,
    filterTaskByStatus,
  };
});
