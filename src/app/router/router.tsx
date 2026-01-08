import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../../pages/home-page/home-page";
import { ButtonPage } from "../../pages/button-page/button-page";
import { MainLayout } from "../layouts/main-layout/main-layout";
import { CloneMacrosPage } from "../../pages/clone-macros-page/clone-macros-page";
import { NavigatePath } from "../../shared/constants/constants";
import { InstructionPage } from "../../pages/instruction-page/instruction-page";
import { ContactsPage } from "../../pages/contact-page/contacts-page";
import { SomeBatsPage } from "../../pages/some-bats-page/some-bats-page";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path={NavigatePath.Instruction}
            element={<InstructionPage />}
          />
          <Route path={NavigatePath.Button} element={<ButtonPage />} />
          <Route
            path={NavigatePath.CloneMacros}
            element={<CloneMacrosPage />}
          />
          <Route path={NavigatePath.SomeBats} element={<SomeBatsPage />} />
          <Route path={NavigatePath.Contacts} element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
