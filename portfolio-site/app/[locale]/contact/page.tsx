'use client';

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <div className="flex">
      <span>{t('contact')}</span>
    </div>
  );
}
