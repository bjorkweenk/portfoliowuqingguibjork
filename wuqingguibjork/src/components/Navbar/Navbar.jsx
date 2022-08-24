import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <header>
            <img id="nav-logo" src="../logobw.png" alt="logobw" width={50} height={50}></img>
            <nav>
            <ul>
              <li><Link to="/">splash</Link></li>
              <li><Link to="home">home</Link></li>
              <li><Link to="work">work</Link></li>
              <li><Link to="contact">contact</Link></li>
            </ul>
            </nav>
            </header>
        </div>
    );
};

export default Navbar;