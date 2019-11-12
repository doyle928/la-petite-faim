import React from "react";
import "./NosProduits.css";
import NosProduitsHeader from "./components/NosProduitsHeader";
import NosProduitsSectionOne from "./components/NosProduitsSectionOne";
import NosProduitsSectionTwo from "./components/NosProduitsSectionTwo";

function NosProduits() {
  return (
    <div className="nos-produits-body-container">
      <NosProduitsHeader />
      <NosProduitsSectionOne />
      <NosProduitsSectionTwo />
    </div>
  );
}

export default NosProduits;
