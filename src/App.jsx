import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import CssApp from "./CssApp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/css" index element={<CssApp />} />
        {/* <Route path="/javascript" element={<ProductsPage />} /> */}
        <Route path="/" element={<Navigate to="/css" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
