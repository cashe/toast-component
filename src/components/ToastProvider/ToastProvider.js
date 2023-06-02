import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey.hook";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => {
    setToasts([]);
  });

  return (
    <ToastContext.Provider
      value={{
        toasts,
        add: (t) => {
          setToasts([...toasts, t]);
        },
        remove: (t) => setToasts(toasts.filter((toast) => toast !== t)),
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
