import rainSplashLarge from "../../assets/rain-splash-large.svg";
import rainSplashSmall from "../../assets/rain-splash-small.svg";
import styles from "./TotoroRain.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface RainSplashProps {
  variant?: "large" | "small";
}
function RainSplash({ variant = "large" }: RainSplashProps) {
  const rainSplashImg = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: gsap.utils.random(0, 5),
        delay: gsap.utils.random(0, 3),
      });

      tl.set(rainSplashImg.current, {
        opacity: 0.5,
        top: "random([-50, 20, 60])",
        left: "random(['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%','90%'])",
      })
        .set(rainSplashImg.current, { objectPosition: "-70px 0" }, "+=0.5")
        .set(
          rainSplashImg.current,
          {
            objectPosition: "-140px 0",
          },
          "+=0.5"
        )
        .set(
          rainSplashImg.current,
          {
            opacity: 0,
          },
          "+=0.5"
        );
    },
    { scope: rainSplashImg }
  );
  return (
    <div>
      <img
        ref={rainSplashImg}
        src={variant === "large" ? rainSplashLarge : rainSplashSmall}
        className={`${styles["rain-splash"]} rain-splash`}
        aria-hidden="true"
      />
    </div>
  );
}

export default RainSplash;
