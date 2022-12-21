import "./styles/scss/navbar.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon, Cross } from "./Hamburger";
import { NavLink } from "react-router-dom";

// === Components ===
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const location = useLocation();
  const [Mobile, setMobile] = useState(true);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <nav>
      <NavLink to="" className="Navbar-Logo">
        Logo
      </NavLink>
      <div className="Navbar_Menu">
        <ul
          className={Mobile ? "Nav-Links-Mobile" : "Nav-Links"}
          onClick={() => setMobile(false)}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/*==== Mobile Navigation ====*/}
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
