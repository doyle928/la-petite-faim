import React from "react";
import "./NosProduitsNutrition.css";

function NosProduitsNutrition() {
  return (
    <div className="nos-produits-nutrition-container">
      <div className="nos-produits-nutrition-shadow-background"></div>

      <div className="nos-produits-nutrition-header">
        <h2>Nutrition</h2>
        <div></div>
        <p>
          Chez La Petite Faim nous avons toujours choisi de proposer une gamme
          large pour satisfaire notre clientèle. Chacun peut trouver le produit
          qui lui convient. C’est pourquoi nous proposons des menus déjeuner
          avec un plat salé, un dessert et une boisson.
        </p>
      </div>
      <div>
        <div className="nos-produits-nutrition-item-container">
          <h3>un repas léger</h3>
          <p>un mini Viennese sandwich</p>
          <p>une panna cotta ou des fruits de saison à croquer</p>
          <p>une bouteille d’eau ou une boisson allégée</p>
        </div>
        <div className="nos-produits-nutrition-item-container">
          <h3>un repas gourmand</h3>
          <p>un burger</p>
          <p>une tartelette aux fruits</p>
          <p>une bouteille d’eau ou un soda</p>
        </div>
        <div className="nos-produits-nutrition-item-container">
          <h3>un repas végétarien</h3>
          <p>
            une pizza grecque (mesclun, tomates cerises, feta, olives noires,
            concombre, huile d’olive, herbes de Provence, ciboulette )
          </p>
          <p>des fruits de saison à croquer </p>
          <p>une bouteille d’eau ou un FuzeTea </p>
        </div>
      </div>
    </div>
  );
}

export default NosProduitsNutrition;
