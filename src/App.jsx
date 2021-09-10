import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Technologies from "./components/technologies/Technologies";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";


function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Technologies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
