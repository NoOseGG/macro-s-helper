import React from "react";

import styles from "./build-macros-window.module.css";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const BuildMacrosWindow: React.FC = () => {
  const elements: string[] = [];

  const copyTextToBuffer = () => {
    // Преобразуем массив в строку с переносами
    const combinedString = elements.join("\n");

    // Копируем в буфер обмена
    navigator.clipboard
      .writeText(combinedString)
      .then(() => {
        alert("Скопировано в буфер обмена!");
      })
      .catch((err) => {
        console.error("Ошибка копирования: ", err);
      });

    // Также
    console.log("Объединенная строка:", combinedString);
    return combinedString;
  };

  console.log(elements);

  return (
    <div className={styles.container}>
      <div className={styles.copyButton}>
        <IconButton aria-label="copy" size="large" onClick={copyTextToBuffer}>
          <ContentCopyIcon />
        </IconButton>
      </div>
      {elements && elements.map((el, index) => <div key={index}>{el}</div>)}
    </div>
  );
};
