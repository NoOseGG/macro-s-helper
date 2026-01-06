import React, { type PropsWithChildren } from "react";

import styles from "./main-layout.module.css";

import { Outlet } from "react-router";
import ResponsiveAppBar from "./../../../widgets/app-bar/app-bar";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <ResponsiveAppBar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
