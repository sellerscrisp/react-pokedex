import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav
    className="header level has-text-centered"
    style={{
      backgroundColor: "#CE403A",
      padding: "10px 20px",
      justifyContent: "center",
    }}
  >
    <Link to="/" className="level-left">
      <h1 className="is-size-1 has-text-warning">Pokedex</h1>
    </Link>
  </nav>
);

export default Header;
