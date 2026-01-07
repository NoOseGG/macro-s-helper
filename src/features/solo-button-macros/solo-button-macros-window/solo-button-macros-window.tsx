import React from "react";

import styles from "./solo-button-macros-window.module.css";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useSoloButtonStore from "../store/useSoloButtonStore";

export const SoloButtonMacrosWindow: React.FC = () => {
  const coutAccs = useSoloButtonStore((state) => state.countAccs);
  const button = useSoloButtonStore((state) => state.button);
  const pressType = useSoloButtonStore((state) => state.pressType);
  const delay = useSoloButtonStore((state) => state.delay);

  const elements: string[] = [];

  //   for (let i = 0; i < COUNT_ACCOUNT; i++) {
  //     elements.push(
  //       <div>IF WINDOW EXISTS : {100 + i + 1} - Google Chrome : 0</div>
  //     );
  //     elements.push(
  //       <div>SWITCH TO WINDOW : {100 + i + 1} = Google Chrome : 0</div>
  //     );
  //     elements.push(
  //       <div>
  //         Keyboard : {button} : {pressType}
  //       </div>
  //     );
  //     elements.push(<div>DELAY : {delay}</div>);
  //     elements.push(<div>ENDIF</div>);
  //   }

  for (let i = 0; i < coutAccs; i++) {
    elements.push(`IF WINDOW EXISTS : ${100 + i + 1} - Google Chrome : 0`);
    elements.push(`SWITCH TO WINDOW : ${100 + i + 1} = Google Chrome : 0`);
    elements.push(`Keyboard : ${button} : ${pressType}`);
    if (delay) elements.push(`DELAY : ${delay}`);
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

    // Также можно сохранить в переменную для дальнейшего использования
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
      {elements &&
        button &&
        pressType &&
        elements.map((el, index) => <div key={index}>{el}</div>)}
    </div>
  );
};
