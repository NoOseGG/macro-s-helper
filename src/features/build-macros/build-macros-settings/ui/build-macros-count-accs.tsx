import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import useBuildMacrosStore from "../../store/useBuildMacrosStore";

export const BuildMacrosCountAccs = () => {
  const countAccs = useBuildMacrosStore((state) => state.countAccs);
  const setCountAccs = useBuildMacrosStore((state) => state.setCountAccs);

  const [displayValue, setDisplayValue] = useState<string>(
    countAccs.toString()
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
    <Box sx={{ width: "100%", maxWidth: "200px" }}>
      <TextField
        type="number"
        label="Count accounts"
        value={displayValue}
        fullWidth
        onChange={handleChange}
        slotProps={{
          htmlInput: {
            min: 0,
            max: 500,
            step: 1,
          },
        }}
      />
    </Box>
  );
};
