import React from 'react';
import Logo from './common/Logo';
import Button from './common/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container-wrapper">
        <div className="nav-container">
          <Logo />
          <button className="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navigation-links">
            <ul>
              <li className="link-item">
                <a href="/">Home</a>
              </li>
              <li className="link-item">
                <a href="/about">About</a>
              </li>
              <li className="link-item">
                <a href="#">Recipes</a>
              </li>
              <li className="link-item">
                <a href="#">Categories</a>
              </li>
              <li className="link-item">
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <Button color="green" href="/learn">
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
