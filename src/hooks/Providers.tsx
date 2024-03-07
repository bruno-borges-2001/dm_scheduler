'use client'

import NextAuthProvider from '@/lib/auth/Provider'
import TrpcProvider, { type TrpcProviderProps } from '@/lib/trpc/Provider'
import { ThemeProvider, type ThemeProviderProps } from './ThemeProvider'
import { LanguageProvider, type LanguageProviderProps } from './useLanguage'

type ProvidersProps = TrpcProviderProps & LanguageProviderProps & ThemeProviderProps

function Providers({ children, language, cookies }: ProvidersProps) {
  return (
    <LanguageProvider language={language}>
      <ThemeProvider>
        <NextAuthProvider>
          <TrpcProvider cookies={cookies}>
            {children}
          </TrpcProvider>
        </NextAuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default Providers
