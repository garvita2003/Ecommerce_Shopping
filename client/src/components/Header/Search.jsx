import React, { useEffect, useState } from 'react'
import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import {Link} from 'react-router-dom';

const SearchContainer = styled(Box)({
    background: '#fff',
    width: '38%',
    borderRadius: 2,
    marginLeft: 10,
    display:'flex'
})

const InputSearchBase = styled(InputBase)({
    paddingLeft: 20,
    width: '100%',
    fontSize: 'unset'
})

const SearchWrapper = styled(Box)({
  color: 'blue',
  padding: 5,
  display: 'flex'
})

const ListWrapper = styled(List)({
  position:'absolute',
  background:'#ffffff',
  color:'#000',
  marginTop: 36
})

const Search = () => {

  const [text,setText] = useState('');

  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  const getText = (text) => {
    setText(text);
  }

  return (
    <SearchContainer>
        <InputSearchBase 
          placeholder='Search for Products, Brands and more'
          onChange={(e) => getText(e.target.value)}
          value={text}
        />
        <SearchWrapper>
          <SearchIcon />
        </SearchWrapper>
        {
          text && 
          < ListWrapper>
            {
              products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                <ListItem>
                  <Link 
                      to={`/product/${product.id}`}
                      onClick={() => setText('')}
                      style={{textDecoration:'none',color:'inherit'}}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              ))
            }
          </ ListWrapper>
        }
    </SearchContainer>
  )
}

export default Search;