import React, { useState, useEffect } from "react";
import "./NosProduitsHeader.css";

function NosProduitsHeader() {
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    setLoaded(true);
    return () => {
      setLoaded(false);
    };
  }, [loaded]);

  const loaded_class = loaded
    ? "nos-produits-header-loaded"
    : "nos-produits-header-unloaded";

  return (
    <div className="nos-produits-header-container">
      <div className={loaded_class}>
        <div>
          <h3>Nos Produits</h3>
        </div>
      </div>
      <div className="nos-produits-header-svg" />
    </div>
  );
}

export default NosProduitsHeader;
