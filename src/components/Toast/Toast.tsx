import React, { useEffect } from "react";
import styles from "./Toast.module.scss";

interface ToastProps {
  id: number;
  message: string;
  onClose: (id: number) => void;
}

const Toast: React.FC<ToastProps> = ({ id, message, onClose }) => {
  return (
    <div className={styles.toast}>
      {message}
      <button onClick={() => onClose(id)} className={styles.closeButton}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
