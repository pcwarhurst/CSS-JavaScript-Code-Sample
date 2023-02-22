import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssApp from "./CssApp";
import styled from "styled-components";
import LandingPage from "./LandingPage";
import JavaScriptApp from "./JavaScriptApp";

const AppWrapper = styled.div`
  display: flex;
  height: 110vh;
  justify-content: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/css" element={<CssApp />} />
          <Route path="/javascript" element={<JavaScriptApp />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
