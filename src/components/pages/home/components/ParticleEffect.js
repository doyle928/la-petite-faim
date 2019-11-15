import Particles from "react-particles-js";
import React from "react";
import "./ParticleEffect.css";
import { useWindowSize } from "./../../../../hooks/useWindowSize";

const ParticleEffect = () => {
  const size = useWindowSize();

  const styles = {
    particleStyle: {
      position: "absolute",
      top: 0,
      left: 0,
      // width: `${size.width * 0.75}px !important`,
      // height: `${size.width / 1.459}px !important`,
      zIndex: 1
    }
  };

  return (
    <Particles
      className="particle-container"
      style={styles.particleStyle}
      params={{
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 800
            }
          },

          size: {
            value: 6,
            random: true
          },

          move: {
            direction: "top-right",
            out_mode: "out"
          },

          line_linked: {
            enable: false
          }
        },
        interactivity: {
          events: {
            onresize: {
              enable: true,
              density_auto: true,
              density_area: 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            }
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
      }}
    />
  );
};

export default ParticleEffect;
