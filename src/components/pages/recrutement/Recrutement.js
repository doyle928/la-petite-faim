import React from "react";
import "./Recrutement.css";
import RecrutementHeader from "./components/RecrutementHeader";
import RecrutementNosMetiers from "./components/RecrutementNosMetiers";
import RecrutementJobInfo from "./components/RecrutementJobInfo";
import RecrutementJobList from "./components/RecrutementJobList";
import RecrutementApply from "./components/RecrutementApply";

function Recrutement() {
  return (
    <div className="recrutement-body-container">
      <RecrutementHeader />
      <RecrutementNosMetiers />
      <RecrutementJobInfo />
      <RecrutementJobList />
      <RecrutementApply />
    </div>
  );
}

export default Recrutement;
