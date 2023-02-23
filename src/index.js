import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Basket />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
