import React, { useState } from 'react';
import Logo from './common/Logo';
import Button from './common/Button';
import breadIcon from '../assets/icons/breadIcon.png';
import pizzaIcon from '../assets/icons/pizzaIcon.png';
import cakeIcon from '../assets/icons/cakeIcon.png';
import drinkIcon from '../assets/icons/drinkIcon.png';
import arrowUp from '../assets/svg/arrowUp.svg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { name: 'Breakfast', link: '/recipe-category/breakfast', icon: breadIcon },
    { name: 'Lunch', link: '/recipe-category/lunch', icon: pizzaIcon },
    { name: 'Dessert', link: '/recipe-category/dessert', icon: cakeIcon },
    { name: 'Side', link: '/recipe-category/side', icon: drinkIcon },
  ];

  function handleClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }

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
                <a href="/recipes">Recipes</a>
              </li>
              <li
                className="link-item dropdown-container"
                onClick={handleClick}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="dropdown-toggle">
                  Categories
                  <span className="dropdown-arrow">
                    <img src={arrowUp} />
                  </span>
                </div>

                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <ul className="dropdown-list">
                      {categories.map(category => (
                        <li key={category.name} className="dropdown-item">
                          <a
                            href={category.link}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <img
                              src={category.icon}
                              className="dowpdown-icon"
                            />
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
