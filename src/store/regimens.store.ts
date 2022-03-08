import { Regimen } from "@/domain/entities/Regimen";
import { defineStore } from "pinia";

export const useStore = defineStore("beers", {
  state: () => ({
    regimens: <Regimen[]>[],
    regimenSelected: <Regimen | null>null,
  }),
});
