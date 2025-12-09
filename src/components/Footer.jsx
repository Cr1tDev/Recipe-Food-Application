import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../utils/constants';
import FollowSocials from './FollowSocials';
import Logo from './common/Logo';

const Footer = () => {
  return (
    <footer>
      <div className="container-wrapper">
        <div className="footer-container">
          {/* <!-- Footer Brand & Newsletter --> */}
          <div className="footer-brand">
            <Logo />

            <p className="footer__description">
              Join me on a gastronomic adventure filled with nutritious and
              delicious recipes.
            </p>

            {/* <!-- Newsletter --> */}
            <div className="footer__newsletter">
              <h3 className="footer__title">Sign up for our newsletter</h3>

              <div className="subscribe-form">
                <form
                  id="subscribe-form"
                  name="subscribe-form"
                  method="get"
                  className="subscribe-form__form"
                  aria-label="Subscribe"
                >
                  <input
                    className="subscribe-form__input"
                    maxLength="256"
                    name="email"
                    placeholder="Enter your email..."
                    type="email"
                    id="subscribe-form-email"
                    required
                  />
                  <div className="subscribe-form__button-wrapper">
                    <input
                      type="submit"
                      value=""
                      className="subscribe-form__button"
                      data-wait="Please wait..."
                    />
                  </div>
                </form>
              </div>

              <p className="footer__copyright">© This is powered by Recipee</p>
            </div>
          </div>

          {/* <!-- Footer Navigation --> */}
          <nav className="footer__nav">
            <div className="footer__nav--column">
              <h3 className="footer__title">Navigation</h3>
              <ul className="footer__nav--list">
                <li className="footer__nav--item">
                  <Link to="/" className="footer__link">
                    Home
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/about" className="footer__link">
                    About me
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/recipes" className="footer__link">
                    Recipes
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__nav-column">
              <h3 className="footer__title">Categories</h3>
              <ul className="footer__nav--list">
                {CATEGORIES.map((category) => (
                  <li key={category.id} className="footer__nav-item">
                    <Link
                      to={category.link}
                      className="footer__link footer__link--icon"
                    >
                      <img
                        className="footer__link-icon"
                        src={category.icon}
                        alt=""
                        aria-hidden="true"
                      />
                      <span>{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <FollowSocials />
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
