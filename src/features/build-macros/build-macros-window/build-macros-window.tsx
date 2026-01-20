import React from "react";

import styles from "./build-macros-window.module.css";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useBuildMacros from "../store/useBuildMacrosStore";

export const BuildMacrosWindow: React.FC = () => {
  const countAccs = useBuildMacros((state) => state.countAccs);
  const macros = useBuildMacros((state) => state.macros);
  const delays = useBuildMacros((state) => state.delays);
  const innerDelays = useBuildMacros((state) => state.innerDelays);
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

    return combinedString;
  };

  console.log("macros", macros);

  const macrosArray = Array.isArray(macros) ? macros : [];
  const splitMacros =
    macrosArray.length > 0 ? macrosArray.join("\n").split("\n") : [];
  console.log("split", splitMacros);

  for (let j = 0; j < macros.length; j++) {
    elements.push(`DELAY : ${delays[j]}`);
    for (let i = 0; i < countAccs; i++) {
      elements.push(`IF WINDOW EXISTS : ${100 + i + 1} - Google Chrome : 0`);
      elements.push(`SWITCH TO WINDOW : ${100 + i + 1} = Google Chrome : 0`);
      macros[j].split("\n").forEach((el) => elements.push(el));
      elements.push(`ENDIF`);

      if (i < countAccs - 1) {
        elements.push(`DELAY : ${innerDelays[j]}`);
      }
    }
  }

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
