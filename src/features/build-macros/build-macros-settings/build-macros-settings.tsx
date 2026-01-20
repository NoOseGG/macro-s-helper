import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  IconButton,
  Paper,
  Typography,
  Stack,
  InputAdornment,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  AccessTime as TimeIcon,
} from "@mui/icons-material";
import useBuildMacros from "../store/useBuildMacrosStore";
import { BuildMacrosCountAccs } from "./ui/build-macros-count-accs";

interface FieldData {
  id: string;
  value: string;
  delay: number;
  innerDelay: number;
}

export const BuildMacrosSettings: React.FC = () => {
  const [fields, setFields] = useState<FieldData[]>([
    { id: "1", value: "", delay: 5000, innerDelay: 150 },
  ]);
  const setMacros = useBuildMacros((state) => state.setMacros);
  const setDelays = useBuildMacros((state) => state.setDelays);
  const setInnerDelays = useBuildMacros((state) => state.setInnerDelays);
  const countAccs = useBuildMacros((state) => state.countAccs);

  const handleInputChange = (id: string, value: string) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, value } : field,
      ),
    );
  };

  const handleDelayChange = (id: string, delay: number) => {
    // Ограничиваем ввод отрицательных чисел и больших значений
    const validDelay = Math.max(0, Math.min(delay, 999999)); // Макс 999999 мс
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, delay: validDelay } : field,
      ),
    );
  };

  const handleInnerDelayChange = (id: string, delay: number) => {
    // Ограничиваем ввод отрицательных чисел и больших значений
    const validDelay = Math.max(0, Math.min(delay, 999999)); // Макс 999999 мс
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, innerDelay: validDelay } : field,
      ),
    );
  };

  const addTextField = () => {
    const newId = Date.now().toString();
    setFields((prevFields) => [
      ...prevFields,
      { id: newId, value: "", delay: 5000, innerDelay: 150 },
    ]);
  };

  const removeTextField = (id: string) => {
    if (fields.length > 1) {
      setFields((prevFields) => prevFields.filter((field) => field.id !== id));
    }
  };

  const handleSave = () => {
    const data = fields.map((field) => ({
      macros: field.value,
      delay: field.delay,
      innerDelay: field.innerDelay,
    }));
    console.log("Сохраненные данные:", data);

    // Можно сохранить в разных форматах:
    const macros = fields.map((f) => f.value);
    const delays = fields.map((f) => f.delay);
    const innerDelays = fields.map((f) => f.innerDelay);

    setMacros(macros);
    setDelays(delays);
    setInnerDelays(innerDelays);
    // Ваша логика сохранения...
  };

  // Рассчитываем общую задержку (для информации)
  const totalDelay = fields.reduce(
    (sum, field) => sum + field.delay + field.innerDelay * (countAccs - 1),
    0,
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: "100%",
          mb: 2,
          pb: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h5" component="h2">
            Настройки макросов
          </Typography>
          <BuildMacrosCountAccs />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={addTextField}
            size="small"
          >
            Добавить
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Всего макросов: {fields.length} | Общая задержка: {totalDelay}мс
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          width: "100%",
          overflow: "auto",
          mb: 2,
        }}
      >
        <Stack spacing={2}>
          {fields.map((field, index) => (
            <Paper key={field.id} elevation={1} sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1.5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="subtitle1" fontWeight="medium">
                    Macros {index + 1}
                  </Typography>

                  {/* Поле для ввода задержки */}
                  <TextField
                    type="number"
                    size="small"
                    label="Перед макросом"
                    value={field.delay || ""}
                    onChange={(e) => {
                      const value = e.target.value;

                      // Если поле пустое, устанавливаем undefined/null
                      if (value === "") {
                        handleDelayChange(field.id, 0); // или null
                        return;
                      }

                      const numValue = parseInt(value, 10);
                      if (!isNaN(numValue) && numValue >= 0) {
                        handleDelayChange(field.id, Math.min(numValue, 999999));
                      }
                    }}
                    onBlur={() => {
                      // При потере фокуса, если значение undefined/null, ставим 0
                      if (field.delay === undefined || field.delay === null) {
                        handleDelayChange(field.id, 0);
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TimeIcon fontSize="small" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">мс</InputAdornment>
                      ),
                      inputProps: {
                        min: 0,
                        max: 999999,
                        step: 50,
                        style: { width: "100px" },
                      },
                    }}
                    sx={{ width: 150 }}
                  />

                  <TextField
                    type="number"
                    size="small"
                    label="Внутри макроса"
                    value={field.innerDelay || ""}
                    onChange={(e) => {
                      const value = e.target.value;

                      // Если поле пустое, устанавливаем undefined/null
                      if (value === "") {
                        handleInnerDelayChange(field.id, 0); // или null
                        return;
                      }

                      const numValue = parseInt(value, 10);
                      if (!isNaN(numValue) && numValue >= 0) {
                        handleInnerDelayChange(
                          field.id,
                          Math.min(numValue, 999999),
                        );
                      }
                    }}
                    onBlur={() => {
                      // При потере фокуса, если значение undefined/null, ставим 0
                      if (
                        field.innerDelay === undefined ||
                        field.innerDelay === null
                      ) {
                        handleInnerDelayChange(field.id, 0);
                      }
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TimeIcon fontSize="small" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">мс</InputAdornment>
                      ),
                      inputProps: {
                        min: 0,
                        max: 999999,
                        step: 50,
                        style: { width: "100px" },
                      },
                    }}
                    sx={{ width: 150 }}
                  />
                </Box>

                {fields.length > 1 && (
                  <IconButton
                    color="error"
                    onClick={() => removeTextField(field.id)}
                    size="small"
                    title="Удалить поле"
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </Box>

              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                value={field.value}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                placeholder={`Введите текст для Macros ${index + 1}...`}
                size="medium"
                sx={{ mb: 1 }}
              />

              {/* Информация о макросе */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 1,
                  pt: 1,
                  borderTop: "1px dashed",
                  borderColor: "divider",
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  Символов: {field.value.length}
                </Typography>
                <Typography
                  variant="caption"
                  color={field.delay > 0 ? "primary" : "text.secondary"}
                >
                  Задержка: {field.delay}мс
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>

      <Box
        sx={{
          flexShrink: 0,
          width: "100%",
          pt: 2,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          fullWidth
          size="large"
        >
          Сохранить ({fields.length} макросов)
        </Button>

        {/* Дополнительная информация */}
        <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="caption" color="text.secondary">
            Всего символов: {fields.reduce((sum, f) => sum + f.value.length, 0)}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Общая задержка: {totalDelay}мс ({(totalDelay / 1000).toFixed(2)}с)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
