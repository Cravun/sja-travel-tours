// === Components ===
import "./styles/scss/navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cross from "./Cross";
import Icon from "./Icon";
import { ImCross } from "react-icons/im";
// === Components ===

const Navbar = () => {
  const [Mobile, setMobile] = useState(true);
  return (
    <nav>
      <a className="Navbar-Logo" href="#">
        Logo
      </a>
      <div className="">
        <input
          className="justify-content-center"
          type="text"
          placeholder="Search"
        ></input>
      </div>
      <div className="Navbar_Menu">
        <ul
          className={Mobile ? "Nav-Links-Mobile" : "Nav-Links"}
          onClick={() => setMobile(false)}
        >
          <li className="d-flex justify-content-center">
            <Link className="d-flex justify-content-center" to="/">
              Home
            </Link>
          </li>
          <li className="d-flex justify-content-center">
            <Link className="d-flex justify-content-center" to="/Manage">
              Manage
            </Link>
          </li>
          <li className="d-flex justify-content-center">
            <Link className="d-flex justify-content-center" to="/Book">
              Book
            </Link>
          </li>
          <li className="d-flex justify-content-center">
            <Link className="d-flex justify-content-center" to="/Login">
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
