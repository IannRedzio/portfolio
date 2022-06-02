import "./contact.scss";
import resumeImg from "../../assets/resume.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Rotate } from "react-reveal";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <Rotate top left>
        <div className="left">
          <div className="imageContainer">
            <img src={resumeImg} alt="resumeImage" />
          </div>
        </div>
      </Rotate>
      <Rotate top left>
        <div className="right">
          <div className="wrapper">
            <h3>Contactame!</h3>
            <p>
              Si necesitas a un programador creativo, curioso y alegre podes
              contactarme aca:
            </p>
            <div className="items">
              <div
                className="button"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ian-redzio/",
                    "_blank"
                  )
                }
                fontSize="inherit"
              >
                <LinkedInIcon className="icon" />
                <h5>LinkedIn</h5>
              </div>
              <div
                className="button"
                onClick={() =>
                  window.open("https://github.com/IannRedzio", "_blank")
                }
                fontSize="inherit"
              >
                <GitHubIcon className="icon" />
                <h5>Github</h5>
              </div>
              <div
                className="button"
                onClick={() =>
                  window.open("mailto:ianredzio13@gmail.com", "_blank")
                }
                fontSize="inherit"
              >
                <EmailIcon className="icon" />
                <h5>Gmail</h5>
              </div>
              <div className="button">
                <a
                  download={"Ian Redzio_Full Stack_ES.pdf"}
                  href={"/Ian Redzio_Full Stack_ES.pdf"}
                >
                  <AccountBoxIcon className="icon" />
                </a>
                <h5 fontSize="20px">Mi CV!</h5>
              </div>
            </div>
          </div>
        </div>
      </Rotate>
    </div>
  );
}
