import React from 'react';

const GradientBlock = props => (
  <div
    onClick={props.onClick}
    style={{
      display: 'inline-block',
      width: '0.75rem',
      height: '0.75rem',
      borderRadius: '50%',
      background:
        'linear-gradient(to right, red , orange, yellow, green, blue, violet)',
      boxShadow: '0 0 0 3px white',
      cursor: 'pointer',
    }}
  />
);

export default GradientBlock;
