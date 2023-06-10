import { defineStore } from 'pinia';

export const useGlobalVariablesStore = defineStore('globalVariables', {
  state: () => ({
    showSongSettings: false,
    ScrollValueX: 0,
    ScrollValueY: 0,
    currentlyPlayingSong: { id: 'MonFx8pX6U4' },
  }),
});
