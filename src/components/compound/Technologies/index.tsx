"use client";
import React, { useState } from "react";
import styles from "./styles/index.module.css";
import { MdNavigateNext } from "react-icons/md";
import { Props } from "./interfaces";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { motion } from "motion/react";
import {
  FilterableTechnologiesContext,
  useContextFilterableTechnologies,
} from "./context";
import Link from "next/link";
import TecnologyCard from "./childs/TechnologyCard";

function FilterableTecnologies({
  tecnologies,
  children,
}: Props): React.ReactNode {
  const [filterWord, setFilterWord] = useState<string>("");

  return (
    <FilterableTechnologiesContext.Provider
      value={{ filterWord, setFilterWord, tecnologies }}
    >
      {children}
    </FilterableTechnologiesContext.Provider>
  );
}

const motionStyles = {
  initial: { y: "9rem", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  exit: { y: 40, opacity: 0 },
  transition: { duration: 0.5 },
};

FilterableTecnologies.SearchBar = function SearchBar({
  showButtonMoreTecnologies = false,
  showButtonBack,
}: {
  showButtonMoreTecnologies?: boolean;
  showButtonBack?: boolean;
}) {
  const { filterWord, setFilterWord } = useContextFilterableTechnologies();

  return (
    <section>
      <form className={styles.formTecnologies}>
        <section className={styles.descriptionContent}>
          <motion.h2 {...motionStyles}>
            Descubre mis tecnologías favoritas
          </motion.h2>
          <motion.p {...motionStyles}>
            A lo largo de mi trayectoria, he aprendido tecnologías que me
            permiten evolucionar y ampliar mis conocimientos en el desarrollo
            web, descubre entre tecnologías de{" "}
            <strong>frontend, backend, herramientas, lenguajes</strong>
          </motion.p>
        </section>

        <motion.div {...motionStyles} className={styles.contentInput}>
          <input
            className={styles.inputTecnology}
            type="text"
            value={filterWord}
            placeholder="click para buscar tecnología..."
            onChange={(e) => setFilterWord(e.target.value)}
          />
        </motion.div>
      </form>
      {showButtonMoreTecnologies && (
        <motion.div className={styles.showMoreTecnologies}>
          <a href="/tecnologies">Ver más tecnologías</a>
          <MdNavigateNext />
        </motion.div>
      )}
      {showButtonBack && (
        <div className={styles.showButtonBack}>
          <MdOutlineNavigateBefore />
          <Link href={"/"}>Volver</Link>
        </div>
      )}
    </section>
  );
};

FilterableTecnologies.TecnologiesGrid = function TecnologiesGrid({
  numberOfDataRender = 4,
}: {
  numberOfDataRender?: number;
}) {
  const { filterWord, tecnologies } = useContextFilterableTechnologies();
  const filteredTecnologies = tecnologies.filter((tec) =>
    tec.nombre.toLowerCase().includes(filterWord.toLowerCase())
  );

  return (
    <div className={styles.tecnologiesGrid}>
      {filteredTecnologies.length > 0 ? (
        filteredTecnologies
          .slice(0, numberOfDataRender)
          .map((tecnology) => (
            <TecnologyCard tecnology={tecnology} key={tecnology.nombre} />
          ))
      ) : (
        <div className={styles.noTecnologyMessage}>
          <h2>No se encontró la tecnología</h2>
          <p>Intenta ajustar tu búsqueda o explora otras categorías.</p>
        </div>
      )}
    </div>
  );
};

export default FilterableTecnologies;
