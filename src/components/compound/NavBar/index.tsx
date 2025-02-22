"use client";
import styles from "./styles/navbar.module.css";
import { INavBarProps } from "./interfaces";
import { NavBarContext, useNavBarContext } from "./context";

function NavBar({ children, content }: INavBarProps) {
  return (
    <NavBarContext.Provider value={{ content }}>
      <nav className={styles.navBar}>
        <ol className={styles.navBarContent}>{children}</ol>
      </nav>
    </NavBarContext.Provider>
  );
}

// Start of Selection
NavBar.ButtonAbout = function ButtonAbout() {
  const context = useNavBarContext();
  const { ButtonAbout } = context.content;
  return <li>{ButtonAbout}</li>;
};

NavBar.ButtonRegister = function ButtonRegister() {
  const context = useNavBarContext();
  const { ButtonRegister } = context.content;
  return <li>{ButtonRegister}</li>;
};

export default NavBar;
