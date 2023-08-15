import React from 'react'
import { styled } from 'styled-components'

const ProductItem = ({ product }) => {
  return (
    <StyledProductItem>
        <ImgContainer>
            <ProductImg alt={product.title} src={product.img}/>
        </ImgContainer>
        <ProductInfo>
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
        </ProductInfo>
    </StyledProductItem>
  )
}

const StyledProductItem = styled.li`
    list-style: none;
    border-radius: 15px;
    background-color: white;
    padding-top: 2%;
`

const ImgContainer = styled.div`
    width: 100%;
    height: 80%;
`

const ProductImg = styled.img`
    width: 100%;
    height: 100%;

`

const ProductInfo = styled.div`
    text-align: start;
    margin-left: 30px;
`

export default ProductItem