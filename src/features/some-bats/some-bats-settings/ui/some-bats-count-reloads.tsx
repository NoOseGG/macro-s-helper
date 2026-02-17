import { TextField } from "@mui/material";
import React from "react";
import useCloneMacrosStore from "../../store/useSomeBatsStore";

export const SomeBatsCountReloads = () => {
  const countReloads = useCloneMacrosStore((state) => state.countReloads);
  const setCountReloads = useCloneMacrosStore((state) => state.setCountReloads);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // В store сохраняем число (0 для пустой строки)
    const numValue = value === "" ? 0 : Number(value);
    if (!isNaN(numValue)) {
      setCountReloads(numValue);
    }
  };

  return (
    <TextField
      fullWidth
      type="number"
      label="Count reloads"
      value={countReloads}
      onChange={handleChange}
      slotProps={{
        htmlInput: {
          min: 0,
          max: 5,
          step: 1,
        },
      }}
    />
  );
};
