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
  const elements = React.useMemo(() => {
    const result: string[] = [];

    for (let j = 0; j < macros.length; j++) {
      result.push(`DELAY : ${delays[j]}`);

      for (let i = 0; i < countAccs; i++) {
        result.push(`IF WINDOW EXISTS : ${101 + i} - Google Chrome : 0`);
        result.push(`SWITCH TO WINDOW : ${101 + i} = Google Chrome : 0`);

        macros[j].split("\n").forEach((el) => result.push(el));

        result.push(`ENDIF`);

        if (i < countAccs - 1) {
          result.push(`DELAY : ${innerDelays[j]}`);
        }
      }
    }

    return result;
  }, [macros, delays, innerDelays, countAccs]);

  const copyTextToBuffer = React.useCallback(() => {
    const combinedString = elements.join("\n");

    navigator.clipboard
      .writeText(combinedString)
      .then(() => alert("Скопировано в буфер обмена!"))
      .catch(console.error);
  }, [elements]);

  console.log("macros", macros);

  const macrosArray = Array.isArray(macros) ? macros : [];
  const splitMacros =
    macrosArray.length > 0 ? macrosArray.join("\n").split("\n") : [];
  console.log("split", splitMacros);

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
