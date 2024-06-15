import "./HeaderNav.css";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function HeaderNav(props) {
  return (
    <>
      <div className="header-nav">
        <div className="cont-logo">
          <div className="logo"></div>
        </div>
        <div className="bell">
          <FaRegBell />
        </div>
        <span className="user">
          <p className="user--text">Username</p>
          <p className="user--icon">
            <FaUserCircle />
          </p>
        </span>
      </div>
    </>
  );
}

export { HeaderNav };
