import React, { useState } from "react";
import "./navbar.css";
import {NavLink} from 'react-router-dom'
import Userbtn from "../UserBtn/Userbtn";


function NavBar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__brand">
        mytinerary
      </NavLink>
      <ul className={active}>
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/hotels" className="nav__link">
            Hotels
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/cities" className="nav__link">
            Cities
          </NavLink>
        </li>
        <li className="nav__item nav__item__user">
          <NavLink to="/signIn" className="nav__link">
            Sign In
          </NavLink>
        </li>
        <li className="nav__item nav__item__user">
          <NavLink to="/signUp" className="nav__link">
            Sign Up
          </NavLink>
        </li>
       
        <Userbtn></Userbtn>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;