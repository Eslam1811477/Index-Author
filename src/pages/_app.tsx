import "@/styles/globals.css";
import { SessionProvider } from 'next-auth/react';


import type { AppProps } from "next/app";
import NotifyComponent from "./_alert";
import { DBConnect } from "@/db";

export default function App({ Component, pageProps }: AppProps) {
  DBConnect()
  return (
    <SessionProvider session={pageProps.session}>
      <NotifyComponent></NotifyComponent>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
