"use client";

import { PageProps } from "@/types/common";
import { signIn } from "next-auth/react";

interface SignInProps extends PageProps {
  searchParams?: { from?: string }
}

function SignIn({ searchParams }: SignInProps) {
  return (
    <main className="bg-popover max-w-lg mx-auto my-4 rounded-lg p-10">
      <h1 className="text-2xl font-bold text-center">
        Sign in to your account
      </h1>
      <div className="mt-4">
        <button
          onClick={() => signIn('google', { callbackUrl: searchParams?.from || "/dashboard" })}
          className="w-full bg-primary text-primary-foreground text-center hover:opacity-90 font-medium px-4 py-2 rounded-lg block"
        >
          Sign In
        </button>
      </div>
    </main>
  );
};

export default SignIn;