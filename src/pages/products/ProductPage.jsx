import React from "react";
import { Link, useParams } from "react-router-dom";
import { DUMMY_PRODUCTS } from "../../utils/constant";
import { styled } from "styled-components";
import Button from "../../components/UI/Button";
// import { DUMMY_PRODUCTS } from '../../utils/constant'

const ProductPage = () => {
  const params = useParams();

  const productId = params.id;

  const currentProduct = DUMMY_PRODUCTS.find((phone) => phone.id === productId);

  return (
    <StyledProductPage>
      <ContentBox>
        <ProductImgContainer>
          <ProductImg src={currentProduct.img} alt={currentProduct.title} />
        </ProductImgContainer>
        <ProductInfo>
        <Link to="/products"><Button title="Go Back"/></Link>
          <h2>{currentProduct.title}</h2>
          <h3>Price: ${currentProduct.price}</h3>
          <p style={{textAlign: "start"}}>{currentProduct.description}</p>
        </ProductInfo>
      </ContentBox>
    </StyledProductPage>
  );
};

const StyledProductPage = styled.div`
  background-color: lightgray;
  height: 100vh;
  padding-top: 70px;
`;

const ContentBox = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  width: 90%;
  margin: 0 auto;
`;

const ProductImgContainer = styled.div`
  width: 40%;
`

const ProductImg = styled.img`
  width: 100%;
`
const ProductInfo = styled.div`
  text-align: start;
  display: flex;
  width: 50%;
  /* justify-content: center; */
  margin-top: 20px;
  flex-direction: column;
  gap: 30px;
`

export default ProductPage;
