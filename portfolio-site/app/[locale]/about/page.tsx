'use client';

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations('About');

  return (
    <div className="flex">
      <span>{t('about')}</span>
    </div>
  );
}