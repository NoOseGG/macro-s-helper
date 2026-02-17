import { TextField } from "@mui/material";
import React from "react";
import useSomeBatsStore from "../../../store/useSomeBatsStore";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./some-bats-macros.module.css";

export const SomeBatsMacros = () => {
  const macros = useSomeBatsStore((state) => state.macros);
  const setMacros = useSomeBatsStore((state) => state.setMacros);

  const handleChangeMacros = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("value", e.target.value);

    setMacros(e.target.value);
  };

  const handleDelete = () => {
    setMacros("");
  };

  return (
    <div className={styles.container}>
      <TextField
        id="outlined-multiline-static"
        label="Macros"
        multiline
        rows={10}
        value={macros}
        onChange={handleChangeMacros}
        className={styles.textArea}
      />
      <div className={styles.deleteButton} onClick={handleDelete}>
        <DeleteIcon fontSize="large" />
      </div>
    </div>
  );
};
