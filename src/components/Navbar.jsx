import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from './common/Logo';
import Button from './common/Button';
import { CATEGORIES } from '../utils/constants';
import arrowUp from '../assets/svg/arrowUp.svg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleDropdownEnter = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const handleCategoryClick = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  return (
    <nav className="navbar" role="navigation">
      <div className="container-wrapper">
        <div className="nav-container">
          <Logo />
          <button className="hamburger" aria-label="Toggle menu" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navigation-links">
            <ul>
              <li className="link-item">
                <Link to="/">Home</Link>
              </li>
              <li className="link-item">
                <Link to="/about">About</Link>
              </li>
              <li className="link-item">
                <Link to="/recipes">Recipes</Link>
              </li>
              <li
                className="link-item dropdown-container"
                onClick={handleDropdownToggle}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="dropdown-toggle">
                  Categories
                  <span className="dropdown-arrow">
                    <img src={arrowUp} alt="" aria-hidden="true" />
                  </span>
                </div>

                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <ul className="dropdown-list">
                      {CATEGORIES.map((category) => (
                        <li key={category.id} className="dropdown-item">
                          <Link
                            to={category.link}
                            onClick={handleCategoryClick}
                          >
                            <img
                              src={category.icon}
                              alt=""
                              className="dowpdown-icon"
                              aria-hidden="true"
                            />
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li className="link-item">
                <Link to="/recipes">News</Link>
              </li>
            </ul>
          </div>
          <Button color="green" href="/learn">
            Contact me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
