import Grid from '@material-ui/core/Grid';
import FormatAlignCenterTwoTone from '@material-ui/icons/FormatAlignCenterTwoTone';
import FormatAlignJustifyTwoTone from '@material-ui/icons/FormatAlignJustifyTwoTone';
import FormatAlignLeftTwoTone from '@material-ui/icons/FormatAlignLeftTwoTone';
import FormatAlignRightTwoTone from '@material-ui/icons/FormatAlignRightTwoTone';
import React, { useState } from 'react';
import { useActiveObject, useCanvas } from '../../../../hooks';
import StyledToggleButton from '../../../common/styled-toggle-button';
import StyledToggleButtonGroup from '../../../common/styled-toggle-button-group';

const initialState = [''];

const TextAlignmentButtons = () => {
  const activeObject = useActiveObject(
    () => setAlign(initialState),
    object => setAlign(object.textAlign)
  );
  const canvas = useCanvas();
  const [align, setAlign] = useState(initialState);
  const disabled = activeObject === null;
  const onAlignChange = (_, align) => {
    if (activeObject === null) return;
    activeObject.set('textAlign', align);
    canvas.requestRenderAll();
    setAlign(align);
  };

  return (
    <Grid container item>
      <StyledToggleButtonGroup
        exclusive
        onChange={onAlignChange}
        size='small'
        value={align}
      >
        <StyledToggleButton disabled={disabled} value='left'>
          <FormatAlignLeftTwoTone />
        </StyledToggleButton>
        <StyledToggleButton disabled={disabled} value='center'>
          <FormatAlignCenterTwoTone />
        </StyledToggleButton>
        <StyledToggleButton disabled={disabled} value='right'>
          <FormatAlignRightTwoTone />
        </StyledToggleButton>
        <StyledToggleButton disabled={disabled} value='justify'>
          <FormatAlignJustifyTwoTone />
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </Grid>
  );
};

export default TextAlignmentButtons;
