import React from "react";
import "./Footer.css";
import { useWindowSize } from "./../../hooks/useWindowSize";
import footer1 from "../../styles/images/footer/footer-1.png";
import footer2 from "../../styles/images/footer/footer-2.png";
import footer3 from "../../styles/images/footer/footer-3.png";
import footer4 from "../../styles/images/footer/footer-4.png";
import footer5 from "../../styles/images/footer/footer-5.png";
import footer6 from "../../styles/images/footer/footer-6.png";
import footer7 from "../../styles/images/footer/footer-7.png";
import footer8 from "../../styles/images/footer/footer-8.png";
import footer9 from "../../styles/images/footer/footer-9.png";
import logo from "../../styles/images/header/la-petite-faim.png";
import leMeilleurPatissier from "../../styles/images/footer/le-meilleur-patissier.png";
import { Twitter, Instagram, YouTube } from "@material-ui/icons";

function Footer() {
  const size = useWindowSize();
  const styles = {
    footerGridMobile: {
      display: "grid",
      gridTemplateColumns: `${Math.floor((size.width * 0.9) / 3) -
        6}px ${Math.floor((size.width * 0.9) / 3) - 6}px ${Math.floor(
        (size.width * 0.9) / 3
      ) - 6}px`,
      gridTemplateRows: `${Math.floor((size.width * 0.9) / 3) -
        6}px ${Math.floor((size.width * 0.9) / 3) - 6}px ${Math.floor(
        (size.width * 0.9) / 3
      ) - 6}px`
    },
    footerGridMedium: {
      display: "grid",
      gridTemplateColumns: `${Math.floor((size.width * 0.45) / 3) -
        6}px ${Math.floor((size.width * 0.45) / 3) - 6}px ${Math.floor(
        (size.width * 0.45) / 3
      ) - 6}px`,
      gridTemplateRows: `${Math.floor((size.width * 0.45) / 3) -
        6}px ${Math.floor((size.width * 0.45) / 3) - 6}px ${Math.floor(
        (size.width * 0.45) / 3
      ) - 6}px`
    },
    footerGridFull: {
      display: "grid",
      gridTemplateColumns: `${Math.floor((size.width * 0.22) / 3) -
        6}px ${Math.floor((size.width * 0.22) / 3) - 6}px ${Math.floor(
        (size.width * 0.22) / 3
      ) - 6}px`,
      gridTemplateRows: `${Math.floor((size.width * 0.22) / 3) -
        6}px ${Math.floor((size.width * 0.22) / 3) - 6}px ${Math.floor(
        (size.width * 0.22) / 3
      ) - 6}px`
    },
    mobileSocial: {
      fill: "#0e0e0e",
      stroke: "none",
      height: 25,
      width: 25,
      zIndex: "100"
    }
  };
  let classSize;
  if (size.width < 768) {
    classSize = styles.footerGridMobile;
  } else if (size.width < 980) {
    classSize = styles.footerGridMedium;
  } else if (size.width > 980) {
    classSize = styles.footerGridFull;
  }

  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-main-grid-container">
          <div className="footer-main-image-grid" style={classSize}>
            <div className="footer-grid-1 footer-grid-container">
              <img className="footer-grid-img" src={footer1} />
              <div></div>
            </div>
            <div className="footer-grid-2 footer-grid-container">
              <img className="footer-grid-img" src={footer2} />
              <div></div>
            </div>
            <div className="footer-grid-3 footer-grid-container">
              <img className="footer-grid-img" src={footer3} />
              <div></div>
            </div>
            <div className="footer-grid-4 footer-grid-container">
              <img className="footer-grid-img" src={footer4} />
              <div></div>
            </div>
            <div className="footer-grid-5 footer-grid-container">
              <img className="footer-grid-img" src={footer5} />
              <div></div>
            </div>
            <div className="footer-grid-6 footer-grid-container">
              <img className="footer-grid-img" src={footer6} />
              <div></div>
            </div>
            <div className="footer-grid-7 footer-grid-container">
              <img className="footer-grid-img" src={footer7} />
              <div></div>
            </div>
            <div className="footer-grid-8 footer-grid-container">
              <img className="footer-grid-img" src={footer8} />
              <div></div>
            </div>
            <div className="footer-grid-9 footer-grid-container">
              <img className="footer-grid-img" src={footer9} />
              <div></div>
            </div>
          </div>
          <div className="footer-section-two">
            <div className="footer-main-logo">
              <img src={logo} />
            </div>
            <div className="footer-main-awards">
              <img src={leMeilleurPatissier} />
              <div className="footer-awards-svg-container">
                <svg width="200" height="200">
                  <path
                    id="curve"
                    d="M0,50 a1,1 0 0,0 200,0"
                    fill="transparent"
                  />
                  <text width="200">
                    <textPath href="#curve">Finaliste saison 8</textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="footer-social">
            <ul>
              <li>
                <span>
                  <Twitter style={styles.mobileSocial} />
                </span>
              </li>
              <li>
                <span>
                  <Instagram style={styles.mobileSocial} />
                </span>
              </li>
              <li>
                <span>
                  <YouTube style={styles.mobileSocial} />
                </span>
              </li>
              <li>
                <span>
                  <svg
                    className="MuiSvgIcon-root linked-in-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="black"
                      d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"
                    ></path>
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-main-updates">
            <div className="footer-updates-container">
              <div className="footer-updates-body">
                <div className="footer-update-container">
                  <div className="footer-update-one">
                    <div className="footer-updates-header">
                      <span>
                        <img src={logo} />
                      </span>
                      <div>
                        <p>La Petite Faim</p>
                        <p>il y a 3 jours</p>
                      </div>
                    </div>
                    <div className="footer-image-container">
                      <div className="footer-update-image-one"></div>
                      <div></div>
                    </div>
                    <div className="footer-update-footer">
                      <p>
                        <a href="/">Voir sur LinkedIn</a>&nbsp;&middot;&nbsp;
                        <a href="/">Partager</a>
                      </p>
                    </div>
                  </div>
                  <div className="footer-update-two">
                    <div className="footer-updates-header">
                      <span>
                        <img src={logo} />
                      </span>
                      <div>
                        <p>La Petite Faim</p>
                        <p>31 oct. 2019</p>
                      </div>
                    </div>
                    <div className="footer-updates-text-container">
                      <p>
                        <span role="emoji">🎃🎃🎃</span> Halloween !!{" "}
                        <span role="emoji">🎃🎃🎃</span>
                      </p>
                      <p>Des pâtisseries ou un sort !</p>
                      <p>
                        <a href="/">#halloween</a>
                        <br />
                        <a href="/">#lapetitefaim</a>
                      </p>
                    </div>
                    <div className="footer-image-container">
                      <div className="footer-update-image-two"></div>
                      <div></div>
                    </div>
                    <div className="footer-update-footer">
                      <p>
                        <a href="/">Voir sur LinkedIn</a>&nbsp;&middot;&nbsp;
                        <a href="/">Partager</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>
            <span>
              <a href="/">PLAN DU SITE</a>&nbsp;|
            </span>
            <span>
              &nbsp;<a href="/">MENTIONS LÉGALES</a>
              &nbsp;|
            </span>
            <span>
              &nbsp;<a href="/">POLITIQUE DE CONFIDENTIALITE</a>&nbsp;|
            </span>
            <span>
              &nbsp;<a href="/">LULUBELLE@TUTA.FR</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
