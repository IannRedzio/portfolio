import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">Sobre Mi</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#technologies">Tecnologias</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Proyectos</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contacto</a>
        </li>
        <li>
          <a
            download={"Ian Redzio_Full Stack_ES.pdf"}
            href={"/Ian Redzio_Full Stack_ES.pdf"}
          >
            CV
          </a>
        </li>
      </ul>
    </div>
  );
}
