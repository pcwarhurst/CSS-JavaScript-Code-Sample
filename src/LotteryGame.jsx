import React, { useState, useRef } from "react";
import styled from "styled-components";
import Alert from "./Alert";

const LotteryHeading = styled.h1`
  font-family: Open Sans;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 44px;
`;

const ButtonHeading = styled.div`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;
const Button = styled.button`
  font-size: 22px;
  height: 120px;
  margin-bottom: 24px;
  width: 240px;
  :hover {
    background-color: #a6f4ff;
  }
`;

const NumberDisplay = styled.div`
  font-family: Open Sans;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 36px;
`;

const RulesDisplay = styled.div`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 16px;
`;

const LotteryGame = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const numRef = useRef(null);
  const bodyRef = useRef(null);

  const getRandomNumber = () => {
    const interval = setInterval(() => {
      numRef.current = Math.floor(Math.random() * 99999 + 1);
      setRandomNumber(numRef.current);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setShowModal(true);
      bodyRef.current.style.pointerEvents = "none";
      bodyRef.current.style.opacity = "0.3";
    }, 2500);
  };

  return (
    <>
      <div
        ref={bodyRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LotteryHeading>The JavaScript Lottery</LotteryHeading>
        <ButtonHeading>Click the button to draw a number.</ButtonHeading>
        <Button onClick={getRandomNumber}>Let&#39;s Play!</Button>
        <NumberDisplay>Your number: {randomNumber}</NumberDisplay>
        <RulesDisplay>*Any number in the 1 to 1000 range wins!</RulesDisplay>
      </div>
      <Alert
        show={showModal}
        isWinner={numRef.current <= 1000}
        setShow={() => {
          setShowModal(false);
          setRandomNumber(0);
          bodyRef.current.style.pointerEvents = "auto";
          bodyRef.current.style.opacity = "1";
        }}
      />
    </>
  );
};

export default LotteryGame;
