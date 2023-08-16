import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Button from '../../components/UI/Button'

const MyOrders = () => {
  return (
    <StyledMyOrders>
      <TextBox>
        <h3 style={{ textAlign: "start" }}>My Orders page</h3>
      </TextBox>
      <Link to="/"><Button title="Go Back"/></Link>
    </StyledMyOrders>
  )
}

const StyledMyOrders = styled.div`
  background-color: lightgray;
  padding-top: 60px;
  height: 87vh;    
`

const TextBox = styled.div`
  padding: 20px;
  background-color: white;
  width: 90%;
  height: 120px;
  margin: 0 auto;
`;

export default MyOrders