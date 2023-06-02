import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((t) => {
        return (
          <li key={t.id} className={styles.toastWrapper}>
            <Toast toast={t} />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
