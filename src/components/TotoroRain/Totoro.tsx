import { useRef } from "react";
import totoro from "../../assets/totoro.svg";
import TotoroEye from "./TotoroEye";
import styles from "./TotoroRain.module.css";
function Totoro() {
  const totoroRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.totoro} ref={totoroRef}>
      <TotoroEye style={{ left: "130px" }} totoroRef={totoroRef} />
      <TotoroEye style={{ left: "260px" }} totoroRef={totoroRef} />
      <img src={totoro} aria-hidden="true" />;
    </div>
  );
}

export default Totoro;
