import Apollo from "@/app/providers/apollo.provider";
import OwnerProvider from "@/app/providers/owner-provider";
import ThemeProviders from "@/app/providers/theme-providers";
import { globalStyles } from "@/app/styled/globalStyles";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Apollo pageProps={pageProps}>
      <OwnerProvider>
        <ThemeProviders>
          {globalStyles}
          <Component {...pageProps} />
        </ThemeProviders>
      </OwnerProvider>
    </Apollo>
  );
}
