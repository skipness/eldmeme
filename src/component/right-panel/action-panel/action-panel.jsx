import Grid from '@material-ui/core/Grid';
import AddPhotoAlternateTwoTone from '@material-ui/icons/AddPhotoAlternateTwoTone';
import AddTwoTone from '@material-ui/icons/AddTwoTone';
import DeleteForeverTwoTone from '@material-ui/icons/DeleteForeverTwoTone';
import DeleteTwoTone from '@material-ui/icons/DeleteTwoTone';
import SaveTwoTone from '@material-ui/icons/SaveTwoTone';
import { fabric } from 'fabric';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { CanvasContext } from '../../canvas-context-provider';
import AddImageDialog from './add-image-dialog';
import TooltipStyledIconButton from './tooltip-styled-icon-button';

const ActionPanel = () => {
  const canvasContext = useContext(CanvasContext);
  const canvasRef = useRef(null);
  const [open, setOpen] = useState(false);
  const onAddImageDialogClick = () => setOpen(!open);
  const addText = () => {
    const { current: canvas } = canvasRef;
    const newText = new fabric.Textbox('文字', {
      angle: 0,
      fill: '#ffffff',
      fontFamily: 'PMingLiU',
      fontSize: 40,
      fontStyle: 'normal',
      fontWeight: 'normal',
      left: 50,
      textAlizgn: 'left',
      top: 100,
      stroke: null,
      strokeWidth: 0,
    });
    canvas.add(newText).setActiveObject(newText);
  };
  const removeSelectedText = () => {
    const { current: canvas } = canvasRef;
    canvas.remove(canvas.getActiveObject()).requestRenderAll();
  };
  const removeAllText = () => {
    const { current: canvas } = canvasRef;
    canvas.remove(...canvas.getObjects()).requestRenderAll();
  };
  const saveImage = event => {
    const { current: canvas } = canvasRef;
    event.persist();
    event.target.parentElement.parentElement.parentElement.href = canvas.toDataURL(
      {
        multiplier: 854 / canvas.getWidth(),
      }
    );
  };
  useEffect(() => {
    const {
      current: { canvas },
    } = canvasContext;
    canvasRef.current = canvas;
  }, [canvasContext]);

  return (
    <Grid container item justify='space-between'>
      <TooltipStyledIconButton
        icon={<AddTwoTone />}
        onClick={addText}
        title='新增文字'
      />
      <TooltipStyledIconButton
        icon={<AddPhotoAlternateTwoTone />}
        onClick={onAddImageDialogClick}
        title='新增圖片'
      />
      <AddImageDialog onClick={onAddImageDialogClick} open={open} />
      <TooltipStyledIconButton
        icon={<DeleteTwoTone />}
        onClick={removeSelectedText}
        title='移除已選文字'
      />
      <TooltipStyledIconButton
        icon={<DeleteForeverTwoTone />}
        onClick={removeAllText}
        title='移除所有文字'
      />
      <TooltipStyledIconButton
        download='image.png'
        href='#'
        icon={<SaveTwoTone />}
        onClick={saveImage}
        title='下載'
      />
    </Grid>
  );
};

export default ActionPanel;
