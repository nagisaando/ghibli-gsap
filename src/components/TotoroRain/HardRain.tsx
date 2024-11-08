import styles from "./TotoroRain.module.css";
import gsap from "gsap";
import { useEffect } from "react";

interface HardRainProps {
  rainHard?: boolean;
}
function HardRain({ rainHard }: HardRainProps) {
  useEffect(() => {
    if (rainHard) {
      gsap.utils.toArray(".hard-rain").forEach((element) => {
        const rainHeight = getRainHeight();

        const tl = gsap.timeline({
          delay: gsap.utils.random(0, 3),
        });

        tl.fromTo(
          element as HTMLDivElement,
          {
            opacity: 0.4,
            top: "-100%",
            height: rainHeight,
          },
          {
            top: "100%",
            duration: gsap.utils.random([1, 1.3]),
            ease: "none",
          }
        );
      });
    } else {
      gsap.set(".hard-rain", {
        opacity: 0.2,
        top: "-100%",
      });
    }
  }, [rainHard]);

  function getRainHeight() {
    const min = 20;
    const max = 220;

    // this will return the value that can be divided by 10 e.g. 20 not 25, 30 not 32
    const randomNumber =
      Math.floor((Math.random() * (max - min)) / 10) * 10 + min;
    return `${randomNumber}px`;
  }

  function getRainPosition() {
    const randomNumber = Math.floor(Math.random() * 100);
    return `${randomNumber}%`;
  }

  return (
    <>
      {Array.from({ length: 300 }, (_, i) => (
        <div
          key={`${i}-hard-rain`}
          className={`${styles.rain} hard-rain`}
          style={{ left: getRainPosition() }}
        ></div>
      ))}
    </>
  );
}

export default HardRain;
