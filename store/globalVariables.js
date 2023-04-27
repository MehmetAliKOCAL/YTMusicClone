import { defineStore } from "pinia";

export const useGlobalVariablesStore = defineStore("globalVariables", {
  state: () => ({
    searchHistory: JSON.parse(localStorage.getItem("searchHistory")) || [],
  }),
  actions: {},
});
