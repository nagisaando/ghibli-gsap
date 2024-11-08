import { useEffect, useRef } from "react";
import totoro from "../../assets/totoro.svg";
import Eye from "./Eye";
import styles from "./TotoroRain.module.css";
import gsap from "gsap";

interface TotoroProps {
  rainHard?: boolean;
}

function Totoro({ rainHard }: TotoroProps) {
  const totoroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function moveEye(e: MouseEvent) {
      const { clientX, clientY } = e;
      if (totoroRef.current !== null && !rainHard) {
        const totoroPosition = totoroRef.current.getBoundingClientRect();

        // move top
        if (clientY < totoroPosition.top) {
          gsap.set(".totoro .eye-pupil", { top: 0 });
        }

        if (clientX > totoroPosition.right) {
          gsap.set(".totoro .eye-pupil", { left: "20px" });
        }

        if (clientX < totoroPosition.left) {
          gsap.set(".totoro .eye-pupil", { left: 0 });
        }

        if (clientX >= totoroPosition.left && clientX <= totoroPosition.right) {
          gsap.set(".totoro .eye-pupil", { left: "10px" });
        }

        if (clientY >= totoroPosition.top) {
          if (Math.abs(totoroPosition.top - clientY) < 400) {
            gsap.set(".totoro .eye-pupil", { top: "10px" });
          } else {
            gsap.set(".totoro .eye-pupil", { top: "20px" });
          }
        }
      }
    }

    if (rainHard) {
      gsap.set(".totoro .eye-pupil", {
        left: "0px",
        top: "10px",
        width: "30px",
      });
      gsap.set(".totoro .eye", { backgroundColor: "transparent" });
    } else {
      gsap.set(".totoro .eye-pupil", { width: "10px" });
      gsap.set(".totoro .eye", { backgroundColor: "#99a4ba" });
    }
    window.addEventListener("mousemove", moveEye);
    return () => {
      window.removeEventListener("mousemove", moveEye);
    };
  }, [rainHard]);
  return (
    <div className={`${styles.totoro} totoro`} ref={totoroRef}>
      <Eye style={{ left: "130px", top: "170px" }} />
      <Eye style={{ left: "260px", top: "170px" }} />
      <img src={totoro} aria-hidden="true" />;
    </div>
  );
}

export default Totoro;
