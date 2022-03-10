import { defineStore } from "pinia";
import { RegimensService } from "@/services/regimens.service";
import { Regimen } from "@/domain/entities/Regimen";

export const useRegimensStore = defineStore("beers", {
  state: () => ({
    regimens: <Regimen[]>[],
    regimenSelected: <Regimen | null>null,
  }),
  actions: {
    getRegimens() {
      RegimensService.getRegimens().then((res: any) => {
        this.regimens = res;
      });
    },
    setActiveRegimen(index: string) {
      this.regimenSelected = this.regimens[parseInt(index)];
    },
  },
});
