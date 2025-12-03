import React from 'react';
import '../../css/comStyling/textSpark.css';

const TextSpark = ({ children, size = '4.5rem' }) => {
  return (
    <span style={{ paddingRight: size }} className="heading__highlight">
      {children}
    </span>
  );
};

export default TextSpark;
