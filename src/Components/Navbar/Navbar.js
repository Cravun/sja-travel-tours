import "./styles/scss/navbar.scss";
function Navbar() {
  return (
    <nav>
      <a className="Navbar-Logo" href="#">
        Logo
      </a>
      <div className="Navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Manage</a>
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
}
export default Navbar;
