'use client';

import { useTranslations } from "next-intl";

export default function Work() {
  const t = useTranslations('Work');

  return (
    <div className="flex">
      <span>{t('work')}</span>
    </div>
  );
}