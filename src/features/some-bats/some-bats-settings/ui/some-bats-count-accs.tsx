import { TextField } from "@mui/material";
import React, { useState } from "react";
import useCloneMacrosStore from "../../store/useSomeBatsStore";

export const SomeBatsCountAccs = () => {
  const countAccs = useCloneMacrosStore((state) => state.countAccs);
  const setCountAccs = useCloneMacrosStore((state) => state.setCountAccs);

  const [displayValue, setDisplayValue] = useState<string>(
    countAccs.toString(),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Убираем ведущие нули
    value = value.replace(/^0+/, "");

    // Если пусто, оставляем пустую строку для отображения
    const displayValue = value === "" ? "" : value;
    setDisplayValue(displayValue);

    // В store сохраняем число (0 для пустой строки)
    const numValue = value === "" ? 1 : Number(value);
    if (!isNaN(numValue)) {
      setCountAccs(numValue);
    }
  };

  //   const handleBlur = () => {
  //     // При потере фокуса, если пусто, показываем 0
  //     if (displayValue === "") {
  //       setDisplayValue("0");
  //     }
  //   };

  return (
    <TextField
      fullWidth
      type="number"
      label="Count accounts"
      value={displayValue}
      onChange={handleChange}
      slotProps={{
        htmlInput: {
          min: 0,
          max: 500,
          step: 1,
        },
      }}
    />
  );
};
