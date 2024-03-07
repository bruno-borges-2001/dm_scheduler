'use client'

import SignOut from "@/components/auth/SignOut"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { LayoutDashboard } from "lucide-react"
import Link from "next/link"

function getInitials(name: string) {
  const splittedNames = name.split(' ')

  if (splittedNames.length === 0) return ''

  if (splittedNames.length === 1) return splittedNames[0]?.[0]?.toUpperCase()

  return splittedNames.at(0)!.charAt(0).toUpperCase() + splittedNames.at(-1)!.charAt(0).toUpperCase()
}

export function AvatarButton({ name, image }: { name: string, image: string }) {
  const initials = getInitials(name)

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-fit p-0 flex flex-col mt-4">
        <Link href="/dashboard" className="px-3 py-2 hover:bg-primary-foreground flex items-center gap-2">
          <LayoutDashboard />
          Dashboard
        </Link>
        <hr className="h-px w-full bg-border" />
        <SignOut className="text-left px-3 py-2 hover:bg-primary-foreground text-red-700 font-medium" />
      </PopoverContent>
    </Popover>
  )
}
