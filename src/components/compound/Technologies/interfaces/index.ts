import React from "react";
import { Technology } from "../types";

export interface Props {
  children: React.ReactNode;
  tecnologies: Technology[];
}

export interface IFilterableTechnologies {
  filterWord: string;
  setFilterWord: React.Dispatch<React.SetStateAction<string>>;
  tecnologies: Technology[];
}
