import styles from "./button-page.module.css";

import { SoloButtonMacrosWindow } from "../../features/solo-button-macros/solo-button-macros-window/solo-button-macros-window";
import { SoloButtonSettings } from "../../features/solo-button-macros/solo-button-settings/solo-button-settings";

export const ButtonPage: React.FC = () => {
  return (
    <div className={styles.buttonPage}>
      <h2 className={styles.title}>Macro's for solo button</h2>
      <div className={styles.box}>
        <div className={styles.macros}>
          <SoloButtonMacrosWindow />
        </div>
        <div className={styles.settings}>
          <SoloButtonSettings />
        </div>
      </div>
    </div>
  );
};
