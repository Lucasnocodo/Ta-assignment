import React, { useContext } from "react";
import styles from "./ToastContainer.module.scss";
import ToastContext from "../../contexts/ToastContext";
import ToastItem from "./Toast";

const ToastContainer: React.FC = () => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error("ToastContainer must be used within a ToastProvider");
  }
  const { toasts, removeToast } = toastContext;

  return (
    <div className={styles.toastContainer}>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
          id={toast.id}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
