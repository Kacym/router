import React from 'react'
import { styled } from 'styled-components'

const Button = ({ onClick, title, ...otherProps }) => {
  return (
    <StyledButton onClick={onClick} {...otherProps}>{title}</StyledButton>
  )
}

const StyledButton = styled.button`
    width: 100px;
    height: 40px;

    border: none;
    border-radius: 25px;
    
    color: white;
    background-color: #0B5851;
    cursor: pointer;
`

export default Button