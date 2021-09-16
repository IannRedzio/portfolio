import { useState } from "react";
import "./portfolio.scss";
import LineDown from "../../assets/down.png";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Videogames App",
      desc: "Proyecto SPA(Single Page Aplication) de Stack PERN..",
      img: "https://user-images.githubusercontent.com/81378921/131145650-f02a94fc-d4ad-4868-8d17-7a38162ed40d.gif",
    },
    {
      id: "2",
      title: "Spotify Songs",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://user-images.githubusercontent.com/81378921/131145650-f02a94fc-d4ad-4868-8d17-7a38162ed40d.gif",
    },
    {
      id: "3",
      title: "Nala",
      desc: "Proyecto de Frontend desarrollado para NALA ROCKS como proyecto final para el bootcamp SoyHenry.",
      img: "https://user-images.githubusercontent.com/81378921/131145650-f02a94fc-d4ad-4868-8d17-7a38162ed40d.gif",
    },
  ];

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
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://user-images.githubusercontent.com/81378921/131145650-f02a94fc-d4ad-4868-8d17-7a38162ed40d.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={LineDown}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={LineDown}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
