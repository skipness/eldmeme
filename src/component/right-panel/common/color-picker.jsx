import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
  state = { color: '#000000', displayColorPicker: false };

  componentDidUpdate(prevProps, _) {
    if (this.props.color !== prevProps.color) {
      this.setState({ color: this.props.color });
    }
  }

  onChange = color => {
    this.setState({ color: color.hex });
    this.props.onChange(color.hex);
  };

  onClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  onClose = () => {
    this.setState({ displayColorPicker: false });
  };

  render() {
    const { color, displayColorPicker } = this.state;
    const styles = reactCSS({
      default: {
        color: {
          display: 'inline-block',
          width: '0.75rem',
          height: '0.75rem',
          borderRadius: '50%',
          background: `${color}`,
          boxShadow: '0 0 0 3px white',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    return (
      <div>
        <div style={styles.color} onClick={this.onClick} />
        {displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.onClose} />
            <SketchPicker color={color} onChange={this.onChange} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
