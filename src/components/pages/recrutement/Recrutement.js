import React from "react";
import "./Recrutement.css";
import RecrutementHeader from "./components/RecrutementHeader";
import RecrutementNosMetiers from "./components/RecrutementNosMetiers";
import RecrutementJobInfo from "./components/RecrutementJobInfo";
import RecrutementJobList from "./components/RecrutementJobList";
import RecrutementJobList2 from "./components/RecrutementJobList2";
import RecrutementApply from "./components/RecrutementApply";

function Recrutement() {
  return (
    <div className="recrutement-body-container">
      <RecrutementHeader />
      <RecrutementNosMetiers />
      <RecrutementJobInfo />
      <RecrutementJobList />
      {/* <RecrutementJobList2 /> */}
      <RecrutementApply />
    </div>
  );
}

export default Recrutement;
