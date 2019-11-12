import Particles from "react-particles-js";
import React from "react";
import "./ParticleEffect.css";

const ParticleEffect=()=> {
  const styles= {
    particleStyle: {
      position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1
    }
  }

  ;
  return (<Particles className="particle-container"

    style= {
      styles.particleStyle
    }

    params= {
        {
        particles: {
          number: {

            value: 70,
            density: {
              enable: false
            }
          }

          ,
          size: {
            value: 6,
            random: true
          }

          ,
          move: {
            direction: "top-right",
            out_mode: "out"
          }

          ,
          line_linked: {
            enable: false
          }
        }

        // },
        // interactivity: {
        //   events: {
        //     onclick: {
        //       enable: true,
        //       mode: "remove"
        //     }
        //   },
        //   modes: {
        //     remove: {
        //       particles_nb: 10
        //     }
        //   }
        // }
      }
    }

    />);
}

;

export default ParticleEffect;