import styled from "styled-components";
import LotteryGame from "./LotteryGame";

const JSContainer = styled.div`
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  height: 900px;
  padding: 8px;
  width: 1000px;
`;

const JavaScriptApp = () => {
  return (
    <JSContainer>
      <LotteryGame />
    </JSContainer>
  );
};

export default JavaScriptApp;
