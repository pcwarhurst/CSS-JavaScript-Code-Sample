import styled from "styled-components";

const AlertContainer = styled.div`
  background: #f1f2f1;
  border: 1px solid blue;
  height: 140px;
  padding: 40px;
  position: absolute;
  top: 350px;
  width: 445px;
  z-index: 1;
`;

const Results = styled.div`
  font-size: 20px;
`;
const ClearResultsButton = styled.button`
  background: #c2c2c2;
  border: none;
  font-size: 20px;
  height: 36px;
  margin-left: 220px;
  margin-top: 36px;
  width: 240px;
  :hover {
    border: 3px solid #939393;
  }
`;

const Alert = ({ show, setShow, isWinner }) => {
  return show ? (
    <AlertContainer>
      <h2>This sight says...</h2>
      <Results>{isWinner ? "Nice! You won!" : "Too bad, you lost."}</Results>
      <ClearResultsButton onClick={setShow}>OK</ClearResultsButton>
    </AlertContainer>
  ) : null;
};

export default Alert;
