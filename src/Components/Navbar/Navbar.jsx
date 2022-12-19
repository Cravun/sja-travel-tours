import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon, Cross } from "./Hamburger";

// === Styled ===
import { device } from "../../MediaQuery";
import styled from "styled-components";
import { GlobalStyles, PrimaryColor } from "../../Global";

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      list-style: none;
      display: inline;
      margin-left: 2em;
    }
    a {
      ${PrimaryColor}
      font-weight: 700;
      text-decoration: none;
      font-size: 20px;
    }
  }
`;

// const NavbarSearch = styled.div``;

const NavbarMenu = styled.div`
  width: 80vw;
  height: 60%;
`;

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
    <>
      <GlobalStyles />
      <Navigation>
        <Link to="" className="Navbar-Logo">
          Logo
        </Link>
        {/* <NavbarSearch>
    <input type="text" placeholder="Search"></input>
  </NavbarSearch> */}
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
                to="/Service"
                className={"underline" + (url === "/" ? " active" : "")}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/About Us"
                className={"underline" + (url === "/" ? " active" : "")}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={"underline" + (url === "/" ? " active" : "")}
              >
                Contact
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
    </>
  );
};
export default Navbar;
