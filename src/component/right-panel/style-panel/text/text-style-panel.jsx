import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextFormatButtons from './text-format-buttons';
import TextAlignmentButtons from './text-alignment-buttons';
import { CanvasContextConsumer } from '../../../canvas-context-provider';

const TextStylePanel = () => (
  <CanvasContextConsumer>
    {({ activeObject, onTextFormatChange, onTextAlignmentChange }) => (
      <Grid container item direction="column" xs={12} spacing={1}>
        <Grid item>
          <TextFormatButtons
            formats={
              (activeObject && [
                activeObject.fontWeight === 'bold' ? 'bold' : '',
                activeObject.fontStyle === 'italic' ? 'italic' : '',
                activeObject.underline === true ? 'underline' : '',
                activeObject.linethrough === true ? 'linethrough' : '',
              ]) ||
              []
            }
            onTextFormatChange={onTextFormatChange}
          />
        </Grid>
        <Grid item>
          <TextAlignmentButtons
            alignment={(activeObject && activeObject.textAlign) || ''}
            onTextAlignmentChange={onTextAlignmentChange}
          />
        </Grid>
      </Grid>
    )}
  </CanvasContextConsumer>
);

export default TextStylePanel;
