import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  IconButton,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
} from "@mui/icons-material";

interface FieldData {
  id: string; // Используем строковый ID для стабильности
  value: string;
}

export const BuildMacrosSettings: React.FC = () => {
  const [fields, setFields] = useState<FieldData[]>([
    { id: "1", value: "" },
    { id: "2", value: "" },
  ]);

  const handleInputChange = (id: string, value: string) => {
    setFields((prevFields) =>
      prevFields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  const addTextField = () => {
    const newId = Date.now().toString(); // Уникальный ID на основе времени
    setFields((prevFields) => [...prevFields, { id: newId, value: "" }]);
  };

  const removeTextField = (id: string) => {
    if (fields.length > 1) {
      setFields((prevFields) => prevFields.filter((field) => field.id !== id));
    }
  };

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
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={addTextField}
            size="small"
          >
            Добавить
          </Button>
        </Box>
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
                <Typography variant="subtitle1" fontWeight="medium">
                  Macros {index + 1} {/* Используем индекс для нумерации */}
                </Typography>

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
              />
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
          onClick={() =>
            console.log(
              "Saved:",
              fields.map((f) => f.value)
            )
          }
          fullWidth
          size="large"
        >
          Сохранить ({fields.length} макросов)
        </Button>
      </Box>
    </Box>
  );
};
