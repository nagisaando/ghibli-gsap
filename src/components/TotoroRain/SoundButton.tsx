import soundOn from "../../assets/sound-on.svg";
import soundOff from "../../assets/sound-off.svg";
import { useEffect, useRef, useState } from "react";
import styles from "./TotoroRain.module.css";

interface SoundButtonProps {
  rainHard: boolean;
}
function SoundButton({ rainHard }: SoundButtonProps) {
  const [playSound, setPlaySound] = useState(false);
  // store in useRef not useState to prevent rerendering
  const rainAudio = useRef(new Audio("/light-rain.mp3"));
  const heavyRainAudio = useRef(new Audio("/heavy-rain.mp3"));
  function fadeVolume(
    audioRef: React.MutableRefObject<HTMLAudioElement>,
    direction: "in" | "out",
    maxSound: number = 1,
    step: number = 0.1,
    intervalTime: number = 100
  ) {
    const targetVolume = direction === "in" ? maxSound : 0;
    const volumeChange = direction === "in" ? step : -step;

    const interval = setInterval(() => {
      if (
        (direction === "in" && audioRef.current.volume < targetVolume) ||
        (direction === "out" && audioRef.current.volume > targetVolume)
      ) {
        audioRef.current.volume = Math.max(
          0,
          Math.min(1, audioRef.current.volume + volumeChange)
        );
      } else {
        clearInterval(interval);
      }
    }, intervalTime);
  }
  useEffect(() => {
    if (!rainHard) {
      fadeVolume(rainAudio, "in", 0.4);
      fadeVolume(heavyRainAudio, "out");
    } else {
      fadeVolume(rainAudio, "out");
      fadeVolume(heavyRainAudio, "in", 0.5);
    }
  }, [rainHard, rainAudio, heavyRainAudio]);

  function toggleSound() {
    setPlaySound((prev) => {
      if (prev) {
        rainAudio.current.pause();
        heavyRainAudio.current.pause();
      } else {
        rainAudio.current.play(); // Play audio on mount
        rainAudio.current.volume = 0.4;
        rainAudio.current.loop = true;

        heavyRainAudio.current.play();
        heavyRainAudio.current.volume = 0;
        heavyRainAudio.current.loop = true;
      }

      return !prev;
    });
  }

  return (
    <button
      aria-label={`${playSound ? "sound off" : "sound on"}`}
      onClick={toggleSound}
      className={styles["sound-button"]}
    >
      <img src={playSound ? soundOn : soundOff} aria-hidden="true"></img>
    </button>
  );
}

export default SoundButton;
