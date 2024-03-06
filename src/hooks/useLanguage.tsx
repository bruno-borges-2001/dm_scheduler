import { Language } from "@/lib/i18n/settings";
import { PropsWithChildren, createContext, useContext } from "react";

interface LanguageContextProps {
  language: Language
}

const languageContext = createContext({} as LanguageContextProps)

export type LanguageProviderProps = PropsWithChildren<{ language: Language }>

export function LanguageProvider({ children, language }: LanguageProviderProps) {
  return <languageContext.Provider value={{ language }}>{children}</languageContext.Provider>
}

export default function useLanguage() {
  return useContext(languageContext)
}