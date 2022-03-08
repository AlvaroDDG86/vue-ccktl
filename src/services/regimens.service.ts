import { Regimen } from "@/domain/entities/Regimen";

import axios from "axios";

export const RegimensService = {
  getRegimens(): Promise<Regimen[]> {
    return axios
      .get("http://localhost:8080/regimens.json")
      .then((res: any) => res);
  },
};
