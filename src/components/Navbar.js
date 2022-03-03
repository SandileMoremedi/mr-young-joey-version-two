import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>
      <h1>MYJ</h1>
      <div className="links">
        <div
          className={navOpen ? "navbar open" : "navbar"}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul
          className={navOpen ? "ul open" : "ul"}
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/discography">Discography</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
