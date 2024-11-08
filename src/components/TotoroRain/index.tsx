import styles from "./TotoroRain.module.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Rain from "./Rain";
import Ground from "./Ground";
import RainSplash from "./RainSplash";
import Totoro from "./Totoro";

gsap.registerPlugin(useGSAP);

function TotoroRain() {
  return (
    <div className={styles.container}>
      <div className={styles["ground-rain-container"]}>
        <Ground />

        {/* [TODO] 
        - display rains not to overlap each other
        - add more rain drops depending on the screen size
        */}
        {Array.from({ length: 3 }, (_, i) => (
          <RainSplash key={i} />
        ))}
        <RainSplash variant="small" />
      </div>
      <Totoro />
      {/* <Rain /> */}
    </div>
  );
}

export default TotoroRain;
