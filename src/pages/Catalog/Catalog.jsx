import React from "react";
import { Amir } from "./About/About";
import Filtr from "./Filtr/Filtr";
import ScrollCatalog from "./ScrollCatalog/ScrollCatalog";

function Catalog() {
  return (
    <>
      <Filtr />
      <div className="hero_catalog">
        <ScrollCatalog />
        
      </div>
      <Amir />
    </>
  );
}

export default Catalog;
