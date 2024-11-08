import styles from "./TotoroRain.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

interface TotoroEyeProps {
  style?: React.CSSProperties;
  totoroRef: React.RefObject<HTMLDivElement>;
}
function TotoroEye({ style, totoroRef }: TotoroEyeProps) {
  const totoroEyePupilRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function moveEye(e: MouseEvent) {
      const { clientX, clientY } = e;
      console.log(clientX, clientY);
      if (totoroRef.current !== null) {
        const totoroPosition = totoroRef.current.getBoundingClientRect();
        console.log(totoroPosition);

        // move top
        if (clientY < totoroPosition.top) {
          gsap.set(totoroEyePupilRef.current, { top: 0 });
        }

        if (clientX > totoroPosition.right) {
          gsap.set(totoroEyePupilRef.current, { left: "20px" });
        }

        if (clientX < totoroPosition.left) {
          gsap.set(totoroEyePupilRef.current, { left: 0 });
        }

        if (clientX >= totoroPosition.left && clientX <= totoroPosition.right) {
          gsap.set(totoroEyePupilRef.current, { left: "10px" });
        }

        if (clientY >= totoroPosition.top) {
          if (Math.abs(totoroPosition.top - clientY) < 400) {
            gsap.set(totoroEyePupilRef.current, { top: "10px" });
          } else {
            gsap.set(totoroEyePupilRef.current, { top: "20px" });
          }
        }
      }
    }
    window.addEventListener("mousemove", moveEye);
    return () => {
      window.removeEventListener("mousemove", moveEye);
    };
  });

  return (
    <div className={`${styles["eye"]} eye`} style={style}>
      <div className={`${styles["pupil"]} pupil`} ref={totoroEyePupilRef}></div>
    </div>
  );
}

export default TotoroEye;
