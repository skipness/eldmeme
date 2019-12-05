import Grid from '@material-ui/core/Grid';
import FormatBoldTwoTone from '@material-ui/icons/FormatBoldTwoTone';
import FormatItalicTwoTone from '@material-ui/icons/FormatItalicTwoTone';
import FormatUnderlinedTwoTone from '@material-ui/icons/FormatUnderlinedTwoTone';
import StrikethroughSTwoTone from '@material-ui/icons/StrikethroughSTwoTone';
import React, { useState } from 'react';
import { useActiveObject, useCanvas } from '../../../../hooks';
import StyledToggleButton from '../../../common/styled-toggle-button';
import StyledToggleButtonGroup from '../../../common/styled-toggle-button-group';

const initialState = [];

const TextFormatButtons = () => {
  const activeObject = useActiveObject(
    () => setTextFormat(initialState),
    object => {
      const bold = object.fontWeight === 'bold' ? 'bold' : '';
      const italic = object.fontStyle === 'italic' ? 'italic' : '';
      const linethrough = object.linethrough === true ? 'linethrough' : '';
      const underline = object.underline === true ? 'underline' : '';
      setTextFormat([bold, italic, linethrough, underline]);
    }
  );
  const canvas = useCanvas();
  const [textFormat, setTextFormat] = useState(initialState);
  const disabled = activeObject === null;
  const onFormatChange = (_, formats) => {
    if (activeObject === null) return;
    const bold = formats.includes('bold');
    const italic = formats.includes('italic');
    const linethrough = formats.includes('linethrough');
    const underline = formats.includes('underline');
    activeObject.set('fontWeight', bold ? 'bold' : 'normal');
    activeObject.set('fontStyle', italic ? 'italic' : 'normal');
    activeObject.set('linethrough', linethrough);
    activeObject.set('underline', underline);
    canvas.requestRenderAll();
    setTextFormat(formats);
  };

  return (
    <Grid container item alignItems='center' justify='center'>
      <StyledToggleButtonGroup
        onChange={onFormatChange}
        size='small'
        value={textFormat}
      >
        <StyledToggleButton disabled={disabled} value='bold'>
          <FormatBoldTwoTone />
        </StyledToggleButton>
        <StyledToggleButton disabled={disabled} value='italic'>
          <FormatItalicTwoTone />
        </StyledToggleButton>
        <StyledToggleButton disabled={disabled} value='underline'>
          <FormatUnderlinedTwoTone />
        </StyledToggleButton>
        <StyledToggleButton disabled={disabled} value='linethrough'>
          <StrikethroughSTwoTone />
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </Grid>
  );
};

export default TextFormatButtons;
