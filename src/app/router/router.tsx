import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page/home-page";
import { ButtonPage } from "../../pages/button-page/button-page";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="button" element={<ButtonPage />} />
      </Routes>
    </BrowserRouter>
  );
};
