import React from "react";
import "./Recrutement.css";
import RecrutementHeader from "./components/RecrutementHeader";
import RecrutementNosMetiers from "./components/RecrutementNosMetiers";
import RecrutementJobInfo from "./components/RecrutementJobInfo";

function Recrutement() {
  return (
    <div className="recrutement-body-container">
      <RecrutementHeader />
      <RecrutementNosMetiers />
      <RecrutementJobInfo />
    </div>
  );
}

export default Recrutement;
