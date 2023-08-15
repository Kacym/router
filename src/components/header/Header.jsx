import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <>
        <h2>iStore</h2>
      </>
      <NavBar>
        <h2>
          <NavLink
            style={(props) => {
              if (props.isActive) {
                return {
                  color: "gray",
                  textDecoration: "none",
                };
              }
              else {
                return {
                  color: "white",
                  textDecoration: "none",
                }
              }
            }}
            to="/products"
          >
            Products
          </NavLink>
        </h2>
        <h2>
          <NavLink
            style={(props) => {
              if (props.isActive) {
                return {
                  color: "gray",
                  textDecoration: "none",
                };
              }
              else {
                return {
                  color: "white",
                  textDecoration: "none",
                }
              }
            }}
            to="/my-card"
          >
            My Cart
          </NavLink>
        </h2>
        <h2>
          <NavLink
            style={(props) => {
              if (props.isActive) {
                return {
                  color: "gray",
                  textDecoration: "none",
                };
              }
               else {
                return {
                  color: "white",
                  textDecoration: "none",
                }
              }
            }}
            to="my-orders"
          >
            {" "}
            My Orders
          </NavLink>
        </h2>
      </NavBar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  color: white;
  padding: 0px 60px;
  background-color: #287cd5;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;
export default Header;
