import "./App.css";
import TotoroRain from "./components/TotoroRain";
import gsap from "gsap";
import { GSDevTools } from "gsap-trial/all";
import { useGSAP } from "@gsap/react";
function App() {
  useGSAP(() => {
    // GSDevTools.create();
  });

  return (
    <>
      <TotoroRain />
    </>
  );
}

export default App;
