import React from 'react'
import { Box, Typography, styled } from '@mui/material';
import { navData } from '../../constants/data';


const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    overflow:'overlay',
    background: '#fff',
    margin: '55px 130px 0 130px',
    [theme.breakpoints.down('lg')]:{
        margin:0
    }
}))

const Container = styled(Box)({
    padding:'12px 8px',
    textAlign: 'center'
})

const Text = styled(Typography)({
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'inherit'
})

const NavBar = () => {
  return (
    <Box style={{ background: '#fff'}}>
        <Component>
            {
                navData.map((data) => (
                    <Container>
                        <img src={data.url} alt='nav' style={{width: 64}}/>
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
    </Box>
  )
}

export default NavBar;