import React, { useState, useRef } from "react";
import styled from "styled-components";

const ButtonHeading = styled.div`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 16px;
`;
const Button = styled.button`
  width: 240px;
  height: 133px;
  font-size: 22px;
  margin-bottom: 16px;
  :hover {
    background-color: #a6f4ff;
  }
`;

const NumberDisplay = styled.div`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 36px;
`;

const RulesDisplay = styled.div`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 16px;
`;

const LotteryButton = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const numRef = useRef(null);

  const getRandomNumber = () => {
    const interval = setInterval(() => {
      numRef.current = Math.floor(Math.random() * 99999 + 1);
      setRandomNumber(numRef.current);
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      console.log(numRef.current);
      numRef.current > 1000 ? (
        <div style={{ height: 100, width: 200 }}>
          {alert("Too bad, you lost.")}
        </div>
      ) : (
        alert("Nice! You won!")
      );
    }, 2500);
  };

  return (
    <>
      <ButtonHeading>Click the button to draw a number.</ButtonHeading>
      <Button onClick={getRandomNumber}>Let&#39;s Play!</Button>
      <NumberDisplay>Your number: {randomNumber}</NumberDisplay>
      <RulesDisplay>*Any number in the 1 to 1000 range wins!</RulesDisplay>
    </>
  );
};

export default LotteryButton;
