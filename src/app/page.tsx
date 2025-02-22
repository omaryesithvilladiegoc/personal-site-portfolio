"use client";
import Header from "@/components/common/Header";
import FilterableTecnologiesTable from "@/components/compound/Technologies";
import { tecnologias_favoritas } from "@/data/tecnologias";

export default function Home() {
  return (
    <>
      <Header />
      <FilterableTecnologiesTable tecnologies={tecnologias_favoritas}>
        <FilterableTecnologiesTable.SearchBar showButtonMoreTecnologies />
        <FilterableTecnologiesTable.TecnologiesGrid />
      </FilterableTecnologiesTable>
    </>
  );
}
