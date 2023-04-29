import { defineStore } from "pinia";

export const useGlobalVariablesStore = defineStore("globalVariables", {
  state: () => ({
    showSongSettings: false,
  }),
  actions: {},
});
