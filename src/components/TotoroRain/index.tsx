import styles from "./TotoroRain.module.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Rain from "./Rain";
import Ground from "./Ground";
import RainSplash from "./RainSplash";

gsap.registerPlugin(useGSAP);

function TotoroRain() {
  return (
    <div className={styles.container}>
      <div className={styles["ground-rain-container"]}>
        <Ground />
        {Array.from({ length: 3 }, (_, i) => (
          <RainSplash key={i} />
        ))}
      </div>

      <Rain />
    </div>
  );
}

export default TotoroRain;
