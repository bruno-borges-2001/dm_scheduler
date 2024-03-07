import Header from "@/components/organisms/Header";
import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: React.PropsWithChildren) {
  const session = await getUserAuth();
  if (session?.session) redirect("/dashboard");

  return (
    <>
      <Header />
      <main className="grow w-full max-w-5xl mx-auto">
        {children}
      </main>
    </>
  );
}
