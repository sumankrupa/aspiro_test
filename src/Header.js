import React from "react";
import './header.css'

function Header() {
  return (
    <div>
      <header className="__header">
        <div className="container">
          <h1 className="__logo">
            <img src="/images/Jadoo.png" className="sk" alt="Jadoo" width="170" height="95" />
          </h1>
          <nav className="main__nav">
            <ul className="main__nav__list">
              <li>
                <div className="__text1">Destinations</div>
              </li>
              <li>
                <div className="__text1">Hotels</div>
              </li>
              <li>
                <div className="__text1">Flights</div>
              </li>
              <li>
                <div className="__text1">Bookings</div>
              </li>
              <li>
                <div className="__text1">Login</div>
              </li>
              <li>
                <div className="__text1 signupborder" >Sign Up</div>
              </li>
              <li className="__dropbox">
                <div className="__text1">EN</div>
                <img src="/images/Vector1.png" className="sk" alt="h" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
