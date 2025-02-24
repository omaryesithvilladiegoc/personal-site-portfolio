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
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
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
            height={100}
            style={{ width: "60%", height: "auto", margin: "0 auto" }}
            priority={false}
          />
        </div>

        <p>{tecnology.descripcion}</p>
      </div>
    </motion.div>
  );
}
