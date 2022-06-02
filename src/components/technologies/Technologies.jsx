import "./technologies.scss";
import techList from "../../common/techList";
import Jump from "react-reveal/Jump";

export default function Technologies() {
  return (
    <div className="technologies" id="technologies">
      <div className="wrapper">
        <h2>Tech Skills</h2>
        <div className="container">
          {techList.map((tech) => (
            <div className="items">
              <img src={tech.url} alt={tech.name} />
              <Jump>
                <h3>{tech.name}</h3>
              </Jump>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
