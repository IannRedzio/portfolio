import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import gitIcon from "../../assets/github2.png";
import sitioWeb from "../../assets/sitio.png";
import data from "../../common/data";
import "./portfolio.scss";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <div className="button" onClick={() => window.open(d.url, "_blank")} fontSize="inherit">
                     <img src={gitIcon} alt="github" /> 
                    </div>
                    <div className="button" onClick={() => window.open(d.urlPage, "_blank")} fontSize="inherit" >
                      <img src={sitioWeb} alt="sitioWeb" />
                    </div>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrowLeft}
        alt="arrowLeft"
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src={arrowRight}
        alt="arrowRight"
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}

