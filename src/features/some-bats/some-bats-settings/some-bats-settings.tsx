import React from "react";

import styles from "./some-bats-setting.module.css";

import { SomeBatsCountAccs } from "./ui/some-bats-count-accs";
import { SomeBatsName } from "./ui/some-bats-name";
import { SomeBatsMacros } from "./ui/some-bats-macros";

export const SomeBatsSettings: React.FC = () => {
  return (
    <div className={styles.container}>
      <SomeBatsCountAccs />
      <SomeBatsName />
      <SomeBatsMacros />
    </div>
  );
};
