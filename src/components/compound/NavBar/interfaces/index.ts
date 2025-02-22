import { options } from "../types";

export interface INavBarOptionsContext {
  content: options;
}

export interface INavBarProps extends INavBarOptionsContext {
  children: React.ReactNode;
  content: options;
}
