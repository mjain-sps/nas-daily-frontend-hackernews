import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header--wrapper">
      <div className="header--logo">
        HACKER <span>NEWS</span>
      </div>

      <div className="navbar">
        <Link className={window.location.pathname === "/" && "active"}>
          New
        </Link>
        <Link className={window.location.pathname === "/past" && "active"}>
          Past
        </Link>
      </div>
    </header>
  );
}

export default Header;
