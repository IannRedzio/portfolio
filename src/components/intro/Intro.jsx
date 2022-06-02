import "./intro.scss";
import HomeImage from "../../assets/typing.png";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Fade } from "react-reveal";
import LineDown from "../../assets/down.png";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 500,
      backSpeed: 60,
      strings: ["Developer", "Full Stack Developer", "Frontend Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <Fade left>
          <div className="imageContainer">
            <img src={HomeImage} alt="homeimage" />
          </div>
        </Fade>
      </div>
      <div className="right">
        <Fade right>
          <div className="wrapper">
            <h2>Hola, me llamo</h2>
            <h1>Ian Redzio</h1>
            <h3>
              <span ref={textRef}></span>
            </h3>
          </div>
        </Fade>
        <a href="#about">
          <img src={LineDown} alt="linedown" />
        </a>
      </div>
    </div>
  );
}
