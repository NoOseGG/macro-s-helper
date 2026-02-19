import { TextField } from "@mui/material";
import React from "react";
import useSomeBatsStore from "../../../store/useSomeBatsStore";
import { SomeBatsClearMacrosBtn } from "../some-bats-clear-macros-btn/some-bats-clear-macros-btn";

import styles from "./some-bats-macros.module.css";

export const SomeBatsMacros = () => {
  const macros = useSomeBatsStore((state) => state.macros);
  const setMacros = useSomeBatsStore((state) => state.setMacros);

  const handleChangeMacros = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("value", e.target.value);

    setMacros(e.target.value);
  };

  return (
    <div className={styles.container}>
      <TextField
        fullWidth
        id="outlined-multiline-static"
        label="Macros"
        multiline
        rows={10}
        value={macros}
        onChange={handleChangeMacros}
        className={styles.textArea}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          "& .MuiInputBase-root": {
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
          },
          "& .MuiInputBase-input": {
            flex: 1,
            height: "100% !important",
            overflow: "auto !important",
          },
        }}
      />
      <SomeBatsClearMacrosBtn />
    </div>
  );
};
