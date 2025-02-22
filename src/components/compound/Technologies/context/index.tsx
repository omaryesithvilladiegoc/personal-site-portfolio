import { createContext, useContext } from "react";
import { IFilterableTechnologies } from "../interfaces";

export const FilterableTechnologiesContext = createContext<
  IFilterableTechnologies | undefined
>(undefined);

export function useContextFilterableTechnologies() {
  const context = useContext(FilterableTechnologiesContext);
  if (!context) throw new Error("Context required");
  return context;
}
