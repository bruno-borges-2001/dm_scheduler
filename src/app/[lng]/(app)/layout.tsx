import NextAuthProvider from "@/lib/auth/Provider";
import { checkAuth } from "@/lib/auth/utils";
import TrpcProvider from "@/lib/trpc/Provider";
import { cookies } from "next/headers";
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();
  return (
    <main>
      <NextAuthProvider>
        <TrpcProvider cookies={cookies().toString()}>
          <div className="flex h-screen">
            <main className="flex-1 md:p-8 pt-2 p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </TrpcProvider>
      </NextAuthProvider>
    </main>
  )
}