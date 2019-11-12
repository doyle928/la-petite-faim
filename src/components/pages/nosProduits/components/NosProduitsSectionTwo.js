import React from "react";
import "./NosProduitsSectionTwo.css";

import lePain from "../../../../styles/images/nos-produits/section-two/slideshow-1.png";
import laPatisserie from "../../../../styles/images/nos-produits/section-two/slideshow-2.png";
import laBriocheFeuilletee from "../../../../styles/images/nos-produits/section-two/slideshow-3.png";
import lesMacarons from "../../../../styles/images/nos-produits/section-two/slideshow-4.png";
import leTraiteur from "../../../../styles/images/nos-produits/section-two/slideshow-5.png";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function NosProduitsSectionTwo() {
  return (
    <div className="nos-produits-section-two-container">
      <div>
        <div className="nos-produits-section-two-slideshow-container">
          <Carousel className="nos-produits-carousel-mini" fade={true}>
            <Carousel.Item>
              <div className="nos-produits-carousel-image-container">
                <img className="d-block w-100" src={lePain} alt="First slide" />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>LE PAIN</h3>
                  <p>
                    Tous nos pains sont fabriqués sur place à partir de farine
                    de tradition 100% française et sans additifs, chaque jour
                    par nos boulangers.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="nos-produits-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={laPatisserie}
                  alt="Third slide"
                />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>LA PÂTISSERIE</h3>
                  <p>
                    Flans, Paris-Brest, éclairs, tartelettes, clafoutis, tartes
                    fines aux pommes, … Plus de 20 pâtisseries différentes
                    élaborées chaque jour pour ravir vos papilles !
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="nos-produits-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={laBriocheFeuilletee}
                  alt="Third slide"
                />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>LA BRIOCHE FEUILLETÉE</h3>
                  <p>
                    Croustillante, moelleuse et caramélisée à souhait, notre
                    brioche feuilletée vous fera fondre de plaisir.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="nos-produits-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={lesMacarons}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>LES MACARONS</h3>
                  <p>
                    Une coque croquante et moelleuse, une texture différente à
                    chaque parfum. Un délice à chaque bouchée !
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="nos-produits-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={leTraiteur}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>LE TRAITEUR</h3>
                  <p>
                    Nos produits traiteur sont élaborés avec nos pains fabriqués
                    sur place. Les produits sont frais et cuisinés sur place
                    tout au long de la journée.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="nos-produits-section-two-container-bottom-edge"></div>
    </div>
  );
}

export default NosProduitsSectionTwo;
