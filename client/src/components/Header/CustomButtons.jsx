import React from 'react'
import { Badge, Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../Login/LoginDialog';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > button, & > p, & > div':{
        marginRight: '40px !important',
        fontSize : 16,
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const Container = styled(Link)(({ theme }) => ({
    display:'flex',
    textDecoration: 'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const LoginButton = styled(Button)({
    color: '#2874f0',
    background: '#fff',
    textTransform: 'none',
    padding: '5px 40px',
    borderRadius : 2,
    boxShadow :'none',
    fontWeight : 600,
    height:32
})
const CustomButtons = () => {

    const [open,setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);

    const openDialog = () => {
        setOpen(true);
    }

  return (
    <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount}/>
            :
            <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>
        }
        <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
        <Typography style={{marginTop: 3}}>More</Typography>

        <Container to="/cart">
            <Badge badgeContent={cartItems?.length} color="error">
                <ShoppingCartIcon />
            </Badge>
            <Typography style={{ marginLeft: 10}}>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons;
