import React from "react";

import styles from "./clone-macros-window.module.css";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useCloneMacrosStore from "../store/useCloneMacrosStore";

export const CloneMacrosWindow: React.FC = () => {
  const coutAccs = useCloneMacrosStore((state) => state.countAccs);
  const macros = useCloneMacrosStore((state) => state.macros);

  const elements: string[] = [];

  for (let i = 0; i < coutAccs; i++) {
    elements.push(`IF WINDOW EXISTS : ${100 + i + 1} - Google Chrome : 0`);
    elements.push(`SWITCH TO WINDOW : ${100 + i + 1} - Google Chrome : 0`);
    macros.split("\n").forEach((el) => {
      elements.push(el);
    });
    elements.push(`ENDIF`);
  }

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
