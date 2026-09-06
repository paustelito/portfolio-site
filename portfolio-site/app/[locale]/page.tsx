'use client';

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="flex">
      <span>{t('home')}</span>
    </div>
  );
}
