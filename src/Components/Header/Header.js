import React from "react";
import { Link } from "react-router-dom";

function Header({ location }) {
  return (
    <header className="header--wrapper">
      <div className="header--logo">
        <Link to="/">
          HACKER <span>NEWS</span>
        </Link>
      </div>

      <div className="navbar">
        <Link
          className={location.pathname === "/" ? "active" : ""}
          to={{
            pathname: "/",
          }}
        >
          New
        </Link>
        {/* I could not find API for past stories, hence connecting newstories to past. ONLY for demo purpose */}
        <Link
          className={location.pathname === "/newstories" ? "active" : ""}
          to={{ pathname: "/newstories" }}
        >
          Past
        </Link>
      </div>
    </header>
  );
}

export default Header;
