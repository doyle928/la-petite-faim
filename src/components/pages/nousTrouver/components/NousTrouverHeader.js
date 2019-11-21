import React, { useState, useEffect } from "react";
import "./NousTrouverHeader.css";

function NousTrouverHeader() {
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    setLoaded(true);
    return () => {
      setLoaded(false);
    };
  }, [loaded]);

  const loaded_class = loaded
    ? "nos-trouver-header-loaded"
    : "nos-trouver-header-unloaded";

  return (
    <div className="nous-trouver-header-container">
      <div className={loaded_class}>
        <div>
          <h3>Trouvez votre Boulangerie Feuillette</h3>
        </div>
      </div>
      <div className="nous-trouver-header-svg" />
    </div>
  );
}

export default NousTrouverHeader;
