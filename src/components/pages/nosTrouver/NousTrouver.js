import React from "react";
import "./NousTrouver.css";
import NousTrouverHeader from "./components/NousTrouverHeader";
import NousTrouverStores from "./components/NousTrouverStores";

function NousTrouver() {
  return (
    <div className="nous-trouver-body-container">
      <NousTrouverHeader />
      <NousTrouverStores />
    </div>
  );
}

export default NousTrouver;
