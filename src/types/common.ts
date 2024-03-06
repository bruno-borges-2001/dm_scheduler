import { Language } from "@/lib/i18n/settings"
import { PropsWithChildren } from "react"

export type PageParams = { lng: Language }
export type PageProps = { params: PageParams }
export type PageWithChildrenProps = PropsWithChildren<PageProps>