import { Dispatch, SetStateAction, useRef } from "react";
import totoro from "../../assets/totoro.svg";
import Eye from "./Eye";
import styles from "./TotoroRain.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface TotoroProps {
  rainHard?: boolean;
  setRainHard: Dispatch<SetStateAction<boolean>>;
  jump?: boolean;
}

function Totoro({ rainHard, jump, setRainHard }: TotoroProps) {
  const totoroRef = useRef<HTMLDivElement>(null);

  function jumpToggle() {
    const tl = gsap.timeline();

    tl.fromTo(
      totoroRef.current,
      { y: 0, scaleY: 1 },
      { y: 100, scaleY: 0.8 },
      0.2
    )
      .to(totoroRef.current, { y: -175 }, 0.2)
      .to(totoroRef.current, { y: -4, ease: "power1.in" }, ">")
      .to(totoroRef.current, {
        scaleY: 0.8,
        scaleX: 1.3,
        duration: 0.2,
        transformOrigin: "50% 100%",
      })
      .to(totoroRef.current, {
        y: 0,
        scaleY: 1,
        scaleX: 1,
        onComplete: () => {
          setRainHard(true);
        },
      });
  }

  useGSAP(
    () => {
      if (jump) {
        jumpToggle();
      }
    },
    { dependencies: [jump] }
  );

  function moveEye(e: MouseEvent) {
    const { clientX, clientY } = e;
    if (totoroRef.current !== null && !rainHard) {
      const totoroPosition = totoroRef.current.getBoundingClientRect();

      // move top
      if (clientY < totoroPosition.top) {
        gsap.set(".eye-pupil", { top: 0 });
      }

      if (clientX > totoroPosition.right) {
        gsap.set(".eye-pupil", { left: "20px" });
      }

      if (clientX < totoroPosition.left) {
        gsap.set(".eye-pupil", { left: 0 });
      }

      if (clientX >= totoroPosition.left && clientX <= totoroPosition.right) {
        gsap.set(".eye-pupil", { left: "10px" });
      }

      if (clientY >= totoroPosition.top) {
        if (Math.abs(totoroPosition.top - clientY) < 400) {
          gsap.set(".eye-pupil", { top: "10px" });
        } else {
          gsap.set(".eye-pupil", { top: "20px" });
        }
      }
    }
  }
  useGSAP(
    () => {
      if (rainHard) {
        gsap.set(".eye-pupil", {
          left: "0px",
          top: "10px",
          width: "30px",
        });
        gsap.set(".eye", { backgroundColor: "transparent" });
      } else {
        gsap.set(".eye-pupil", { width: "10px" });
        gsap.set(".eye", { backgroundColor: "#99a4ba" });
      }
      window.addEventListener("mousemove", moveEye);
      return () => {
        window.removeEventListener("mousemove", moveEye);
      };
    },
    { dependencies: [rainHard], scope: totoroRef }
  );
  return (
    <div className={`${styles.totoro} totoro`} ref={totoroRef}>
      <Eye style={{ left: "130px", top: "170px" }} />
      <Eye style={{ left: "260px", top: "170px" }} />
      <img src={totoro} aria-hidden="true" />;
    </div>
  );
}

export default Totoro;
