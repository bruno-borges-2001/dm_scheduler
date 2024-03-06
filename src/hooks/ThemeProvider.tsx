"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export type ThemeProviderProps = React.PropsWithChildren

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>);
}
