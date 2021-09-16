import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Technologies from "./components/technologies/Technologies";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Technologies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
