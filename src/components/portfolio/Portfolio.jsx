import { useState } from "react";
import data from "../../common/data";
import ReactPlayer from "react-player";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
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
                    <div
                      className="button"
                      onClick={() => window.open(d.url, "_blank")}
                      fontSize="inherit"
                    >
                      <GitHubIcon className="icon" />
                    </div>
                    <div
                      className="button"
                      onClick={() => window.open(d.urlPage, "_blank")}
                      fontSize="inherit"
                    >
                      <WebIcon className="icon" />
                    </div>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                {d.video ? (
                  <ReactPlayer
                    url={d.video}
                    controls={true}
                    playing={true}
                    loop={true}
                  />
                ) : (
                  <img src={d.img} alt={d.title} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosOutlinedIcon
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIosOutlinedIcon
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
