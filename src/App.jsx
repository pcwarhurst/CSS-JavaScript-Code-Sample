import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import CssApp from "./CssApp";
import styled from "styled-components";
import LandingPage from "./LandingPage";

const AppWrapper = styled.body`
  height: 110vh;
  justify-content: center;
  display: flex;
`;

const App = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/css" element={<CssApp />} />
          {/* <Route path="/javascript" element={<ProductsPage />} /> */}
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
