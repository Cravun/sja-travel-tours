import "./styles/scss/navbar.scss";
function Navbar() {
  return (
    <nav>
      <a className="Navbar-Logo" href="#">
        Logo
      </a>
      <input className="Navbar-Search" type="text" placeholder="Search"></input>

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
