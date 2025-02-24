"use client";
import FilterableTecnologies from "@/components/compound/Technologies";
import { tecnologias_favoritas } from "@/data/tecnologias";
import React from "react";
import styles from "./styles/styles.module.css";

const SimplePage: React.FC = () => {
  return (
    <div className={styles.containerTechnologies}>
      <FilterableTecnologies tecnologies={tecnologias_favoritas}>
        <FilterableTecnologies.SearchBar showButtonBack />
        <FilterableTecnologies.TecnologiesGrid
          numberOfDataRender={tecnologias_favoritas.length - 1}
        />
      </FilterableTecnologies>
    </div>
  );
};

export default SimplePage;
