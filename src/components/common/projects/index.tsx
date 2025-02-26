import React from "react";
import styles from "./style/styles.module.css"; // Importar el archivo CSS
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import { motionStyles } from "@/styles/project-styles";

const ProjectCard: React.FC<{
  title: string;
  description: string;
  extend?: boolean;
}> = ({ title, description, extend = false }) => {
  return (
    <div
      className={`${extend ? styles.feature : ""} ${
        styles.containerCardWraper
      }`}
    >
      <div className={styles.contentHeaderProject}>
        <h2 className={styles.titleCard}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={`${styles.containerCard}`}></div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <motion.h2 {...motionStyles} className={styles.titleGeneral}>
          Mis proyectos
        </motion.h2>
        <motion.p {...motionStyles}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus autem
          sunt ut consequatur dolorum ipsa labore maiores dolor alias in veniam
          possimus dolore illo, ipsam ad eum quas delectus suscipit!
        </motion.p>
        <motion.a
          target="_blank"
          href="https://github.com/omaryesithvilladiego"
          {...motionStyles}
        >
          <span> Mi Github</span> <FaArrowRight />{" "}
        </motion.a>
      </div>

      <div className={styles.cardsContainer}>
        <ProjectCard
          extend
          title="Dogtel"
          description="Una aplicación para conectar cuidadores de perros con dueños de perros para agendar citas para su cuidado."
        />
        <ProjectCard
          title="E-commerce App"
          description="Una aplicación de e-commerce hecha con NestJS."
        />
        <ProjectCard
          title="Movie App"
          description="Una aplicación de películas hecha con HTML, CSS y JavaScript puro."
        />
      </div>
    </div>
  );
};

export default Projects;
