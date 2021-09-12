import "./topbar.scss";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Logo
          </a>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>ianredzio13@gmail.com</span>
          </div>
          <div className="itemContainer">
            <RoomIcon className="icon" />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
        <div className="right">
          <div className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
