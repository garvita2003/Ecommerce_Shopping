import React from 'react';
import { Button, styled, ButtonGroup } from '@mui/material';

const Component = styled(ButtonGroup)({
    marginTop: 30
})

const StyledButton = styled(Button)({
  borderRadius: '50%'
})

const GroupedButton = () => {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <StyledButton disabled>1</StyledButton>
        <StyledButton>+</StyledButton>
    </Component>
  )
}

export default GroupedButton;