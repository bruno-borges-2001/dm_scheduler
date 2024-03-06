'use client'

import useLanguage from "@/hooks/useLanguage"
import { useTranslation } from "@/lib/i18n/client"
import Image from "next/image"
import Link from "next/link"
import { ComboBox } from "./ComboBox"

function LanguageLink({ label, locale, image }: { label: string, locale: string, image: string }) {
  const newRoute = `/${locale}/${window.location.pathname.substring(4)}`

  return (
    <Link className="px-3 py-2 hover:bg-[#fafafa] flex gap-2 items-center" href={newRoute}>
      <Image src={image} alt={label} height={0} width={0} sizes="1000" className="h-6 w-6 rounded-full object-cover" />
      {label}
    </Link>
  )
}

function LanguageSwitch() {
  const { language } = useLanguage()
  const { t } = useTranslation(language, 'LanguageSwitch')

  return (
    <ComboBox value={t('header')}>
      <section className="flex flex-col">
        <LanguageLink label={t('pt')} locale="pt" image="/images/br.svg" />
        <LanguageLink label={t('en')} locale="en" image="/images/us.svg" />
      </section>
    </ComboBox>
  )
}

export default LanguageSwitch
