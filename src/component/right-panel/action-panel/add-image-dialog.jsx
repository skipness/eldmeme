import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fabric } from 'fabric';
import React, { useContext, useRef } from 'react';
import { CanvasContext } from '../../canvas-context-provider';
import ImageUrlTextfield from '../../common/image-url-textfield';

const NewImageDialog = ({ onClick, open }) => {
  const context = useContext(CanvasContext);
  const textfieldRef = useRef(null);
  const addImage = () => {
    const {
      current: { canvas },
    } = context;
    const url = textfieldRef.current.value;
    if (url.trim().length === 0) return;
    fabric.Image.fromURL(url, image => {
      image.set({ originX: 'left', originY: 'top' });
      image.scaleToHeight(canvas.getHeight() / 2);
      image.scaleToWidth(canvas.getWidth() / 2);
      canvas.add(image).setActiveObject(image);
    });
    onClick();
  };
  return (
    <Dialog open={open} onClose={onClick}>
      <DialogTitle>新增圖片</DialogTitle>
      <DialogContent>
        <ImageUrlTextfield ref={textfieldRef} />
      </DialogContent>
      <DialogActions>
        <Button color='primary' onClick={onClick}>
          取消
        </Button>
        <Button color='primary' onClick={addImage}>
          確定
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewImageDialog;
