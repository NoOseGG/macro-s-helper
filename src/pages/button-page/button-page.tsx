import React, { useState } from "react";

import styles from "./button-page.module.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { SoloButtonMacros } from "../../features/solo-button-macros/solo-button-macros";

export const ButtonPage = () => {
  const [button, setButton] = useState("Up");
  const [pressType, setPressType] = useState("KeyPress");
  const [delay, setDelay] = useState(150);

  const handleChangeButton = (event: SelectChangeEvent) => {
    setButton(event.target.value);
  };

  const handleChangePressType = (event: SelectChangeEvent) => {
    setPressType(event.target.value);
  };

  return (
    <div className={styles.buttonPage}>
      <h2 className={styles.title}>Macro's for solo button</h2>
      <div className={styles.box}>
        <div className={styles.macros}>
          <SoloButtonMacros
            button={button}
            pressType={pressType}
            delay={delay}
          />
        </div>
        <div className={styles.settings}>
          <FormControl fullWidth>
            <InputLabel id="button-label-select">Button</InputLabel>
            <Select
              labelId="button-label-select"
              id="select-button"
              value={button}
              label="Button"
              onChange={handleChangeButton}
            >
              <MenuItem value={"Up"}>Up</MenuItem>
              <MenuItem value={"Left"}>Left</MenuItem>
              <MenuItem value={"Down"}>Down</MenuItem>
              <MenuItem value={"Right"}>Right</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="press-type-label-select">Press type</InputLabel>
            <Select
              labelId="press-type-label-select"
              id="select-press-type"
              value={pressType}
              label="Press type"
              onChange={handleChangePressType}
            >
              <MenuItem value={"Up"}>Up</MenuItem>
              <MenuItem value={"Left"}>Left</MenuItem>
              <MenuItem value={"Down"}>Down</MenuItem>
              <MenuItem value={"Right"}>Right</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
