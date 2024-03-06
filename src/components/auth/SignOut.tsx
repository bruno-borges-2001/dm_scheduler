"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  const handleSignOut = async () => {
    signOut({ callbackUrl: "/" })
  };

  return (
    <button onClick={handleSignOut} className="w-full text-left">
      Sign out
    </button>
  );
}
