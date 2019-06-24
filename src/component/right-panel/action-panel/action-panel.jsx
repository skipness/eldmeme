import React from 'react';
import { Grid, Tooltip } from '@material-ui/core';
import {
  AddTwoTone,
  DeleteTwoTone,
  DeleteForeverTwoTone,
  SaveTwoTone,
} from '@material-ui/icons';
import StyledIconButton from '../common/styled-icon-button';
import { CanvasContextConsumer } from '../../canvas-context-provider';

const ActionPanel = () => (
  <CanvasContextConsumer>
    {({ addText, removeSelectedText, removeAllText, saveImage }) => (
      <Grid container item justify="space-between">
        <Tooltip title="新增文字">
          <StyledIconButton onClick={() => addText('文字')}>
            <AddTwoTone />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="移除已選文字">
          <StyledIconButton onClick={removeSelectedText}>
            <DeleteTwoTone />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="移除所有文字">
          <StyledIconButton onClick={removeAllText}>
            <DeleteForeverTwoTone />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="下載">
          <StyledIconButton download="image.png" href="#" onClick={saveImage}>
            <SaveTwoTone />
          </StyledIconButton>
        </Tooltip>
      </Grid>
    )}
  </CanvasContextConsumer>
);

export default ActionPanel;
