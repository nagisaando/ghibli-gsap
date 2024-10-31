import GroundSvg from "../../assets/totoro-rain-ground.svg";
import styles from "./TotoroRain.module.css";

function Ground() {
  return (
    <div className={styles.ground}>
      <img src={GroundSvg} aria-hidden="true" />
    </div>
  );
}

export default Ground;
