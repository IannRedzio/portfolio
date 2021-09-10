import "./topbar.scss";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";

export default function Topbar() {
  return (
    <div className="topbar">
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
        <div className="right"></div>
      </div>
    </div>
  );
}
