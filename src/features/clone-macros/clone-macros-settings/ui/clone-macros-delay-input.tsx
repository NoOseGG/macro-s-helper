import { TextField } from "@mui/material";
import React, { useState } from "react";
import useCloneMacrosStore from "../../store/useCloneMacrosStore";

export const CloneMacrosDelayInput = () => {
  const delay = useCloneMacrosStore((state) => state.delay);
  const setDelay = useCloneMacrosStore((state) => state.setDelay);

  const [displayValue, setDisplayValue] = useState<string>(delay.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Убираем ведущие нули
    value = value.replace(/^0+/, "");

    // Если пусто, оставляем пустую строку для отображения
    const displayValue = value === "" ? "" : value;
    setDisplayValue(displayValue);

    // В store сохраняем число (0 для пустой строки)
    const numValue = value === "" ? 0 : Number(value);
    if (!isNaN(numValue)) {
      setDelay(numValue);
    }
  };

  return (
    <TextField
      type="number"
      label="Delay (ms)"
      value={displayValue}
      onChange={handleChange}
      slotProps={{
        htmlInput: {
          min: 0,
          max: 10000,
          step: 10,
        },
      }}
    />
  );
};
