import React, { useEffect, useState } from 'react'
import { Box, Typography,styled } from '@mui/material';

const Heading = styled(Box)({
  padding:'15px 24px',
  background:'#fff',
  borderBottom: '1px solid #f0f0f0'
})

const Header = styled(Typography)({
  color:'#878787'
})

const Container = styled(Box)({
  padding: '15px 24px',
  background:'#fff',
  '& > p':{
    marginBottom: 20,
    fontSize: 14
  },
  '& > h6':{
    marginBottom: 20
  }
})

const Price = styled(Box)({
  float: 'right'
})

const Discount = styled(Typography)({
  color:'green',
  fontWeight: 500

})

const TotalView = ({ cartItems }) => {

  const [price,setPrice] = useState(0);
  const [discount,setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  },[cartItems])

  const totalAmount = () => {
    let price=0,discount=0;
    cartItems.map(item => {
      price+= item.price.mrp;
      discount+= (item.price.mrp - item.price.cost);
    });
    setPrice(price);
    setDiscount(discount);
  }

  return (
    <Box>
      <Heading>
        <Header>PRICE DETAILS</Header>
      </Heading>
      <Container>
        <Typography>Price ({cartItems?.length} item)
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>Discount
          <Price component="span">- ₹{discount}</Price>
        </Typography>
        <Typography>Delivery Charges
          <Price component="span">+ ₹40</Price>
        </Typography>
        <Typography variant='h6'>Total Amount
          <Price component="span">₹{price - discount +40}</Price>
        </Typography>
        <Discount>You will save ₹{discount - 40} on this order</Discount>
      </Container>
    </Box>
  )
}

export default TotalView;