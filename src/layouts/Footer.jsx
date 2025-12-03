import React from 'react';
import breadIcon from '../assets/icons/breadIcon.png';
import drinkIcon from '../assets/icons/drinkIcon.png';
import cakeIcon from '../assets/icons/cakeIcon.png';
import pizzaIcon from '../assets/icons/pizzaIcon.png';
import Logo from '../components/common/Logo';

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
                  <a href="/" className="footer__link" data-link>
                    Home
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/about-me" className="footer__link" data-link>
                    About me
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/shop" className="footer__link" data-link>
                    Shop
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/recipe" className="footer__link" data-link>
                    Recipes
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/style-guide" className="footer__link" data-link>
                    Style Guide
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/licensing" className="footer__link" data-link>
                    Licensing
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/legal" className="footer__link" data-link>
                    Legal
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__nav-column">
              <h3 className="footer__title">Categories</h3>
              <ul className="footer__nav--list">
                <li className="footer__nav-item">
                  <a
                    href="/recipe-categories/dessert"
                    className="footer__link footer__link--icon"
                  >
                    <img
                      className="footer__link-icon"
                      src={cakeIcon}
                      alt="Cake icon"
                    />
                    <span>Dessert</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a
                    href="/recipe-categories/drink"
                    className="footer__link footer__link--icon"
                  >
                    <img
                      className="footer__link-icon"
                      src={drinkIcon}
                      alt="Drink icon"
                    />
                    <span>Drink</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a
                    href="/recipe-categories/lunch"
                    className="footer__link footer__link--icon"
                  >
                    <img
                      className="footer__link-icon"
                      src={pizzaIcon}
                      alt="Pizza icon"
                    />
                    <span>Lunch</span>
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a
                    href="/recipe-categories/breakfast"
                    className="footer__link footer__link--icon"
                  >
                    <img
                      className="footer__link-icon"
                      src={breadIcon}
                      alt="Bread icon"
                    />
                    <span>Breakfast</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__nav-column">
              <h3 className="footer__title">Follow me</h3>
              <ul className="footer__social">
                <li className="footer__social-item">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label="Follow us on Twitter"
                  >
                    <img
                      className="footer__social-icon"
                      src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6501c88eb0eaccde56b0c14b_x-logo.png"
                      alt="Twitter"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label="Follow us on Facebook"
                  >
                    <img
                      className="footer__social-icon"
                      src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6501c88eb0eaccde56b0c149_icons8-facebook-240%20(1).png"
                      alt="Facebook"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label="Follow us on Instagram"
                  >
                    <img
                      className="footer__social-icon"
                      src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6501c88eb0eaccde56b0c157_social-4.png"
                      alt="Instagram"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li className="footer__social-item">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label="Follow us on YouTube"
                  >
                    <img
                      className="footer__social-icon"
                      src="https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6501c88eb0eaccde56b0c143_social-3.png"
                      alt="YouTube"
                      loading="lazy"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
