import { cn } from "@/lib/utils"
import Link from "next/link"
import { PropsWithChildren } from "react"
import LanguageSwitch from "../../molecules/LanguageSwitch"

const defaultClasses = "flex gap-4 items-center"

interface HeaderProps {
  left?: React.ReactNode
  right?: React.ReactNode
}

function Header({ children, left, right }: PropsWithChildren<HeaderProps>) {
  return (
    <header className="w-screen shadow-md z-10 bg-background">
      <div className="grid grid-areas-header grid-cols-header w-full max-w-5xl mx-auto py-4 px-4">
        <section className={cn("grid-in-left justify-start", defaultClasses)}>
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-wider">Titulo do site</h1>
          </Link>
          {left}
        </section>
        <section className={cn("grid-in-middle justify-center", defaultClasses)}>{children}</section>
        <section className={cn("grid-in-right justify-end", defaultClasses)}>
          <LanguageSwitch />
          {right}
        </section>
      </div>
    </header>
  )
}

export default Header
