import React from 'react';
import '../../css/comStyling/button.css';

const Button = ({
  children,
  color = 'green', // "green" or "light"
  href = '#',
}) => {
  const isLight = color === 'light';

  const iconSrc = isLight
    ? 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6503134eb1cb19fd7ad46347_arrow-white.svg'
    : 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6501d777e97e1de57908741e_arrow.svg';

  return (
    <div className="contact-container">
      <a className={`button ${isLight ? 'button--light' : ''}`} href={href}>
        <span className="button__content">
          <span className="button__text">{children}</span>

          <span className="button__icon-wrapper">
            <img
              className="button__icon"
              src={iconSrc}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </span>
        </span>
      </a>
    </div>
  );
};

export default Button;
