import React, { createContext, useState, useCallback } from "react";

export interface Toast {
  id: number;
  message: string;
}

interface ToastContextState {
  toasts: Toast[];
  addToast: (message: string) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextState | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  }, []);
  const addToast = useCallback(
    (message: string) => {
      const id = Date.now();
      setToasts((currentToasts) => [...currentToasts, { id, message }]);
      const timer = setTimeout(() => removeToast(id), 5000);
      return () => clearTimeout(timer);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContext;
