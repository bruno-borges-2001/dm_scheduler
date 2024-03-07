"use client";

import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOut({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const handleSignOut = async () => {
    signOut({ callbackUrl: "/" })
  };

  return (
    <button onClick={handleSignOut} className={cn("flex gap-2 items-center", className)} {...rest}>
      <LogOut />
      Sign out
    </button>
  );
}
