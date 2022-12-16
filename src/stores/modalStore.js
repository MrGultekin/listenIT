import { defineStore } from "pinia";

export const useModelStore = defineStore("modal", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    toggleAuthModal() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },
  },
});
