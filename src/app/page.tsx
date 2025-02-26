"use client";
import Header from "@/components/common/Header";
import Projects from "@/components/common/projects";
import NavBar from "@/components/compound/NavBar";
import FilterableTecnologiesTable from "@/components/compound/Technologies";
import { tecnologias_favoritas } from "@/data/tecnologias";

export default function Home() {
  return (
    <>
      <NavBar
        content={{
          ButtonGitHubSource: "Ver código fuente",
          ButtonRegister: "Registrate a mi blog",
        }}
      >
        <NavBar.ButtonGitHubSource />
        <NavBar.ButtonRegister outlined />
      </NavBar>
      <Header />
      <FilterableTecnologiesTable tecnologies={tecnologias_favoritas}>
        <FilterableTecnologiesTable.SearchBar showButtonMoreTecnologies />
        <FilterableTecnologiesTable.TecnologiesGrid />
      </FilterableTecnologiesTable>
      <Projects />
    </>
  );
}
