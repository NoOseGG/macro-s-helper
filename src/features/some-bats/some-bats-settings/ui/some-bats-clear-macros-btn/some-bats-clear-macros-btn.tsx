import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import styles from "./some-bats-clear-macros-btn.module.css";
import useSomeBatsStore from "../../../store/useSomeBatsStore";

export const SomeBatsClearMacrosBtn: React.FC = () => {
  const setMacros = useSomeBatsStore((state) => state.setMacros);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setMacros("");
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.container}
      onClick={handleClick}
    >
      {isHovered ?
        <DeleteIcon fontSize="large" />
      : <DeleteOutlineIcon sx={{ color: "#8b8b8b" }} fontSize="large" />}
    </div>
  );
};
