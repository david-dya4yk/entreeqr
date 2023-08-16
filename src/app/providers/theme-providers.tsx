import React, { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/shared/theme";

interface ThemeProvidersProps {
  children: ReactNode;
}

const ThemeProviders: React.FC<ThemeProvidersProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviders;
