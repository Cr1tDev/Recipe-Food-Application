import React from 'react';
import recipaLogo from '../assets/image/recipa-logo.png';

const logoContainer = {
  width: '10rem',
  overFlow: 'hidden',
};

const LogoImage = {
  display: 'block',
  with: '100%',
  height: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
};

const BrandLogo = () => {
  return (
    <a href="/" style={logoContainer}>
      <img style={LogoImage} src={recipaLogo} alt="recipa logo" />
    </a>
  );
};

export default BrandLogo;
