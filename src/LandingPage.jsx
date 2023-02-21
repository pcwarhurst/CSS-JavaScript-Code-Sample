import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WelcomeContainer = styled.h1`
  background: white;
  width: 1000px;
  height: 300px;
  font-family: Open Sans;
  font-size: 36px;
  display: flex;
  align-items: center;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 24px;
  }
`;

const LandingPage = () => {
  return (
    <WelcomeContainer>
      <h3>BIS Coding Challenge by Paul Warhurst</h3>
      <Link to="css"> CSS Challenge</Link>
      <Link to="javascript"> JavaScript Challenge</Link>
    </WelcomeContainer>
  );
};

export default LandingPage;
