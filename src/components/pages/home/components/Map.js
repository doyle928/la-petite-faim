import React from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import "./Map.css";

class Map extends React.Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: 400,
      latitude: 47.393791,
      longitude: 0.684449,
      zoom: 4
    }
  };

  render() {
    require("dotenv").config();
    return (
      <ReactMapGL
        className="discover-map"
        {...this.state.viewport}
        onViewportChange={viewport =>
          this.setState({
            viewport
          })
        }
        scrollZoom={false}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <div style={{ position: "absolute", right: "18px", top: "7px" }}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    );
  }
}

export default Map;
