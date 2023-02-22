import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WelcomeContainer = styled.div`
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  font-family: Open Sans;
  font-size: 36px;
  height: 300px;
  width: 1000px;
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
