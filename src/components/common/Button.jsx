import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/comStyling/button.css';

const Button = ({
  children,
  color = 'green', // "green" or "light"
  href = '#',
  onClick,
}) => {
  const isLight = color === 'light';

  const iconSrc = isLight
    ? 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6503134eb1cb19fd7ad46347_arrow-white.svg'
    : 'https://cdn.prod.website-files.com/6501c88eb0eaccde56b0c083/6501d777e97e1de57908741e_arrow.svg';

  // Determine if href is an external link
  const isExternal = href.startsWith('http') || href.startsWith('//');
  const isInternal = href.startsWith('/') && !isExternal;

  const buttonContent = (
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
  );

  return (
    <div className="contact-container">
      {isInternal ? (
        <Link
          to={href}
          className={`button ${isLight ? 'button--light' : ''}`}
          onClick={onClick}
        >
          {buttonContent}
        </Link>
      ) : (
        <a
          className={`button ${isLight ? 'button--light' : ''}`}
          href={href}
          onClick={onClick}
          {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {buttonContent}
        </a>
      )}
    </div>
  );
};

export default Button;
