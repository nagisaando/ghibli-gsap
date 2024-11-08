import satsuki from "../../assets/satsuki.svg";
import Eye from "./Eye";
import styles from "./TotoroRain.module.css";

interface SatsukiProps {
  rainHard: boolean;
}

function Satsuki({ rainHard }: SatsukiProps) {
  return (
    <div className={styles.satsuki}>
      {rainHard && (
        <>
          <Eye style={{ left: "60px", top: "40px" }} />
          <Eye style={{ left: "100px", top: "40px" }} />
        </>
      )}
      <img src={satsuki} aria-hidden="true" />;
    </div>
  );
}

export default Satsuki;
