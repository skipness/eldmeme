import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';

const ColorPicker = ({ disabled, color, onChange }) => {
  const [currentColor, setCurrentColor] = useState(color);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const onClick = () => {
    if (disabled) return;
    setDisplayColorPicker(!displayColorPicker);
  };
  const onClose = () => setDisplayColorPicker(false);
  const onChangeComplete = color => {
    const newColor = color.hex;
    setCurrentColor(newColor);
    onChange(newColor);
  };
  const styles = reactCSS({
    default: {
      color: {
        background: `${currentColor}`,
        borderRadius: '50%',
        boxShadow: '0 0 0 3px white',
        cursor: `${disabled ? 'not-allowed' : 'pointer'}`,
        display: 'inline-block',
        height: '0.75rem',
        width: '0.75rem',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        bottom: '0px',
        left: '0px',
        position: 'fixed',
        top: '0px',
        right: '0px',
      },
    },
  });
  useEffect(() => {
    setCurrentColor(color);
  }, [color]);

  return (
    <div>
      <div style={styles.color} onClick={onClick} />
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={onClose} />
          <SketchPicker
            color={currentColor}
            onChangeComplete={onChangeComplete}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
