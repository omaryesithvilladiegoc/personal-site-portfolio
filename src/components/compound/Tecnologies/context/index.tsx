import { createContext, useContext } from "react";
import { IFilterableTecnologies } from "../interfaces";

export const FilterableTecnologiesContext = createContext<
  IFilterableTecnologies | undefined
>(undefined);

export function useContextFilterableTecnologies() {
  const context = useContext(FilterableTecnologiesContext);
  if (!context) throw new Error("Context required");
  return context;
}
