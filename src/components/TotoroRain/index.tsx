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
import SoundButton from "./SoundButton";

gsap.registerPlugin(useGSAP);

function TotoroRain() {
  const [rainHard, setRainHard] = useState(false);
  const [jump, setJump] = useState(false);

  function toggleJump() {
    setJump((prev) => !prev);
  }
  useEffect(() => {
    const myInterval = setInterval(toggleJump, 10000);

    return () => clearInterval(myInterval);
  }, []);

  return (
    <div className={styles.container}>
      <SoundButton rainHard={rainHard} />
      <div className={styles["ground-rain-container"]}>
        <Ground />

        {Array.from({ length: 3 }, (_, i) => (
          <RainSplash key={i} />
        ))}
        <RainSplash variant="small" />
      </div>
      <div className={styles["character-container"]}>
        <Satsuki rainHard={rainHard} />
        <Totoro rainHard={rainHard} jump={jump} setRainHard={setRainHard} />
      </div>

      <Rain />
      <HardRain rainHard={rainHard} setRainHard={setRainHard} />
    </div>
  );
}

export default TotoroRain;
