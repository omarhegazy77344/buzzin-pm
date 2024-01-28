import React from 'react';
import Button from '@mui/material/Button';

const CommonButton = ({disableFocusRipple,disableElevation,disableRipple,children, color, disabled, loading, type ,size, sx, variant, endIcon, startIcon}) =>{
  return(
    <Button
    type={type}
    loading={loading}
    disableFocusRipple={disableFocusRipple}
    disableElevation={disableElevation}
    disableRipple={disableRipple}
    color={color}
    disabled={disabled}
    size={size}
    variant={variant}
    sx={sx}
    endIcon={endIcon}
    startIcon ={startIcon}
    >
    {children}
    </Button>
  )
}


export default CommonButton