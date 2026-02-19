import React, { type ChangeEvent } from "react";

import styles from "./some-bats-shutdown.module.css";
import { Checkbox } from "@mui/material";
import useSomeBatsStore from "../../../store/useSomeBatsStore";

export const SomeBatsShutdown: React.FC = () => {
  const isShutdown = useSomeBatsStore((state) => state.isShutdown);
  const setIsShutdown = useSomeBatsStore((state) => state.setIsShutdown);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsShutdown(event.target.checked);
  };

  return (
    <div className={styles.container}>
      <Checkbox checked={isShutdown} onChange={handleChange} />
      <span>Shutdown PC</span>
    </div>
  );
};
