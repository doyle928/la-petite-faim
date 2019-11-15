import React from "react";
import "./NosProduitsMenu.css";
import menuImgE from "../../../../styles/images/nos-produits/menu/e.png";
import menuImgC from "../../../../styles/images/nos-produits/menu/c.png";
import menuImgS from "../../../../styles/images/nos-produits/menu/s.png";
import menuImgG from "../../../../styles/images/nos-produits/menu/g.png";

function NosProduitsMenu() {
  return (
    <div className="nos-produits-menu-container">
      <div className="nos-produits-menu-header">
        <h2>NOS MENUS</h2>
        <div></div>
      </div>
      <div>
        <div className="nos-produits-menu-item-container nos-produits-menu-enfant">
          <img src={menuImgE} />
          <h3>ENFANT</h3>
          <h3>5.95€</h3>
          <p>1 mini-sandwich viennois</p>
          <p>une Pom’Potes 90g ou 2 macarons</p>
          <p>une Volvic juicy fraise 33cl ou une bouteille d’eau sport 33cl</p>
        </div>
        <div className="nos-produits-menu-item-container nos-produits-menu-classique">
          <img src={menuImgC} />
          <h3>CLASSIQUE</h3>
          <h3>8.40€</h3>
          <p>1 produit classique à 4.50€</p>
          <p>un dessert à 2.40€</p>
          <p>une canette 33cl ou une bouteille d’eau 50cl</p>
        </div>
        <div className="nos-produits-menu-item-container nos-produits-menu-saveur">
          <img src={menuImgS} />
          <h3>SAVEUR</h3>
          <h3>9.10€</h3>
          <p>1 produit saveur à 5.20€</p>
          <p>un dessert à 2.40€</p>
          <p>une canette 33cl ou une bouteille d’eau 50cl</p>
        </div>
        <div className="nos-produits-menu-item-container nos-produits-menu-gourmand">
          <img src={menuImgG} />
          <h3>GOURMAND</h3>
          <h3>9.60€</h3>
          <p>1 produit gourmand à 5.60€</p>
          <p>un dessert à 2.40€</p>
          <p>une canette 33cl ou une bouteille d’eau 50cl</p>
        </div>
      </div>
    </div>
  );
}

export default NosProduitsMenu;
