import React from 'react';
import clsx from 'clsx'; // optional helper for combining classes

const TabButton = ({
  label,
  icon,
  isActive = false,
  ariaControls,
  onClick,
}) => {
  return (
    <button
      className={clsx('tabs__button', isActive && 'tabs__button--active')}
      role="tab"
      aria-selected={isActive}
      aria-controls={ariaControls}
      onClick={onClick}
    >
      {icon && <img className="tabs__icon" src={icon} alt={`${label} icon`} />}
      {label}
    </button>
  );
};

export default TabButton;
