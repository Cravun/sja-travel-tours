// === Components ===
import "./styles/scss/navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Cross from "./Cross";
import Icon from "./Icon";
// === Components ===

const Navbar = () => {
  const location = useLocation();
  const [Mobile, setMobile] = useState(true);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <nav>
      <Link to="" className="Navbar-Logo">
        Logo
      </Link>
      <div className="Navbar-Search">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="Navbar_Menu">
        <ul
          className={Mobile ? "Nav-Links-Mobile" : "Nav-Links"}
          onClick={() => setMobile(false)}
        >
          <li>
            <Link
              to="/"
              className={"underline" + (url === "/" ? " active" : "")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Manage"
              className={"underline" + (url === "/Manage" ? " active" : "")}
            >
              Manage
            </Link>
          </li>
          <li>
            <Link
              to="/Book"
              className={"underline" + (url === "/Book" ? " active" : "")}
            >
              Book
            </Link>
          </li>
          <li>
            <Link
              to="/Login"
              className={"underline" + (url === "/Login" ? " active" : "")}
            >
              Login
            </Link>
          </li>
        </ul>

        {/*==== Mobile Navigation ====*/}
      </div>
      <div className="Mobile_Navigation">
        <button
          className="Mobile_Navigation_Button"
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? <Cross /> : <Icon />}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
