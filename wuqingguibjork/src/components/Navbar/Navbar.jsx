import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <header>
            <img id="nav-logo" src="../logobw.png" alt="logobw" width={50} height={50}></img>
            <nav>
            <ul>
              <li><a href="home"> home</a></li>
              <li><a href="./work">work</a></li>
              <li><a href="./about">about</a></li>
              <li><a href="./contact">contact</a></li>
            </ul>
            </nav>
            </header>
        </div>
    );
};

export default Navbar;