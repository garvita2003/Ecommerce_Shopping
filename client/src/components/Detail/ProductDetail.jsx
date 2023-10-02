import React from 'react'
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell, ListItem } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)({
    fontSize:14,
    verticalAlign: 'baseline',
    ' & > p':{
        fontSize: 14,
        marginTop:10
    }
})

const StyledBadge = styled(LocalOfferIcon)({
    marginRight: 10,
    color: '#00CC00',
    fontSize: 15
})

const List = styled(ListItem)({
    display:'flex',
    flexDirection: 'column',
    alignItems:'start'
})

const ColumnText = styled(TableRow)({
    fontSize:14,
    verticalAlign: 'baseline',
    '& > td':{
        fontSize: 14,
        marginTop: 10,
        border:'none'
    }
})

const ProductDetail = ({ product }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


  return (
    <>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop: 5,color: '#878787', fontSize: 14}}>
            8 Ratin & 1 Reviews
            <Box component="span"><img src={fassured} alt='flipkart-logo' style={{ width: 77 , marginLeft: 20}} /></Box>
        </Typography>
        <Typography>
            <Box component='span' style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{color: '#388e3c'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><StyledBadge/>Get extra 20% off upto ₹50 on 1 items(s) T&C </Typography>
            <Typography><StyledBadge/>Get extra 13% off (price inclusive of discount) T&C</Typography>
            <Typography><StyledBadge/>sign up for Flipkart Paylater and get Flipkart Gift Card worth ₹100*Know more</Typography>
            <Typography><StyledBadge/>Buy 2 items save 5%; Buy 3 or more save 10% T&C</Typography>
            <Typography><StyledBadge/>5% cashback on Flipkart Axis Bank Card T&C</Typography>
            <Typography><StyledBadge/>No cost EMI on Bajaj Finserv EMI Cars on Cart value above ₹2999 T&C</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()}  | ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Warrenty</TableCell>
                    <TableCell>No Warrenty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Seller</TableCell>
                    <TableCell>
                        <Box component='span' style={{color: '#2874f0'}}>
                            SuperComNet
                        </Box>
                        <List>
                            <Typography>&#8226;&nbsp;14 days return gaurentee</Typography>
                            <Typography>&#8226;&nbsp;GST invoice available</Typography>
                        </List>
                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                        <img src={adURL} alt='flipkartpoints' style={{width: 390}}/>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </Table>
    </>
  )
}

export default ProductDetail;