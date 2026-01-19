import React from "react";

import styles from "./some-bats-window.module.css";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useSomeBatsStore from "../store/useSomeBatsStore";

export const SomeBatsWindow: React.FC = () => {
  const countAccs = useSomeBatsStore((state) => state.countAccs);
  const batsName = useSomeBatsStore((state) => state.batsName);
  const macros = useSomeBatsStore((state) => state.macros);

  const elements: string[] = [];

  const batsNameSplit = batsName.split("\n");
  const macrosSplit = macros.split("\n");

  console.log("bats", batsNameSplit);

  for (let i = 0; i < batsNameSplit.length; i++) {
    if (batsNameSplit[i]) {
      elements.push(`OPEN FILE : ${batsNameSplit[i]} :  : 0`);

      elements.push("DELAY : 120000");
      for (let i = 0; i < countAccs; i++) {
        elements.push(`IF WINDOW EXISTS : ${100 + i + 1} - Google Chrome : 0`);
        elements.push(`SWITCH TO WINDOW : ${100 + i + 1} - Google Chrome : 0`);
        elements.push(`Keyboard : F5 : KeyPress`);
        elements.push(`ENDIF`);
        elements.push("DELAY : 200");
      }
      elements.push("DELAY : 60000");
      for (let i = 0; i < countAccs; i++) {
        elements.push(`IF WINDOW EXISTS : ${100 + i + 1} - Google Chrome : 0`);
        elements.push(`SWITCH TO WINDOW : ${100 + i + 1} - Google Chrome : 0`);
        elements.push(`Keyboard : F5 : KeyPress`);
        elements.push(`ENDIF`);
        elements.push("DELAY : 200");
      }
      elements.push("DELAY : 20000");
      for (let i = 0; i < countAccs; i++) {
        elements.push(`IF WINDOW EXISTS : ${100 + i + 1} - Google Chrome : 0`);
        elements.push(`SWITCH TO WINDOW : ${100 + i + 1} - Google Chrome : 0`);
        elements.push(`Keyboard : Enter : KeyPress`);
        elements.push(`ENDIF`);
        elements.push("DELAY : 200");
      }
      elements.push("DELAY : 60000");
    }

    macrosSplit.map((el) => {
      elements.push(el);
    });

    elements.push("DELAY : 20000");
    if (batsNameSplit[i]) {
      for (let i = 0; i < countAccs; i++) {
        elements.push(`IF WINDOW EXISTS : ${100 + i + 1} - Google Chrome : 0`);
        elements.push(`SWITCH TO WINDOW : ${100 + i + 1} = Google Chrome : 0`);
        elements.push(`CLOSE WINDOW : ${100 + i + 1} - Google Chrome : 0`);
        elements.push(`ENDIF`);
        elements.push("DELAY : 200");
      }
    }
    elements.push("DELAY : 60000");
  }
  elements.push("SHUTDOWN : 1");

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
