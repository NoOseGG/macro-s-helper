import React from "react";

import styles from "./some-bats-page.module.css";
import { SomeBatsWindow } from "../../features/some-bats/some-bats-window/some-bats-window";
import { SomeBatsSettings } from "../../features/some-bats/some-bats-settings/some-bats-settings";

export const SomeBatsPage: React.FC = () => {
  return (
    <div className={styles.buttonPage}>
      <h2 className={styles.title}>Some bat's macros</h2>
      <div className={styles.box}>
        <div className={styles.macros}>
          <SomeBatsWindow />
        </div>
        <div className={styles.settings}>
          <SomeBatsSettings />
        </div>
      </div>
    </div>
  );
};
