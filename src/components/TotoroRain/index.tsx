import styles from "./TotoroRain.module.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Rain from "./Rain";
import Ground from "./Ground";
import RainSplash from "./RainSplash";
import Totoro from "./Totoro";
import { useEffect, useState } from "react";
import HardRain from "./HardRain";
import Satsuki from "./Satsuki";

gsap.registerPlugin(useGSAP);

function TotoroRain() {
  const [rainHard, setRainHard] = useState(false);

  function toggleRainHard() {
    setRainHard((prev) => !prev);
  }
  useEffect(() => {
    const myInterval = setInterval(toggleRainHard, 5000);
    return () => clearInterval(myInterval);
  }, []);
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
      <Totoro rainHard={rainHard} />
      <Satsuki rainHard={false} />
      <Rain />
      <HardRain rainHard={rainHard} />
    </div>
  );
}

export default TotoroRain;
