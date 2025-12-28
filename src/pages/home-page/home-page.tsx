import React from "react";

import styles from "./home-page.module.css";
import { Button } from "@mui/material";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Macro's Helper</h1>
      <div className={styles.buttons}>
        <Button variant="outlined">Макрос на кнопку</Button>
      </div>
    </div>
  );
};
