import { useState } from 'react'
import { Box, Typography, Menu, MenuItem , styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)({
  marginTop:5
})

const Logout = styled(Typography)({
  fontSize: 14,
  marginLeft: 20
})

const Profile = ({ account, setAccount }) => {

  const [open , setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const logoutUser = () => {
    setAccount('');

  }
  return (
    <>
    <Box onClick={handleClick}>
      <Typography style={{marginTop : 2, cursor:'pointer'}}>{account}</Typography>
    </Box>
    <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {handleClose(); logoutUser();}} >
          <PowerSettingsNewIcon color='primary' fontSize='small'/>
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  )
}

export default Profile;