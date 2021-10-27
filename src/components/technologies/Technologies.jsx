import "./technologies.scss";
import techList from "../../common/techList";

export default function Technologies() {
  return (
    <div className="technologies" id="technologies">
      <div className="wrapper">
        <h2>Tech Skills</h2>
        <div className="container">
          {techList.map((tech) => (
            <div className="items">
              <img src={tech.url} alt={tech.name} />
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
