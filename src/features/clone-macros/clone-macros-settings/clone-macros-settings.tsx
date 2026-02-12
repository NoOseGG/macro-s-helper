import React from "react";

import styles from "./clone-macros-setting.module.css";

import { SoloButtonCountAccs } from "./ui/clone-macros-count-accs";
import { TextField } from "@mui/material";
import useCloneMacrosStore from "../store/useCloneMacrosStore";
import { CloneMacrosDelayInput } from "./ui/clone-macros-delay-input";

export const CloneMacrosSettings: React.FC = () => {
  const macros = useCloneMacrosStore((state) => state.macros);
  const setMacros = useCloneMacrosStore((state) => state.setMacros);

  const handleChangeMacros = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMacros(e.target.value);
  };

  return (
    <div className={styles.container}>
      <SoloButtonCountAccs />
      <CloneMacrosDelayInput />
      <TextField
        id="outlined-multiline-static"
        label="Macros"
        multiline
        rows={10}
        value={macros}
        onChange={handleChangeMacros}
      />
    </div>
  );
};
