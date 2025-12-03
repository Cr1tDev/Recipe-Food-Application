import React from 'react';

const FollowSocials = () => {
  return (
    <div className="footer__nav-column">
      <h3 className="footer__title">Follow me</h3>
      <ul className="footer__social">
        <li className="footer__social-item">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
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
            className="footer__social-link"
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
            className="footer__social-link"
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
  );
};

export default FollowSocials;
