import React from "react";

import styles from "./contacts-page.module.css";
import { Avatar } from "@mui/material";

import kostykAvatar from "../../shared/assets/kostyk.jpg";

export const ContactsPage = () => {
  return (
    <div className={styles.contactPage}>
      <h2 className={styles.title}>Contact's</h2>
      <div className={styles.contacts}>
        <Avatar
          alt="kostykovich"
          src={kostykAvatar}
          sx={{ width: 400, height: 400 }}
        />
        <div className={styles.name}>Хитрый Еврей</div>
        <div className={styles.tg}>telegram: @Sergei9293</div>
      </div>
    </div>
  );
};
