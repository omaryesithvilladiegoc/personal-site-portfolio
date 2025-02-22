import React from "react";
import { Tecnology } from "../types";

export interface Props {
  children: React.ReactNode;
  tecnologies: Tecnology[];
}

export interface IFilterableTecnologies {
  filterWord: string;
  setFilterWord: React.Dispatch<React.SetStateAction<string>>;
  tecnologies: Tecnology[];
}
