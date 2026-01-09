import React from "react";

import styles from "./build-macros-page.module.css";
import { BuildMacrosWindow } from "../../features/build-macros/build-macros-window/build-macros-window";
import { BuildMacrosSettings } from "../../features/build-macros/build-macros-settings/build-macros-settings";

export const BuildMacrosPage: React.FC = () => {
  return (
    <div className={styles.buttonPage}>
      <h2 className={styles.title}>Build Macro's</h2>
      <div className={styles.box}>
        <div className={styles.macros}>
          <BuildMacrosWindow />
        </div>
        <div className={styles.settings}>
          <BuildMacrosSettings />
        </div>
      </div>
    </div>
  );
};
