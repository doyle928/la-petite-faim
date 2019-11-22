import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import {
  CloseRounded,
  MenuRounded,
  Twitter,
  Instagram
} from "@material-ui/icons";
import logo from "../../styles/images/header/la-petite-faim.png";
import wheat from "../../styles/images/header/grain.svg";
import logoSmall from "../../styles/images/header/logo.png";
import { useScrollHandler } from "./../../hooks/useScrollHandler";

const Header = props => {
  const styles = {
    mobileSocial: {
      fill: "#fff",
      stroke: "none",
      height: 25,
      width: 25
    },
    mobileHamburger: {
      fill: "#b4a06e",
      height: 30,
      width: 30
    },
    mobileClose: {
      fill: "#fff",
      textAlign: "right",
      height: 30,
      width: 30
    },
    desktopSocial: {
      fill: "#fff",
      stroke: "none",
      height: 20,
      width: 20
    }
  };

  const [menu, setMenu] = useState(0);
  let menu_class = menu ? "open-menu" : "closed-menu";
  const scroll = useScrollHandler(125);
  let header_class = scroll ? "scrolled-menu" : "";
  const scroll_logoSmall = useScrollHandler(215);
  let logoSmall_class = scroll_logoSmall ? "show-logo" : "";
  let menuBackground_class = menu
    ? "menu-show-black-true"
    : "menu-show-black-false";

  return (
    <div className="header">
      <div className="header-mobile">
        <h1>la petite faim</h1>
        <div className="header-description">
          <h2 className="header-description-one">BOULANGERIE</h2>
          <img src={wheat} />
          <h2 className="header-description-two">ARTISANALE</h2>
        </div>
        {/* <span className="hamburger" onClick={this.changeColor.bind(this)}> */}
        <span className="hamburger" onClick={() => setMenu(true)}>
          <MenuRounded style={styles.mobileHamburger} />
        </span>
      </div>
      <div
        className={menuBackground_class}
        onClick={() => setMenu(false)}
      ></div>
      <div className={`menu-mobile ${menu_class}`}>
        <ul>
          <li className="menu-close">
            {/* <span onClick={this.changeColor.bind(this)}> */}
            <span onClick={() => setMenu(false)}>
              <CloseRounded style={styles.mobileClose} />
            </span>
          </li>
          <li>
            <Link to="/" onClick={() => setMenu(false)}>
              LA MAISON LA PETITE FAIM
            </Link>
          </li>
          <li>
            <Link to="/nos-produits" onClick={() => setMenu(false)}>
              NOS PRODUITS
            </Link>
          </li>
          <li>
            <Link to="/nous-trouver" onClick={() => setMenu(false)}>
              NOUS TROUVER
            </Link>
          </li>
          <li>
            <Link to="/recrutement" onClick={() => setMenu(false)}>
              RECRUTEMENT
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMenu(false)}>
              DEVENIR FRANCHISÉ
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMenu(false)}>
              NOUS CONTACTER
            </Link>
          </li>
          <li className="header-social-mobile">
            <span className="header-container-twitter">
              <Twitter style={styles.mobileSocial} />
            </span>
            <span className="header-container-insta">
              <Instagram style={styles.mobileSocial} />
            </span>
          </li>
        </ul>
      </div>
      <div className={`header-desktop ${header_class}`}>
        <img src={logo} className="main-logo" />
        <img src={logoSmall} className={`logo-small ${logoSmall_class}`} />
        <div>
          <ul>
            <li>
              <NavLink activeClassName="active" exact to="/">
                LA MAISON LA PETITE FAIM
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/nos-produits">
                NOS PRODUITS
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/nous-trouver">
                NOUS TROUVER
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/recrutement">
                RECRUTEMENT
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" exact to="/">
                DEVENIR FRANCHISÉ
              </NavLink>
            </li>
            <li className="header-social">
              <span className="header-container-twitter">
                <Twitter style={styles.desktopSocial} />
              </span>
              <span className="header-container-insta">
                <Instagram style={styles.desktopSocial} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
