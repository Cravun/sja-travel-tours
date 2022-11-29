// === Components ===
import "./styles/scss/navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <a className="Navbar-Logo" href="#">
        Logo
      </a>
      <input className="Navbar-Search" type="text" placeholder="Search"></input>

      <div className="Navbar">
        <ul>
          <li className="active">
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Manage">Manage</Link>
          </li>
          <li>
            <a href="#">Book</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
