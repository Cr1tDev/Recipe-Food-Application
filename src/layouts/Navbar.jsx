import React from 'react';
import Logo from '../components/common/Logo';
import Button from '../components/common/Button';
import NavLinks from '../components/NavLinks';

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
          <NavLinks />
          <Button color="green" href="/learn">
            Contact me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
