import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon, Cross } from "./Hamburger";

// === Components ===

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  li {
    list-style: none;
  }
`;

const NavbarSearch = styled.div``;

const NavbarMenu = styled.div``;

const MobileNavigation = styled.div`
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [Mobile, setMobile] = useState(true);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <Navigation>
      <Link to="" className="Navbar-Logo">
        Logo
      </Link>
      <NavbarSearch>
        <input type="text" placeholder="Search"></input>
      </NavbarSearch>
      <NavbarMenu>
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
              to="/Book"
              className={"underline" + (url === "/" ? " active" : "")}
            >
              Book
            </Link>
          </li>
          <li>
            <Link
              to="/Manage"
              className={"underline" + (url === "/" ? " active" : "")}
            >
              Manage
            </Link>
          </li>
        </ul>
      </NavbarMenu>

      {/*==== Mobile Navigation ====*/}
      <MobileNavigation>
        <button onClick={() => setMobile(!Mobile)}>
          {Mobile ? <Cross /> : <Icon />}
        </button>
      </MobileNavigation>
    </Navigation>
  );
};
export default Navbar;
