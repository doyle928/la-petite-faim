import React, { useCallback, useState, useEffect } from "react";
import "./NousTrouverStores.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function NousTrouverStores() {
  const styles = {
    icon: {
      fill: "#444",
      stroke: "none",
      height: 25,
      width: 25,
      margin: "11px"
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
    let displayIconExpand = showMenu ? "nous-trouver-unexpand" : "nous-trouver-expand";
        let displayIconUnexpand = showMenu ? "nous-trouver-expand" : "nous-trouver-unexpand";


  return (
    <div className="nous-trouver-stores-container">
      <div className="nous-trouver-store-selector-container">
        <div
          onClick={() => {
            SetShowMenu(!showMenu);
          }}
        >
          <p>{displayActive}</p>
          <ExpandMoreIcon
            style={styles.icon}
            className={displayIconExpand}
          />
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
        {/* <Grid columns={2}>
          <Grid.Column>
            <Dropdown
              // onChange=""{this.handleChange}
              onChange=""
              options={options}
              placeholder="Choose an option"
              selection
              value={value}
            />
          </Grid.Column>
          <Grid.Column>
            <Segment secondary>
              <pre>Current value: {value}</pre>
            </Segment>
          </Grid.Column>
        </Grid> */}
      </div>
    </div>
  );
}

export default NousTrouverStores;
