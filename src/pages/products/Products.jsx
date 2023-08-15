import React from "react";
import { styled } from "styled-components";
import { DUMMY_PRODUCTS } from "../../utils/constant";
import ProductItem from "./product-item/ProductItem";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <StyledProducts>
      <ProductsList>
        {DUMMY_PRODUCTS.map((item) => {
          return <ProductItem key={item.id} product={item}/>;
        })}
      </ProductsList>
      <Link to="/"><Button title="Go Back"/></Link>
    </StyledProducts>
  );
};

const StyledProducts = styled.div`
  background-color: lightgray;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const ProductsList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-top: 5%;
  height: 500px;
  margin-bottom: 20px;
`;

export default Products;
