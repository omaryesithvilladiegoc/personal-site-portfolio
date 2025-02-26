"use client";
import { motion } from "motion/react";
import styles from "./styles/header.module.css";
import { motionStyles } from "@/styles/project-styles";

const Header = () => {
  return (
    <section className={styles.headerSection}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <motion.h2 {...motionStyles} className={`${styles.title}`}>
            Omar Villadiego{" "}
          </motion.h2>
          <motion.h1 {...motionStyles} className={`${styles.subtitle}`}>
            Desarrollador Web Node Js
          </motion.h1>
        </div>
      </div>
    </section>
  );
};
export default Header;
