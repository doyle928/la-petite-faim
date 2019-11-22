import React, { useState, useEffect } from "react";
import "./RecrutementHeader.css";

function RecrutementHeader() {
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    setLoaded(true);
    return () => {
      setLoaded(false);
    };
  }, [loaded]);

  const loaded_class = loaded
    ? "recrutement-header-loaded"
    : "recrutement-header-unloaded";

  return (
    <div className="recrutement-header-container">
      <div className={loaded_class}>
        <div>
          <h3>Espace Carrières</h3>
        </div>
      </div>
      <div className="recrutement-header-svg" />
    </div>
  );
}

export default RecrutementHeader;
