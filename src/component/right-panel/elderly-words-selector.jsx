import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { fabric } from 'fabric';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { elderlyWords } from '../../constant';
import { CanvasContext } from '../canvas-context-provider';

const initialState = elderlyWords[0];

const ElderlyWordsSelector = () => {
  const canvasContext = useContext(CanvasContext);
  const canvasRef = useRef(null);
  const [text, setText] = useState(initialState);
  const onAddText = text => {
    const { current: canvas } = canvasRef;
    const newText = new fabric.Textbox(text, {
      angle: 0,
      fill: '#ffffff',
      fontFamily: 'PMingLiU',
      fontSize: 40,
      fontStyle: 'normal',
      fontWeight: 'normal',
      left: 50,
      textAlign: 'left',
      top: 100,
      stroke: null,
      strokeWidth: 0,
    });
    canvas.add(newText).setActiveObject(newText);
    setText(text);
  };
  useEffect(() => {
    const {
      current: { canvas },
    } = canvasContext;
    canvasRef.current = canvas;
  }, [canvasContext]);

  return (
    <Grid container item xs={12}>
      <FormControl fullWidth>
        <Select
          displayEmpty
          value={text}
          onChange={event => onAddText(event.target.value)}
        >
          {elderlyWords.map((word, index) => (
            <MenuItem key={index} value={word}>
              {word}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>快速加入長輩字</FormHelperText>
      </FormControl>
    </Grid>
  );
};

export default ElderlyWordsSelector;
