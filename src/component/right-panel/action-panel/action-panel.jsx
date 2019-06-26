import React from 'react';
import { Grid, Tooltip } from '@material-ui/core';
import {
  AddTwoTone,
  AddPhotoAlternateTwoTone,
  DeleteTwoTone,
  DeleteForeverTwoTone,
  SaveTwoTone,
} from '@material-ui/icons';
import StyledIconButton from '../../common/styled-icon-button';
import { CanvasContextConsumer } from '../../canvas-context-provider';
import AddImageDialog from './add-image-dialog';

const ActionPanel = () => {
  const [open, setOpen] = React.useState(false);
  const onClick = () => setOpen(!open);
  return (
    <CanvasContextConsumer>
      {({
        addText,
        addImage,
        removeSelectedText,
        removeAllText,
        saveImage,
      }) => (
        <Grid container item justify="space-between">
          <Tooltip title="新增文字">
            <StyledIconButton onClick={() => addText('文字')}>
              <AddTwoTone />
            </StyledIconButton>
          </Tooltip>
          <Tooltip title="新增圖片">
            <StyledIconButton onClick={onClick}>
              <AddPhotoAlternateTwoTone />
            </StyledIconButton>
          </Tooltip>
          <AddImageDialog addImage={addImage} onClick={onClick} open={open} />
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
};

export default ActionPanel;
