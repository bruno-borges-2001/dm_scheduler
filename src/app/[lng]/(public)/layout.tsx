import Header from "@/components/organisms/Header";
import { AvatarButton } from "@/components/organisms/Header/client";
import { Button } from "@/components/ui/button";
import { getUserAuth } from "@/lib/auth/utils";
import { useTranslation } from "@/lib/i18n";
import { PageWithChildrenProps } from "@/types/common";
import Link from "next/link";

export default async function AppLayout({ children, params: { lng } }: PageWithChildrenProps) {
  const { session } = await getUserAuth()

  const { t } = await useTranslation(lng, 'Header')

  return (
    <>
      <Header
        right={session
          ?
          <AvatarButton name={session.user.name ?? ''} image={session.user.image} />
          :
          <Button asChild>
            <Link href="/sign-in">
              {t('loginMessage')}
            </Link>
          </Button>
        }
      />
      <main className="grow w-full max-w-5xl mx-auto">
        {children}
      </main>
    </>
  )
}