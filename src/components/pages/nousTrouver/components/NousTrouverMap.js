import React from "react";
import ReactMapGL from "react-map-gl";
import "./NousTrouverMap.css";

class NousTrouverMap extends React.Component {
  state = {
    viewport: {
      width: "100%",
      height: "calc(100vh - 77px) !important",
      latitude: 47.393791,
      longitude: 0.684449,
      zoom: 5
    }
  };

  render() {
    require("dotenv").config();
    return (
      <ReactMapGL
        className="nous-trouver-map"
        {...this.state.viewport}
        onViewportChange={viewport =>
          this.setState({
            viewport
          })
        }
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
    );
  }
}

export default NousTrouverMap;
