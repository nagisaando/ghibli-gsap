import { useEffect, useState } from "react";
import satsuki from "../../assets/satsuki.svg";
import exclamationMark from "../../assets/exclamation-mark.svg";
import Eye from "./Eye";
import styles from "./TotoroRain.module.css";

interface SatsukiProps {
  rainHard: boolean;
}

function Satsuki({ rainHard }: SatsukiProps) {
  const [openEyes, setOpenEyes] = useState(false);
  useEffect(() => {
    if (rainHard) {
      setTimeout(() => {
        setOpenEyes(true);
      }, 1000);
    } else {
      setOpenEyes(false);
    }
  }, [rainHard]);
  return (
    <div className={styles["satsuki-container"]}>
      {rainHard && (
        <img
          src={exclamationMark}
          aria-hidden="true"
          className={styles["exclamation-mark"]}
        />
      )}

      <div className={styles.satsuki}>
        {openEyes && rainHard && (
          <>
            <Eye style={{ left: "60px", top: "40px" }} />
            <Eye style={{ left: "100px", top: "40px" }} />
          </>
        )}
        <img src={satsuki} aria-hidden="true" />;
      </div>
    </div>
  );
}

export default Satsuki;
