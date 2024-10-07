import ClientOnly from "@/contexts/ClientOnly";
import { SystemThemeProvider } from "@/contexts/ThemeContext";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientOnly>
      <ThemeProvider>
        <SystemThemeProvider>
          <Component {...pageProps} />
        </SystemThemeProvider>
      </ThemeProvider>
    </ClientOnly>
  );
}
