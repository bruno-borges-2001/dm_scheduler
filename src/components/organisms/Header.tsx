import { cn } from "@/lib/utils"
import Link from "next/link"
import { PropsWithChildren } from "react"
import LanguageSwitch from "../molecules/LanguageSwitch"

const defaultClasses = "flex gap-4 items-center"

function Header({ children }: PropsWithChildren) {
  return (
    <header className="w-screen shadow-md z-10 bg-background">
      <div className="grid grid-areas-header grid-cols-header w-full max-w-5xl mx-auto py-4 px-3">
        <section className={cn("grid-in-left justify-start", defaultClasses)}>
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-wider">Titulo do site</h1>
          </Link>
        </section>
        <section className={cn("grid-in-middle justify-center", defaultClasses)}>{children}</section>
        <section className={cn("grid-in-right justify-end", defaultClasses)}>
          <LanguageSwitch />
        </section>
      </div>
    </header>
  )
}

export default Header
