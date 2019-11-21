import React, { useCallback, useState, useEffect } from "react";
import "./NousTrouverStores.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import NearMeRoundedIcon from "@material-ui/icons/NearMeRounded";
import logo from "../../../../styles/images/header/logo.png";
import NousTrouverMap from "./NousTrouverMap";

function NousTrouverStores() {
  const styles = {
    icon: {
      fill: "#444",
      stroke: "none",
      height: 25,
      width: 25,
      margin: "11px"
    },
    storeInfoIcon: {
      fill: "#b4a06e",
      stroke: "none",
      height: 23,
      width: 23
    }
  };

  const items = [
    {
      id: 0,
      target: "Trouver par ville ou département",
      text: "Trouver par ville ou département"
    },
    { id: 1, target: "33", text: "33" },
    { id: 2, target: " - Bordeaux (Libourne)", text: "Bordeaux (Libourne)" },
    { id: 3, target: "37", text: "37" },
    {
      id: 4,
      target: " - Tours (Joué-Lès-Tours)",
      text: "Tours (Joué-Lès-Tours)"
    },
    {
      id: 5,
      target: " - Tours (Saint-Cyr-sur Loire)",
      text: "Tours (Saint-Cyr-sur Loire)"
    }
  ];
  const stores = [
    {
      id: 0,
      city: "Bordeaux (Libourne)",
      address: "95 avenue du Général de Gaulle, 33500 Libourne",
      email: "lulubelle@tuta.io",
      phone: "05 57 24 43 70",
      map_url: "/"
    },
    {
      id: 1,
      city: "Tours (Joué-Lès-Tours)",
      address: "155 Boulevard Jean-Jaurès, 37300 Joué-Lès-Tourse",
      email: "lulubelle@tuta.io",
      phone: "02 47 87 27 57",
      map_url: "/"
    },
    {
      id: 2,
      city: "Tours (Saint-Cyr-sur Loire)",
      address: "9 rue de la Ménardière, 37540 Saint-Cyr-sur-Loire",
      email: "lulubelle@tuta.io",
      phone: "09 67 32 43 35",
      map_url: "/"
    }
  ];

  const [active, setActive] = useState(null);
  const [showMenu, SetShowMenu] = useState(null);

  if (showMenu === null) {
    SetShowMenu(false);
  }
  console.log("active", active);

  const NavLink = ({ id, target, isActive, onClick }) => (
    <li
      onClick={useCallback(() => onClick(id), [id])}
      className={`nous-trouver-select-option ${isActive ? "active" : ""}`}
    >
      {target}
    </li>
  );

  // const [slide, setSlide] = useState(0);
  // useEffect(() => {
  //   if (slide === true) {
  //     setSlide(!slide);
  //   }
  // }, [slide]);
  // const slide_class = slide ? "" : "slide";
  console.log(showMenu);

  let displayActive = active ? items[active].text : items[0].text;
  let displayList = showMenu ? "nous-trouver-store-show" : "";
  let displayIconExpand = showMenu
    ? "nous-trouver-unexpand"
    : "nous-trouver-expand";
  let displayIconUnexpand = showMenu
    ? "nous-trouver-expand"
    : "nous-trouver-unexpand";

  return (
    <div className="nous-trouver-stores-container">
      <div>
        <div className="nous-trouver-store-selector-container">
          <div
            onClick={() => {
              SetShowMenu(!showMenu);
            }}
          >
            <p>{displayActive}</p>
            <ExpandMoreIcon style={styles.icon} className={displayIconExpand} />
            <ExpandLessIcon
              style={styles.icon}
              className={displayIconUnexpand}
            />
          </div>
          <div className={`nous-trouver-store-option-container ${displayList}`}>
            <input />
            <ul>
              {items.map(item => (
                <NavLink
                  {...item}
                  onClick={() => {
                    setActive(item.id);
                    SetShowMenu(false);
                  }}
                  isActive={active === item.id}
                  key={item.id}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="nous-trouver-store-list">
          <ul>
            {stores.map(store => (
              <li {...store}>
                <div>
                  <img src={logo} />
                </div>
                <div>
                  <h3>{store.city}</h3>
                  <p>{store.address}</p>
                  <div>
                    <span>
                      <EmailRoundedIcon style={styles.storeInfoIcon} />
                      &nbsp;
                      <a href={store.map_url}>{store.email}</a>
                    </span>
                    <span>
                      <CallRoundedIcon style={styles.storeInfoIcon} />
                      &nbsp;
                      <a href={store.map_url}>{store.phone}</a>
                    </span>
                    <span>
                      <NearMeRoundedIcon style={styles.storeInfoIcon} />
                      &nbsp;
                      <a href={store.map_url}>Y ALLER</a>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="nous-trouver-stores-map-container">
        <NousTrouverMap />
      </div>
    </div>
  );
}

export default NousTrouverStores;
