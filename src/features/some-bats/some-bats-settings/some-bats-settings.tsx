import React from "react";

import styles from "./some-bats-setting.module.css";

import { SomeBatsCountAccs } from "./ui/some-bats-count-accs";
import { SomeBatsName } from "./ui/some-bats-name";
import { SomeBatsMacros } from "./ui/some-batc-macros/some-bats-macros";
import { SomeBatsCountReloads } from "./ui/some-bats-count-reloads";
import { SomeBatsShutdown } from "./ui/some-bats-shutdown/some-bats-shutdown";

export const SomeBatsSettings: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.countBox}>
        <SomeBatsCountAccs />
        <SomeBatsCountReloads />
        <SomeBatsShutdown />
      </div>
      <SomeBatsName />
      <SomeBatsMacros />
    </div>
  );
};
