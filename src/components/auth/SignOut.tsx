"use client";

import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

export default function SignOut({ className, children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const handleSignOut = async () => {
    signOut({ callbackUrl: "/" })
  };

  return (
    <button onClick={handleSignOut} className={cn("flex gap-2 items-center", className)} {...rest}>
      {children}
    </button>
  );
}
