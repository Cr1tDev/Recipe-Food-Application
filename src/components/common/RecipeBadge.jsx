import React from 'react';
import pizzaIcon from '../../assets/icons/pizzaIcon.png';

const RecipeBadge = ({ icon, name, className = 'badge' }) => {
  return (
    <div className={className}>
      <img
        className={`${className}__icon`}
        src={icon || pizzaIcon}
        alt={name}
      />
      <span className={`${className}__text`}>{name}</span>
    </div>
  );
};

export default RecipeBadge;
