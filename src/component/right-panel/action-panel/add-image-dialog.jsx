import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import ImageUrlTextfield from '../../common/image-url-textfield';

const NewImageDialog = props => {
  const ref = React.useRef(null);
  return (
    <Dialog open={props.open} onClose={props.onClick}>
      <DialogTitle>新增圖片</DialogTitle>
      <DialogContent>
        <ImageUrlTextfield ref={ref} />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.onClick}>
          取消
        </Button>
        <Button
          color="primary"
          onClick={() => {
            props.addImage(ref.current.value);
            props.onClick();
          }}
        >
          確定
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewImageDialog;
