import { useTranslations } from "next-intl";
import Hero from './shared/modules/hero/Hero';

export default function Home() {
  const t = useTranslations('Home.hero');

  return (
    <div className="flex">
      <Hero
        eyebrow={t('fullstack')}
        title={<> {t('building')} <span className='text-secondary'>{t('human-first')}</span>{t('software')} </>}
        body={<>{t('interest')} <span className='text-white/70'>{t('design')}</span></>}
        buttons={[
          {
              text: t("about"),
              link: '/about',
              variant: 'outline'
          },
          {
              text: t("work"),
              link: '/work',
              variant: 'solid'
          }
        ]}
      />
    </div>
  );
}
