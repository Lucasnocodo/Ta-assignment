import React from "react";
import { AppProps } from "next/app";
import { ToastProvider } from "../contexts/ToastContext";
import ToastContainer from "../components/Toast/ToastContainer";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ToastProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ToastProvider>
  );
};

export default MyApp;
