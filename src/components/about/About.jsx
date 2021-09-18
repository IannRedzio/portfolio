import "./about.scss";
import codeImage from "../../assets/codetyping.png";
export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="wrapper">
          <h2>¿Quién es Ian?</h2>
          <p>
            Desde pequeño, siempre me interesó la programación. Durante la
            escuela secundaria hice unos cursos de HTML y CSS super basicos y
            ahi es donde desperté mi curiosidad hacia el desarrollo web.
          </p>
          <p>
            En Mayo de 2021, logré entrar al bootcamp{" "}
            <a href="https://www.soyhenry.com/">
              <strong>SoyHenry</strong>
            </a>{" "}
            donde desarrollé y mastericé habilidades tecnicas para un desarrollo
            web funcional, responsivo y adaptable.
          </p>
          <p>
            Actualmente soy desarrollador Full Stack en búsqueda de desarrollar
            mi experiencia y mi carrera profesional, con el fin de crecer en el
            ámbito tecnológico, generando soluciones y buscando nuevos desafíos.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="imageContainer">
          <img src={codeImage} alt="typing" />
        </div>
      </div>
    </div>
  );
}
