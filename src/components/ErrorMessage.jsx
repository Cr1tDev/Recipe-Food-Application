import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <p className="error" role="alert">
      <span aria-hidden="true">⛔</span>
      {message}
    </p>
  );
};

export default React.memo(ErrorMessage);
