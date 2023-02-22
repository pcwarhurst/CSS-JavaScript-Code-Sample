import React from "react";
import styled from "styled-components";
import LotteryButton from "./LotteryButton";

const JSContainer = styled.div`
  background: white;
  width: 1000px;
  height: 900px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LotteryHeading = styled.h1`
  font-family: Open Sans;
  font-weight: 800;
  font-size: 36px;
  margin-bottom: 44px;
`;
const JavaScriptApp = () => {
  return (
    <JSContainer>
      <LotteryHeading>The JavaScript Lottery</LotteryHeading>
      <LotteryButton />
    </JSContainer>
  );
};

export default JavaScriptApp;
