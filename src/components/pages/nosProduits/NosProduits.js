import React from "react";
import "./NosProduits.css";
import NosProduitsHeader from "./components/NosProduitsHeader";
import NosProduitsSectionOne from "./components/NosProduitsSectionOne";
import NosProduitsSectionTwo from "./components/NosProduitsSectionTwo";
import NosProduitsMenu from "./components/NosProduitsMenu";
import NosProduitsLoyalty from "./components/NosProduitsLoyalty";
import NosProduitsNutrition from "./components/NosProduitsNutrition";

function NosProduits() {
  return (
    <div className="nos-produits-body-container">
      <NosProduitsHeader />
      <NosProduitsSectionOne />
      <NosProduitsSectionTwo />
      <NosProduitsMenu />
      <NosProduitsLoyalty />
      <NosProduitsNutrition />
      <div className="nos-produits-body-background"></div>
    </div>
  );
}

export default NosProduits;
