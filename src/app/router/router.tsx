import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page/home-page";
import { ButtonPage } from "../../pages/button-page/button-page";
import { MainLayout } from "../layouts/main-layout/main-layout";
import { ContactsPage } from "../../pages/contact-page/contacts-page";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="button" element={<ButtonPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
