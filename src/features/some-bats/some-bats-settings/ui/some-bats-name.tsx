import { TextField } from "@mui/material";
import React from "react";
import useSomeBatsStore from "../../store/useSomeBatsStore";

export const SomeBatsName = () => {
  const batsName = useSomeBatsStore((state) => state.batsName);
  const setBatsName = useSomeBatsStore((state) => state.setBatsName);

  const handleChangeBatsName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBatsName(e.target.value);
  };

  return (
    <TextField
      id="outlined-multiline-static"
      label="Bat's name"
      multiline
      rows={5}
      value={batsName}
      onChange={handleChangeBatsName}
    />
  );
};
