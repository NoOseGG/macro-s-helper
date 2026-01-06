import React from "react";

import styles from "./solo-button-setting.module.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { BUTTONS } from "../../../shared/constants/constants";
import useSoloButtonStore from "../store/useSoloButtonStore";
import { SoloButtonDelayInput } from "./ui/solo-button-delay-input";
import { SoloButtonCountAccs } from "./ui/solo-button-count-accs";

export const SoloButtonSettings: React.FC = () => {
  const button = useSoloButtonStore((state) => state.button);
  const setButton = useSoloButtonStore((state) => state.setButton);
  const pressType = useSoloButtonStore((state) => state.pressType);
  const setPressType = useSoloButtonStore((state) => state.setPressType);

  const handleChangeButton = (event: SelectChangeEvent) => {
    setButton(event.target.value);
  };

  const handleChangePressType = (event: SelectChangeEvent) => {
    setPressType(event.target.value);
  };

  return (
    <div className={styles.container}>
      <SoloButtonCountAccs />
      <FormControl fullWidth>
        <InputLabel id="button-label-select">Button</InputLabel>
        <Select
          labelId="button-label-select"
          id="select-button"
          value={button}
          label="Button"
          onChange={handleChangeButton}
        >
          {BUTTONS.NAME.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
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
          {BUTTONS.PRESS_TYPE.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <SoloButtonDelayInput />
    </div>
  );
};
