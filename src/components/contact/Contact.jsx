import "./contact.scss";
import resumeImg from "../../assets/resume.png";
import linkedIn from "../../assets/linkedIn.png";
import gitHub from "../../assets/github2.png";
import mail from "../../assets/mail.png";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="imageContainer">
          <img src={resumeImg} alt="resumeImage" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Contactame!</h3>
          <p>
            Si necesitas a un programador creativo, curioso y alegre podes
            contactarme aca:
          </p>
          <div className="items">
              <div className="button" onClick={() => window.open("https://www.linkedin.com/in/ian-redzio/", "_blank")} fontSize="inherit">
                <img src={linkedIn} alt="linkedin" />  
              </div>
              <div className="button" onClick={() => window.open("https://github.com/IannRedzio", "_blank")} fontSize="inherit">
                <img src={gitHub} alt="github" />  
              </div>
              <div className="button" onClick={() => window.open("mailto:ianredzio13@gmail.com", "_blank")} fontSize="inherit">
                <img src={mail} alt="mail" />  
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
