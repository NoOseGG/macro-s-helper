import styles from "./contacts-page.module.css";
import { Avatar } from "@mui/material";

export const ContactsPage = () => {
  return (
    <div className={styles.contactPage}>
      <h2 className={styles.title}>Contact's</h2>
      <div className={styles.box}>
        <div className={styles.contacts}>
          <Avatar
            alt="kostykovich"
            src="/kostyk.jpg"
            sx={{ width: 400, height: 400 }}
          />
          <div className={styles.name}>Хитрый Еврей</div>
          <div className={styles.tg}>telegram: @Sergei9293</div>
        </div>

        <div className={styles.contacts}>
          <Avatar
            alt="svirydzenka"
            src="/svirydzenka.png"
            sx={{ width: 400, height: 400 }}
          />
          <div className={styles.name}>Умный Человек</div>
          <div className={styles.tg}>telegram: @noose92</div>
        </div>
      </div>
    </div>
  );
};
