import React from "react";
import styled from "styled-components";

const AppWrapper = styled.body`
  height: 110vh;
  justify-content: center;
  display: flex;
`;

const CSSBoxContainer = styled.div`
  height: 795px;
  border: 16px solid white;
  width: 1010px;
  margin 0 70px;
  display: flex;
  font-family: Yanone Kaffeesatz;
  text-shadow: 2.5px 0 black;
  letter-spacing: 2px;
  
`;
const CSSBox = styled.div`
  height: auto;
  width: 335px;
  border: black 1px solid;
  text-transform: uppercase;
  font-size: 56px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CSSBoxOne = styled(CSSBox)`
  background-color: #fed700;
  animation-name: animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-play-state: running;
  @keyframes animation {
    0% {
      background: #fed700;
      color: black;
    }
    50.0% {
      background: #0001fe;
      color: white;
    }
    100.0% {
      background: #fed700;
      color: black;
    }
  }
`;
const CSSBoxTwo = styled(CSSBox)`
  background-color: white;
  > span {
    animation-name: rotate;
    transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
    animation-iteration-count: infinite;
    animation-duration: 3s;
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
    }
  }
`;
const CSSBoxThree = styled(CSSBox)`
  background-color: #0001fe;
  > span {
    animation-name: animation2;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-play-state: running;
    transition-timing-function: cubic-bezier(0.2, 0.3, 0.1, 0.9);

    @keyframes animation2 {
      0% {
        transform: translateY(0px);
        color: black;

      }
      33.0% {
        transform: translateY(320px);
        color: white;
      }
      50.0% {
        color: black;
      }
      66.0% {
        transform: translateY(-250px);
        color: white;

      }
      100.0% {
        color: black;
        transform: translateY(0px);
      }
    }
`;

const App = () => {
  return (
    <AppWrapper>
      <CSSBoxContainer>
        <CSSBoxOne>
          <span>one</span>
        </CSSBoxOne>
        <CSSBoxTwo>
          <span>two</span>
        </CSSBoxTwo>
        <CSSBoxThree>
          <span>three</span>
        </CSSBoxThree>
      </CSSBoxContainer>
    </AppWrapper>
  );
};

export default App;
