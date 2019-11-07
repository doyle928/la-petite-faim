import React from "react";
import "./Shop.css";

function Shop() {
  return (
    <div className="shop-container">
      <div className="shop-header">
        <h2>ESPRIT DE FAMILLE</h2>
        <span></span>
        <div>
          <h3>La Petite Faim</h3>
          <h3>C’est un moment de partage dans une ambiance familiale</h3>
        </div>
      </div>
      <div className="shop-picture-container">
        <div className="shop-group-one">
          <div className="shop-image-one  shop-picture-text-container">
            <div className="shop-img"></div>
            <div className="shop-img-text">
              <p>
                Dans nos vitrines, découvrez des délices salés ou sucrés tout au
                long de la journée.
              </p>
            </div>
          </div>
          <div className="shop-image-two shop-picture-text-container">
            <div className="shop-img"></div>
            <div className="shop-img-text">
              <p>
                Découvrez le fournil lors de votre visite en boutique. Notre
                savoir-faire à votre service !
              </p>
            </div>
          </div>
        </div>
        <div className="shop-group-two">
          <div className="shop-image-three shop-picture-text-container">
            <div className="shop-img"></div>
            <div className="shop-img-text">
              <p>
                En famille, entre amis ou pour travailler, profitez de notre
                salle à manger conviviale et personnalisée.
              </p>
            </div>
          </div>
          <div className="shop-image-four shop-picture-text-container">
            <div className="shop-img"></div>
            <div className="shop-img-text">
              <p>
                Passez un moment de détente dans une ambiance cosy et
                chaleureuse. Asseids-toi, prenez un livre et détendez-vous au
                coin du feu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
