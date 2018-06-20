import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="HeaderHolder">
        <div className="MainHeader">
          <div className="MobileS">☰</div>
          <div className="HeaderLogo">
            <a href="http://localhost:3000/home" id="top">
              Person Enquiry
            </a>
          </div>
        </div>
        <nav className="MainMenu">
          <ul>
            <li>
              <a href="http://localhost:3000/home">Home</a>
            </li>
            <li>
              <a href="http://localhost:3000/enquiry">Enquiry</a>
            </li>
            <li>
              <a href="http://localhost:3000/ids">Person</a>
            </li>
            <li>
              <a href="http://localhost:3000/veh">Vehicle</a>
            </li>
            <li>
              <a href="http://localhost:3000/veh">Driver</a>
            </li>
            <li>
              <a href="http://localhost:3000/demo">Property</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
