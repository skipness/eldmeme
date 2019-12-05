import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import StyledIconButton from '../../common/styled-icon-button';

const TooltipStyledIconButton = ({ download, href, icon, onClick, title }) => (
  <Tooltip title={title}>
    <StyledIconButton download={download} href={href} onClick={onClick}>
      {icon}
    </StyledIconButton>
  </Tooltip>
);

export default TooltipStyledIconButton;
