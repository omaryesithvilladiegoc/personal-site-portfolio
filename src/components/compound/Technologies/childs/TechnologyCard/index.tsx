import { motion } from "motion/react";
import Image from "next/image";
import styles from "../../styles/index.module.css";
import { Technology } from "../../types";

export default function TechnologyCard({
  tecnology,
}: {
  tecnology: Technology;
}) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.tecnologyCard}
    >
      <div className={styles.contentCardTecnology}>
        <header className={styles.contentCardHeader}>
          <h4>{tecnology.nombre}</h4>
          <h5>{tecnology.categoria}</h5>
        </header>

        <div className={styles.imageContainer}>
          <Image
            src={tecnology.imgUrl}
            loading="lazy"
            alt={`Logo de ${tecnology.nombre}`}
            width={500}
            height={300}
            style={{ width: "100%", height: "auto" }}
            priority={false}
          />
        </div>

        <p>{tecnology.descripcion}</p>
      </div>
    </motion.div>
  );
}
