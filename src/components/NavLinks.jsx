import React from 'react';

const NavLinks = () => {
  return (
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
  );
};

export default NavLinks;
