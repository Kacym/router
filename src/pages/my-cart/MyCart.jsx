import React from "react";
import { styled } from "styled-components";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";

const MyCart = () => {
  return (
    <StyledMyCart>
      <TextBox>
        <h3 style={{ textAlign: "start" }}>My Cart page</h3>
      </TextBox>
      <Link to="/"><Button title="Go Back"/></Link>
    </StyledMyCart>
  );
};

const StyledMyCart = styled.div`
  background-color: lightgray;
  padding-top: 60px;
  height: 87vh;
`;

const TextBox = styled.div`
  padding: 20px;
  background-color: white;
  width: 90%;
  height: 120px;
  margin: 0 auto;
`;

export default MyCart;
