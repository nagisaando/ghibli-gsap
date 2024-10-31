import styles from "./TotoroRain.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Physics2DPlugin from "gsap-trial/Physics2DPlugin";
gsap.registerPlugin(Physics2DPlugin);
function Rain() {
  useGSAP(() => {
    gsap.utils.toArray(".rain").forEach((element) => {
      // Each rain element will animate individually
      // we need to have gsap animation for each element rather than grouping as `gsap.to(".rain", {})`
      // otherwise we can not make smooth infinite rain animation
      const rainHeight = getRainHeight();

      const tl = gsap.timeline({
        repeat: -1, // Repeat the entire timeline
        delay: gsap.utils.random(0, 3),
      });

      tl.fromTo(
        element as HTMLDivElement,
        { opacity: 0.2, top: "-100%", height: rainHeight },
        {
          top: "100%",
          duration: gsap.utils.random([1.5, 2]),
          ease: "none",
        }
      );
    });
  });

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
      {Array.from({ length: 80 }, (_, i) => (
        <div
          key={i}
          className={`${styles.rain} rain`}
          style={{ left: getRainPosition() }}
        ></div>
      ))}
    </>
  );
}

export default Rain;
