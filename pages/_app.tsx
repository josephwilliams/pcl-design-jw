import ClientOnly from "@/contexts/ClientOnly";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Modal from "react-modal";

import "react-tooltip/dist/react-tooltip.css";
import "@fontsource/inter-tight/400.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Bind modal to a specific DOM element in the Next.js environment.
    Modal.setAppElement("#__next");
  }, []);

  return (
    <ClientOnly>
      <Component {...pageProps} />
    </ClientOnly>
  );
}
