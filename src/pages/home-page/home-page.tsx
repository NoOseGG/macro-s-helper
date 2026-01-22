import React from "react";

import styles from "./home-page.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { NavigatePath } from "../../shared/constants/constants";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const onNavigate = (path: NavigatePath) => {
    switch (path) {
      case NavigatePath.Instruction:
        navigate(NavigatePath.Instruction);
        break;
      case NavigatePath.Button:
        navigate(NavigatePath.Button);
        break;
      case NavigatePath.SomeButtons:
        navigate(NavigatePath.SomeButtons);
        break;
      case NavigatePath.CloneMacros:
        navigate(NavigatePath.CloneMacros);
        break;
      case NavigatePath.SomeBats:
        navigate(NavigatePath.SomeBats);
        break;
      case NavigatePath.BuildMacros:
        navigate(NavigatePath.BuildMacros);
        break;
    }
  };

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Macro's Helper</h1>
      <SignedOut>
        <div className={styles.signInBox}>
          <h3 className={styles.signInTitle}>
            Вы не авторизированы, войдите в систему.
          </h3>
          <div className={styles.SignInButtonWrapper}>
            <SignInButton mode="modal">
              <button className={styles.SignInButton}>Авторизоваться</button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className={styles.buttons}>
          <Button
            variant="outlined"
            onClick={() => onNavigate(NavigatePath.Instruction)}
          >
            Инструкция по настройке
          </Button>
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
          <Button
            variant="outlined"
            onClick={() => onNavigate(NavigatePath.SomeBats)}
          >
            Несколько батников
          </Button>
          <Button
            variant="outlined"
            onClick={() => onNavigate(NavigatePath.BuildMacros)}
          >
            Собрать макрос из своих
          </Button>
        </div>
      </SignedIn>
    </div>
  );
};
