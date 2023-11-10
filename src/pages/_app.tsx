import { AppProps } from "next/app";
import NavBar from "../components/NavBar/NavBar";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
