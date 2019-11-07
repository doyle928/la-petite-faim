import React from "react";
import "./Discover.css";
import Map from "./Map";

function Discover() {
  return (
    <div className="discover-container">
      <div className="discover-header">
        <div className="heures-douverture">
          <h2>HEURES D'OUVERTURE</h2>
          <div>
            <p>Lundi - Mercredi . . . . . . 5:00 - 18:00</p>
            <p>Jeudi - Vendredi . . . . . . 5:00 - 19:00</p>
            <p>Samedi . . . . . . . . . . . . . . . . . 7:00 - 15:00</p>
          </div>
        </div>
        <span></span>
        <h3>Découvrir l’ensemble de nos boulangeries</h3>
      </div>
      <Map />
    </div>
  );
}

export default Discover;
