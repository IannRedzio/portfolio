import "./about.scss";
import codeImage from "../../assets/codetyping.png";
export default function About() {
  return (
    <div className="about" id="about">
      <div className="left"></div>
      <div className="right">
        <div className="imageContainer">
          <img src={codeImage} alt="typing" />
        </div>
      </div>
    </div>
  );
}
