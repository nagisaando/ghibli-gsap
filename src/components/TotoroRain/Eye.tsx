import styles from "./TotoroRain.module.css";

interface EyeProps {
  style?: React.CSSProperties;
}
function Eye({ style }: EyeProps) {
  return (
    <div className={`${styles["eye"]} eye`} style={style}>
      <div className={`${styles["eye-pupil"]} eye-pupil`}></div>
    </div>
  );
}

export default Eye;
