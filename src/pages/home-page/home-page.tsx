import React from "react";

import styles from "./home-page.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { NavigatePath } from "../../shared/constants/constants";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const onNavigate = (path: NavigatePath) => {
    switch (path) {
      case NavigatePath.Button:
        navigate(NavigatePath.Button);
        break;
      case NavigatePath.SomeButtons:
        navigate(NavigatePath.SomeButtons);
        break;
      case NavigatePath.CloneMacros:
        navigate(NavigatePath.CloneMacros);
        break;
    }
  };

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Macro's Helper</h1>
      <div className={styles.buttons}>
        <Button
          variant="outlined"
          onClick={() => onNavigate(NavigatePath.Button)}
        >
          Макрос на одну кнопку
        </Button>
        <Button
          variant="outlined"
          onClick={() => onNavigate(NavigatePath.SomeButtons)}
        >
          Макрос на несколько кнопкок
        </Button>
        <Button
          variant="outlined"
          onClick={() => onNavigate(NavigatePath.CloneMacros)}
        >
          Клонировать готовый макрос
        </Button>
      </div>
    </div>
  );
};
