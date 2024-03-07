import Header from "@/components/organisms/Header";
import { AvatarButton } from "@/components/organisms/Header/client";
import { checkAuth } from "@/lib/auth/utils";

export default async function AppLayout({ children }: React.PropsWithChildren) {
  const { session } = await checkAuth();

  return (
    <>
      <Header right={<AvatarButton name={session!.user.name ?? ''} image={session!.user.image} />} />
      <main className="grow w-full max-w-5xl mx-auto">
        {children}
      </main>
    </>
  )
}