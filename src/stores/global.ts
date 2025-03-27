import { acceptHMRUpdate, defineStore } from "pinia";

const useGlobalStore = defineStore("global", {
  state: () => ({
    isAppLoading: false,
    isAppLoaded: true
  }),

  actions: {
   toggleAppLoading(val: boolean) {
     this.isAppLoading = val;
   },
   toggleAppLoadedState(val: boolean) {
     this.isAppLoaded = val;
   }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}

export { useGlobalStore };
