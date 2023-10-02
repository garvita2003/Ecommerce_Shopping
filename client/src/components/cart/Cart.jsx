import React from 'react'
import { useSelector } from 'react-redux';
import { Box, Typography, Grid, styled, Button} from '@mui/material';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/patym';

const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0'
    }
}))

const Header = styled(Box)({
    padding: '15px 24px',
    background:'#fff'
})

const ButtonWrapper = styled(Box)({
    padding: '16px 22px',
    background:'#fff',
    boxShadow: '0 -2px 10px 0 rgb(0 0 0 /10%)',
    borderTop: '1px solid #f0f0f0'
})

const ButtonStyling = styled(Button)({
    display:'flex',
    marginLeft: 'auto',
    background:'#fb641b',
    color:'#fff',
    width:250,
    height: 51,
    borderRadius: 2
})

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight:15,
    [theme.breakpoints.down('md')]:{
        marginBottom: 15
    }
}))



const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);

    const buyNow = async () => {
        let response = await payUsingPaytm({ amout: 500, email:'garvitakesharwani22@gmail.com'});
        let information = {
            action: `https://securegw-stage.paytm.in/order/process`,
            params: response
        }
        post(information);
    }

  return (
    <>
        {
            cartItems.length ?
            <Container container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography>MY CART ({ cartItems.length})</Typography>
                    </Header>
                    {
                        cartItems.map(item => (
                            <CartItem item={item}/>
                        ))
                    }
                    <ButtonWrapper>
                        <ButtonStyling onClick={() => buyNow()}>Place Order</ButtonStyling>
                    </ButtonWrapper>
                </LeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems}/>
                </Grid>
            </Container>
            :
            <EmptyCart />
        }
    </>
  )
}

export default Cart;