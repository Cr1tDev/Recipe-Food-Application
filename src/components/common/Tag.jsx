import React from 'react';
import '../../css/comStyling/tag.css';

const Tag = ({ position = 'center', color = 'green', children }) => {
  const colorMap = {
    green: '#00693d',
    light: '#ffffff',
  };

  const chosenColor = colorMap[color.toLowerCase()] || colorMap.green;

  const justifyMap = {
    left: 'flex-end',
    right: 'flex-start',
    center: 'center',
  };

  const justify = justifyMap[position.toLowerCase()] || 'center';

  return (
    <div className="tag" style={{ justifyContent: justify }}>
      <span
        className="tag__bullet"
        aria-hidden="true"
        style={{ borderColor: chosenColor }}
      ></span>

      <span className="tag__text" style={{ color: chosenColor }}>
        {children}
      </span>
    </div>
  );
};

export default Tag;
