import React from 'react';

const GradientBlock = ({ disabled, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background:
        'linear-gradient(to right, red , orange, yellow, green, blue, violet)',
      borderRadius: '50%',
      boxShadow: '0 0 0 3px white',
      cursor: `${disabled ? 'not-allowed' : 'pointer'}`,
      display: 'inline-block',
      height: '0.75rem',
      width: '0.75rem',
    }}
  />
);

export default GradientBlock;
