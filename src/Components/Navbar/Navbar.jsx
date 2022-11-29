// === Components ===
import "./styles/scss/navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// === Components ===

const Navbar = () => {
  const [Mobile, setMobile] = useState(true);
  return (
    <nav>
      <a className="Navbar-Logo" href="#">
        Logo
      </a>
      <input
        className="material-symbols-outlined"
        id="Navbar-Search"
        type="text"
        placeholder="Search"
      ></input>

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
          <Link to="/Book">
            <li>Book</li>
          </Link>
          <Link to="/Login">
            <li>Login</li>
          </Link>
        </ul>

        {/*==== Mobile Navigation ====*/}
      </div>
      <div className="Mobile_Navigation">
        <button className="Mobile_Navigation_Button">
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
