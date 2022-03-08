import { Regimen } from "@/domain/entities/Regimen";

export const RegimensService = {
  getRegimens(): Promise<Regimen> {
    return fetch("http://localhost:8080/regimens.json")
      .then((res) => res.json())
      .then((res) => res);
  },
};
