import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
import { Box,Grid, styled } from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';
 
const Component = styled(Box)({
  background: '#f2f2f2',
  marginTop: 55
})

const Container = styled(Grid)(({ theme }) => ({
  background: '#ffffff',
  display:'flex',
  [theme.breakpoints.down('md')]:{
    margin: 0
  }
}))

const RightContainer =  styled(Grid)({
  marginTop: 50
})

const DetailView = () => {


    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
      if(product && id!==product.id)
        dispatch(getProductDetails(id))
    },[dispatch,id, product,loading])

  return ( 
   <Component>
      {
        product && Object.keys(product).length>0 &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product}/>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product}/>
          </RightContainer>
        </Container>
      }
   </Component>
  )
}

export default DetailView;