import React, { useCallback, useState, useEffect } from "react";
import "./NosProduitsSectionTwo.css";

import lePainSlideShowMini from "../../../../styles/images/nos-produits/section-two/slideshow-mini/slideshow-mini-1.png";
import laPatisserieSlideShowMini from "../../../../styles/images/nos-produits/section-two/slideshow-mini/slideshow-mini-2.png";
import laBriocheFeuilleteeSlideShowMini from "../../../../styles/images/nos-produits/section-two/slideshow-mini/slideshow-mini-3.png";
import lesMacaronsSlideShowMini from "../../../../styles/images/nos-produits/section-two/slideshow-mini/slideshow-mini-4.png";
import leTraiteurSlideShowMini from "../../../../styles/images/nos-produits/section-two/slideshow-mini/slideshow-mini-5.png";

import lePain from "../../../../styles/images/nos-produits/section-two/slideshow-1.png";
import laPatisserie from "../../../../styles/images/nos-produits/section-two/slideshow-2.png";
import laBriocheFeuilletee from "../../../../styles/images/nos-produits/section-two/slideshow-3.png";
import lesMacarons from "../../../../styles/images/nos-produits/section-two/slideshow-4.png";
import leTraiteur from "../../../../styles/images/nos-produits/section-two/slideshow-5.png";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function NosProduitsSectionTwo() {
  const items = [
    { id: 0, target: "LE PAIN" },
    { id: 1, target: "LA PÂTISSERIE" },
    { id: 2, target: "LA BRIOCHE FEUILLETÉE" },
    { id: 3, target: "LES MACARONS" },
    { id: 4, target: "LE TRAITEUR" }
  ];
  const imageArray = [
    {
      img: lePain,
      string: `Tous nos pains sont fabriqués sur place à partir de farine de tradition 100% française et sans additifs, chaque jour par nos boulangers.`
    },
    {
      img: laPatisserie,
      string: `Flans, Paris-Brest, éclairs, tartelettes, clafoutis, tartes fines aux pommes, … Plus de 20 pâtisseries différentes élaborées chaque jour pour ravir vos papilles !`
    },
    {
      img: laBriocheFeuilletee,
      string: `Croustillante, moelleuse et caramélisée à souhait, notre brioche feuilletée vous fera fondre de plaisir.`
    },
    {
      img: lesMacarons,
      string: `Une coque croquante et moelleuse, une texture différente à chaque parfum.  Un délice à chaque bouchée !`
    },
    {
      img: leTraiteur,
      string: `Nos produits traiteur sont élaborés avec nos pains fabriqués sur place.  Les produits sont frais et cuisinés sur place tout au long de la journée.`
    }
  ];

  const [active, setActive] = useState(null);
  const [imageShow, setImage] = useState(0);
  if (!imageShow) {
    setImage(imageArray[0]);
    setActive(0);
  }

  const NavLink = ({ id, target, isActive, onClick }) => (
    <li
      onClick={useCallback(() => onClick(id), [id])}
      className={`navLink ${isActive ? "active" : ""}`}
    >
      {target}
    </li>
  );

  const [slide, setSlide] = useState(0);
  useEffect(() => {
    if (slide === true) {
      setSlide(!slide);
    }
  }, [slide]);
  const slide_class = slide ? "" : "slide";

  return (
    <div className="nos-produits-section-two-container">
      <div>
        <div className="nos-produits-section-two-slideshow-container">
          <Carousel className="nos-produits-carousel-mini" fade={true}>
            <Carousel.Item>
              <div className="nos-produits-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={lePainSlideShowMini}
                  alt="First slide"
                />
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
                  src={laPatisserieSlideShowMini}
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
                  src={laBriocheFeuilleteeSlideShowMini}
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
                  src={lesMacaronsSlideShowMini}
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
                  src={leTraiteurSlideShowMini}
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
        <div className="nos-produits-section-two-selection-container">
          <ul>
            {items.map(item => (
              <NavLink
                {...item}
                onClick={() => {
                  setImage(imageArray[item.id]);
                  setActive(item.id);
                  setSlide(!slide);
                }}
                isActive={active === item.id}
                key={item.id}
              />
            ))}
          </ul>
          <div
            className={`nos-produits-section-two-selection-img-text-container ${slide_class}`}
          >
            <p>{imageShow.string}</p>
            <img src={imageShow.img} />
          </div>
        </div>
      </div>
      <div className="nos-produits-section-two-container-bottom-edge"></div>
    </div>
  );
}

export default NosProduitsSectionTwo;
