import React from "react";
import "./SlideshowMini.css";
import baguette from "../../../../styles/images/body/slideshow-mini/baguette.png";
import briocheFeuillete from "../../../../styles/images/body/slideshow-mini/brioche_feuilletee.png";
import macaron from "../../../../styles/images/body/slideshow-mini/macaron.png";
import patisserie from "../../../../styles/images/body/slideshow-mini/patisserie.png";
import pizza from "../../../../styles/images/body/slideshow-mini/pizza.png";
import sandwich from "../../../../styles/images/body/slideshow-mini/sandwich.png";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const SlideshowMini = () => {
  return (
    <div className="slideshow-mini-container">
      <h2>LE MEILLEUR DE L’ARTISANAT</h2>
      <span className="underline-box"></span>
      <Carousel className="carousel-mini" fade={true}>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img className="d-block w-100" src={baguette} alt="First slide" />
          </div>
          <Carousel.Caption>
            <div>
              <h3>La baguette</h3>
              <p>
                Chez La Petite Faim, la farine de tradition est un parti pris !
                Pas d’additifs, pas d’améliorants, pour un produit sain et de
                qualité. Notre savoir-faire : un pétrissage et un repos de la
                pâte plus longs pour une Tradition qui se conserve plus
                longtemps.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src={briocheFeuillete}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <div>
              <h3>La brioche feuilletée</h3>
              <p>
                La pâte feuilletée est un produit complexe à réaliser. Il faut
                de la patience et un savoir-faire technique.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img className="d-block w-100" src={macaron} alt="Third slide" />
          </div>
          <Carousel.Caption>
            <div>
              <h3>Les macarons</h3>
              <p>
                En 14 saveurs variant au gré des saisons et de l’inspiration de
                nos pâtissiers : vanille, chocolat, nutella, caramel au beurre
                salé, chocolat passion, chocolat framboise, bergamote,
                coquelicot, noix de coco, réglisse, earl grey, exotique, fraise,
                chocolat orange…
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img className="d-block w-100" src={patisserie} alt="First slide" />
          </div>
          <Carousel.Caption>
            <div>
              <h3>La pâtisserie</h3>
              <p>
                Pâtisseries individuelles ou grandes pièces (5/6 personnes). Nos
                pâtissiers élaborent, chaque jour, une vingtaine de recettes
                différentes pour votre plus grand plaisir !
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img className="d-block w-100" src={sandwich} alt="First slide" />
          </div>
          <Carousel.Caption>
            <div>
              <h3>Les sandwichs</h3>
              <p>
                Nos sandwichs sont élaborés avec nos pains fabriqués sur place.
                Ils sont conçus tout au long de la journée pour vous garantir la
                fraîcheur des ingrédients.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img className="d-block w-100" src={pizza} alt="First slide" />
          </div>
          <Carousel.Caption>
            <div>
              <h3>Les pizzas</h3>
              <p>
                Nous vous proposons différentes recettes de pizzas adaptées aux
                saisons, conçues avec des produits frais de qualité.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="slideshow-mini-desktop">
        <h3>Les spécialités de nos boulangeries</h3>
        <div className="slideshow-mini-grid">
          <span className="grid-img grid-2" />
          <div className="grid-text grid-1">
            <h3>La baguette</h3>
            <p>
              Chez La Petite Faim, la farine de tradition est un parti pris !
              Pas d’additifs, pas d’améliorants, pour un produit sain et de
              qualité. Notre savoir-faire : un pétrissage et un repos de la pâte
              plus longs pour une Tradition qui se conserve plus longtemps.
            </p>
          </div>
          <span className="grid-img grid-4" />
          <div className="grid-text grid-5">
            <h3>La brioche feuilletée</h3>
            <p>
              La pâte feuilletée est un produit complexe à réaliser. Il faut de
              la patience et un savoir-faire technique.
            </p>
          </div>
          <span className="grid-img grid-6" />
          <div className="grid-text grid-3">
            <h3>Les macarons</h3>
            <p>
              En 14 saveurs variant au gré des saisons et de l’inspiration de
              nos pâtissiers : vanille, chocolat, nutella, caramel au beurre
              salé, chocolat passion, chocolat framboise, bergamote, coquelicot,
              noix de coco, réglisse, earl grey, exotique, fraise, chocolat
              orange…
            </p>
          </div>
          <span className="grid-img grid-8" />
          <div className="grid-text grid-7">
            <h3>La pâtisserie</h3>
            <p>
              Pâtisseries individuelles ou grandes pièces (5/6 personnes). Nos
              pâtissiers élaborent, chaque jour, une vingtaine de recettes
              différentes pour votre plus grand plaisir !
            </p>
          </div>
          <span className="grid-img grid-10" />
          <div className="grid-text grid-11">
            <h3>Les sandwichs</h3>
            <p>
              Nos sandwichs sont élaborés avec nos pains fabriqués sur place.
              Ils sont conçus tout au long de la journée pour vous garantir la
              fraîcheur des ingrédients.
            </p>
          </div>
          <span className="grid-img grid-12" />
          <div className="grid-text grid-9">
            <h3>Les pizzas</h3>
            <p>
              Nous vous proposons différentes recettes de pizza adaptées aux
              saisons, conçues avec des produits frais de qualité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideshowMini;
