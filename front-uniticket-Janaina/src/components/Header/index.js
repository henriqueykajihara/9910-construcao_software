import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/global/_global-dir.scss";

class Header extends Component {
  render() {
    return (
      <header className="header d-flex justify-content-between align-items-center bg-white col-12">
        <Link to="/">
          <div className="logo"></div>
        </Link>
      </header>
    );
  }
}

export default Header;
