import React, { useCallback, useState, useEffect } from "react";
import "./RecrutementJobInfo.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import boulangerSlideShow from "../../../../styles/images/recrutement/job-info/boulanger.png";
import patissierSlideShow from "../../../../styles/images/recrutement/job-info/patissier.png";
import vendeurSlideShow from "../../../../styles/images/recrutement/job-info/vendeur.png";
import responsableDeVenteSlideShow from "../../../../styles/images/recrutement/job-info/responsable-de-vente.png";
import responsableProductionSlideShow from "../../../../styles/images/recrutement/job-info/responsable-production.png";
import traiteurSlideShow from "../../../../styles/images/recrutement/job-info/traiteur.png";

function RecrutementJobInfo() {
  const items = [
    { id: 0, target: "Boulanger" },
    { id: 1, target: "Pâtissier" },
    { id: 2, target: "VENDEUSE" },
    { id: 3, target: "Responsable des Ventes" },
    {
      id: 4,
      target: "RESPONSABLE DE PRODUCTION"
    },
    { id: 5, target: "Traiteur" }
  ];
  const imageArray = [
    {
      img: boulangerSlideShow,
      string: [
        "Boulanger (H/F)",
        "CAP Boulanger minimum",
        "2/3 ans d’expérience",
        "Organisation",
        "Esprit d’équipe",
        "Rigueur"
      ]
    },
    {
      img: patissierSlideShow,
      string: [
        "Pâtissier (H/F)",
        "CAP Boulanger minimum",
        "2/3 ans d’expérience",
        "Organisation",
        "Esprit d’équipe",
        "Précision"
      ]
    },
    {
      img: vendeurSlideShow,
      string: [
        "Vendeur (H/F)",
        "CAP Vente ou Commerce souhaité",
        "Dynamisme",
        "Rigueur",
        "Relation client",
        "Esprit d’équipe"
      ]
    },
    {
      img: responsableDeVenteSlideShow,
      string: [
        "Responsable de Vente (H/F)",
        "BAC Vente ou Commerce souhaité et/ou 5 expérience en vente",
        "3 ans d’expérience sur un poste à responsabilité souhaitée",
        "Relation client",
        "Management – Gestion d’équipe",
        "Réactivité – Organisation",
        "Polyvalence – Anticipation"
      ]
    },
    {
      img: responsableProductionSlideShow,
      string: [
        "Responsable Production (H/F)",
        "BP Boulanger ou Pâtissier souhaité et/ou 5 expérience en production",
        "3 ans d’expérience sur un poste à responsabilité souhaitée",
        "Management – Gestion d’équipe",
        "Réactivité – Organisation",
        "Polyvalence – Anticipation"
      ]
    },
    {
      img: traiteurSlideShow,
      string: [
        "Traiteur (H/F)",
        "CAP Cuisine – CAP Agent de Polyvalence en Restauration minimum",
        "2/3 ans d’expérience",
        "Organisation",
        "Esprit d’équipe",
        "Rigueur"
      ]
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

  // const PLink = string => {
  //   if (string[0] !== undefined) {
  //     string.map(p => {
  //       return <p>{p}</p>;
  //     });
  //   } else {
  //     return <p>loading</p>;
  //   }
  // };

  const [slide, setSlide] = useState(0);
  useEffect(() => {
    if (slide === true) {
      setSlide(!slide);
    }
  }, [slide]);
  const slide_class = slide ? "" : "slide";

  return (
    <div className="recrutement-job-info-container">
      <div className="recrutement-job-info-top-border"></div>
      <div className="recrutement-job-info-body">
        <div className="recrutement-job-info-slideshow-container">
          <Carousel className="recrutement-job-info-carousel-mini" fade={true}>
            <Carousel.Item>
              <div className="recrutement-job-info-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={boulangerSlideShow}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>Boulanger (H/F)</h3>
                  <p>CAP Boulanger minimum</p>
                  <p>2/3 ans d’expérience</p>
                  <p>Organisation</p>
                  <p>Esprit d’équipe</p>
                  <p>Rigueur</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="recrutement-job-info-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={patissierSlideShow}
                  alt="Third slide"
                />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>Pâtissier (H/F)</h3>
                  <p>CAP Pâtisserie minimum</p>
                  <p>2/3 ans d’expérience</p>
                  <p>Organisation</p>
                  <p>Esprit d’équipe</p>
                  <p>Précision</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="recrutement-job-info-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={vendeurSlideShow}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>Vendeur (H/F)</h3>
                  <p>CAP Vente ou Commerce souhaité</p>
                  <p>Dynamisme</p>
                  <p>Rigueur</p>
                  <p>Relation client</p>
                  <p>Esprit d’équipe</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="recrutement-job-info-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={responsableDeVenteSlideShow}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>Responsable de Vente (H/F)</h3>
                  <p>
                    BAC Vente ou Commerce souhaité et/ou 5 expérience en vente
                  </p>
                  <p>
                    3 ans d’expérience sur un poste à responsabilité souhaitée
                  </p>
                  <p>Relation client</p>
                  <p>Management – Gestion d’équipe</p>
                  <p>Réactivité – Organisation</p>
                  <p>Polyvalence – Anticipation</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="recrutement-job-info-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={responsableProductionSlideShow}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>Responsable Production (H/F)</h3>
                  <p>
                    BP Boulanger ou Pâtissier souhaité et/ou 5 expérience en
                    production
                  </p>
                  <p>
                    3 ans d’expérience sur un poste à responsabilité souhaitée
                  </p>
                  <p>Management – Gestion d’équipe</p>
                  <p>Réactivité – Organisation</p>
                  <p>Polyvalence – Anticipation</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="recrutement-job-info-carousel-image-container">
                <img
                  className="d-block w-100"
                  src={traiteurSlideShow}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <div>
                  <h3>Traiteur (H/F)</h3>
                  <p>
                    CAP Cuisine – CAP Agent de Polyvalence en Restauration
                    minimum
                  </p>
                  <p>2/3 ans d’expérience</p>
                  <p>Organisation</p>
                  <p>Esprit d’équipe</p>
                  <p>Rigueur</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="recrutement-job-info-selection-container">
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
          className={`recrutement-job-info-selection-img-text-container ${slide_class}`}
        >
          <img src={imageShow.img} />
          <div>
            {/* <PLink string={imageShow.string} /> */}
            {imageShow.string
              ? imageShow.string.map((p, i) => {
                  if (imageShow.string.indexOf(p) === 0) {
                    return <h3 key={i}>{p}</h3>;
                  }
                })
              : ""}
            <ul>
              {imageShow.string
                ? imageShow.string.map((p, i) => {
                    if (imageShow.string.indexOf(p) !== 0) {
                      return <li key={i}>{p}</li>;
                    }
                  })
                : ""}
            </ul>
          </div>
        </div>
      </div>
      <div className="recrutement-job-info-bottom-border"></div>
    </div>
  );
}

export default RecrutementJobInfo;
