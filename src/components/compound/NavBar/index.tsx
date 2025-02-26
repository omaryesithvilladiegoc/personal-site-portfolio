"use client";
import styles from "./styles/navbar.module.css";
import { INavBarProps } from "./interfaces";
import { NavBarContext, useNavBarContext } from "./context";
import { FaGithub } from "react-icons/fa";

function NavBar({ children, content }: INavBarProps) {
  return (
    <NavBarContext.Provider value={{ content }}>
      <nav className={styles.navBar}>
        <ol className={styles.navBarContent}>{children}</ol>
      </nav>
    </NavBarContext.Provider>
  );
}

NavBar.ButtonGitHubSource = function ButtonGitHubSource() {
  const context = useNavBarContext();
  const { ButtonGitHubSource } = context.content;
  return (
    <a
      href="https://github.com/omaryesithvilladiegoc/personal-site-portfolio"
      target="_blank"
      rel="noopener noreferrer"
    >
      <li className={styles.listStyle}>
        {" "}
        {ButtonGitHubSource}
        <FaGithub style={{ fontSize: "1.4rem" }} />
      </li>
    </a>
  );
};

NavBar.ButtonRegister = function ButtonRegister({
  outlined = false,
}: {
  outlined?: boolean;
}) {
  const context = useNavBarContext();
  const { ButtonRegister } = context.content;
  return (
    <li className={`${outlined ? "outlined" : ""} ${styles.listStyle}`}>
      {ButtonRegister}
    </li>
  );
};

export default NavBar;
