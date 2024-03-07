import Header from "@/components/organisms/Header";
import { AvatarButton } from "@/components/organisms/Header/client";
import { Button } from "@/components/ui/button";
import { getUserAuth } from "@/lib/auth/utils";
import Link from "next/link";

export default async function AppLayout({ children }: React.PropsWithChildren) {
  const { session } = await getUserAuth()

  console.log(session)

  return (
    <>
      <Header
        right={session
          ?
          <AvatarButton name={session.user.name ?? ''} image={session.user.image} />
          :
          <Button asChild>
            <Link href="/sign-in">Access your account to start</Link>
          </Button>
        }
      />
      <main className="grow w-full max-w-5xl mx-auto">
        {children}
      </main>
    </>
  )
}