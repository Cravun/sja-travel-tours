// === Components ===
import "./styles/scss/navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cross from "./Cross";
import Icon from "./Icon";
// === Components ===

const Navbar = () => {
  const [Mobile, setMobile] = useState(true);
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Manage">Manage</Link>
          </li>
          <li>
            <Link to="/Book">Book</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
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
