import { TextField } from "@mui/material";
import React from "react";
import useSomeBatsStore from "../../store/useSomeBatsStore";

export const SomeBatsMacros = () => {
  const macros = useSomeBatsStore((state) => state.macros);
  const setMacros = useSomeBatsStore((state) => state.setMacros);

  const handleChangeMacros = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('value', e.target.value);
    
    setMacros(e.target.value);
  };

  return (
    <TextField
      id="outlined-multiline-static"
      label="Macros"
      multiline
      rows={10}
      value={macros}
      onChange={handleChangeMacros}
    />
  );
};
