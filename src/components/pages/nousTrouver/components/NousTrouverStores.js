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
      display: "Trouver par ville ou département",
      department: null,
      city: null
    },
    { id: 1, target: "33", display: "33", department: 33, city: null },
    {
      id: 2,
      target: " - Bordeaux (Libourne)",
      display: "Bordeaux (Libourne)",
      department: 33,
      city: "Bordeaux (Libourne)"
    },
    { id: 3, target: "37", display: "37", department: 37, city: null },
    {
      id: 4,
      target: " - Tours (Joué-Lès-Tours)",
      display: "Tours (Joué-Lès-Tours)",
      department: 37,
      city: "Tours (Joué-Lès-Tours)"
    },
    {
      id: 5,
      target: " - Tours (Saint-Cyr-sur Loire)",
      display: "Tours (Saint-Cyr-sur Loire)",
      department: 37,
      city: "Tours (Saint-Cyr-sur Loire)"
    }
  ];
  const stores = [
    {
      id: 0,
      city: "Bordeaux (Libourne)",
      address: "95 avenue du Général de Gaulle, 33500 Libourne",
      email: "lulubelle@tuta.io",
      phone: "05 57 24 43 70",
      map_url: "/",
      department: 33
    },
    {
      id: 1,
      city: "Tours (Joué-Lès-Tours)",
      address: "155 Boulevard Jean-Jaurès, 37300 Joué-Lès-Tourse",
      email: "lulubelle@tuta.io",
      phone: "02 47 87 27 57",
      map_url: "/",
      department: 37
    },
    {
      id: 2,
      city: "Tours (Saint-Cyr-sur Loire)",
      address: "9 rue de la Ménardière, 37540 Saint-Cyr-sur-Loire",
      email: "lulubelle@tuta.io",
      phone: "09 67 32 43 35",
      map_url: "/",
      department: 37
    }
  ];

  const [active, setActive] = useState({
    id: 0,
    department: null,
    city: null
  });
  const [showMenu, SetShowMenu] = useState(null);
  const [value, setValue] = useState("");
  if (showMenu === null) {
    SetShowMenu(false);
  }

  const NavLink = ({ id, target, isActive, onClick }) => (
    <li
      onClick={useCallback(() => onClick(id), [id])}
      className={`nous-trouver-select-option`}
    >
      {target}
    </li>
  );

  let displayActive = active ? items[active.id].display : items[0].display;
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
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
              type="text"
            />
            <ul>
              {items.map(
                (item, i) =>
                  (value === "" ||
                    (item.department === null && item.city === null) ||
                    (item.department.toString().indexOf(value) >= 0 &&
                      item.city === null) ||
                    (item.city !== null &&
                      item.city.toLowerCase().indexOf(value) >= 0)) && (
                    <NavLink
                      {...item}
                      key={i}
                      onClick={() => {
                        setActive({
                          id: item.id,
                          department: item.department,
                          city: item.city
                        });
                        SetShowMenu(false);
                        setValue("");
                      }}
                      isActive={active === item.id}
                      key={item.id}
                    />
                  )
              )}
            </ul>
          </div>
        </div>
        <div className="nous-trouver-store-list">
          <ul>
            {stores.map(
              (store, i) =>
                (active.id === 0 ||
                  (active.department == store.department &&
                    active.city === null) ||
                  active.city === store.city) && (
                  <li {...store} key={i}>
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
                )
            )}
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
