import React from "react";

import styles from "./clone-macros-page.module.css";
import { CloneMacrosWindow } from "../../features/clone-macros/clone-macros-window/clone-macros-window";
import { CloneMacrosSettings } from "../../features/clone-macros/clone-macros-settings/clone-macros-settings";

export const CloneMacrosPage: React.FC = () => {
  return (
    <div className={styles.buttonPage}>
      <h2 className={styles.title}>Macro's clone</h2>
      <div className={styles.box}>
        <div className={styles.macros}>
          <CloneMacrosWindow />
        </div>
        <div className={styles.settings}>
          <CloneMacrosSettings />
        </div>
      </div>
    </div>
  );
};
