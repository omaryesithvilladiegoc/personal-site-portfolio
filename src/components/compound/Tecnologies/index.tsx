"use client";
import React, { useState } from "react";
import styles from "./styles/index.module.css";
import { MdNavigateNext } from "react-icons/md";
import { Props } from "./interfaces";
import { MdOutlineNavigateBefore } from "react-icons/md";

import {
  FilterableTecnologiesContext,
  useContextFilterableTecnologies,
} from "./context";
import Link from "next/link";
import TecnologyCard from "./childs/TecnologyCard";

function FilterableTecnologies({
  tecnologies,
  children,
}: Props): React.ReactNode {
  const [filterWord, setFilterWord] = useState<string>("");

  return (
    <FilterableTecnologiesContext.Provider
      value={{ filterWord, setFilterWord, tecnologies }}
    >
      {children}
    </FilterableTecnologiesContext.Provider>
  );
}

FilterableTecnologies.SearchBar = function SearchBar({
  showButtonMoreTecnologies = false,
  showButtonBack,
}: {
  showButtonMoreTecnologies?: boolean;
  showButtonBack?: boolean;
}) {
  const { filterWord, setFilterWord } = useContextFilterableTecnologies();

  return (
    <section>
      <form className={styles.formTecnologies}>
        <section className={styles.descriptionContent}>
          <h2>Descubre mis tecnologías favoritas</h2>
          <p>
            A lo largo de mi trayectoria, he aprendido tecnologías que me
            permiten evolucionar y ampliar mis conocimientos en el desarrollo
            web, descubre entre tecnologías de{" "}
            <strong>frontend, backend, herramientas, lenguajes</strong>
          </p>
        </section>

        <div className={styles.contentInput}>
          <input
            className={styles.inputTecnology}
            type="text"
            value={filterWord}
            placeholder="click para buscar tecnología..."
            onChange={(e) => setFilterWord(e.target.value)}
          />
        </div>
      </form>
      {showButtonMoreTecnologies && (
        <div className={styles.showMoreTecnologies}>
          <a href="/tecnologies">Ver más tecnologías</a>
          <MdNavigateNext />
        </div>
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
  numberOfDataRender = 5,
}: {
  numberOfDataRender?: number;
}) {
  const { filterWord, tecnologies } = useContextFilterableTecnologies();
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
