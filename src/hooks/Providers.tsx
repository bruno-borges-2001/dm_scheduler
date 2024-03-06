'use client'

import { ThemeProvider, type ThemeProviderProps } from './ThemeProvider'
import { LanguageProvider, type LanguageProviderProps } from './useLanguage'

type ProvidersProps = LanguageProviderProps & ThemeProviderProps

function Providers({ children, language }: ProvidersProps) {
  return (
    <LanguageProvider language={language}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default Providers
