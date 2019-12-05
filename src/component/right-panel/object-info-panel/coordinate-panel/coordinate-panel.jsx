import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import { useActiveObject, useCanvas } from '../../../../hooks';
import CommonInput from '../common-input';

const initialState = { left: 0, top: 0 };

const CoordinatePanel = () => {
  const activeObject = useActiveObject(
    () => setCoordinate(initialState),
    object => setCoordinate({ left: object.left, top: object.top })
  );
  const canvas = useCanvas();
  const [coordinate, setCoordinate] = useState(initialState);
  const disabled = activeObject === null;
  const onCoordinateChange = (coordinate, value) => {
    if (activeObject === null) return;
    activeObject.set(coordinate, value).setCoords();
    canvas.requestRenderAll();
  };

  return (
    <Grid container item>
      <CommonInput
        disabled={disabled}
        description='X'
        onChange={value => onCoordinateChange('left', value)}
        value={coordinate.left}
      />
      <CommonInput
        disabled={disabled}
        description='Y'
        onChange={value => onCoordinateChange('top', value)}
        value={coordinate.top}
      />
    </Grid>
  );
};

export default CoordinatePanel;
