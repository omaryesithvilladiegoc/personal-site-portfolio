import { createContext, useContext } from "react";
import { INavBarOptionsContext } from "../interfaces";

export const NavBarContext = createContext<INavBarOptionsContext | undefined>(
  undefined
);
export const useNavBarContext = () => {
  const context = useContext(NavBarContext);
  if (!context) throw new Error("No hay contexto");
  return context;
};
