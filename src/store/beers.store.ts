import { defineStore } from "pinia";

export const useStore = defineStore("beers", {
  state: () => {
    return {
      beers: [],
    };
  },
});
