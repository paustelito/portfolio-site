import { useTranslations } from "next-intl";
import Hero from './shared/modules/hero/Hero';
import FeaturedProjects from "./shared/modules/featuredProjects/FeaturedProjects";

export default function Home() {
  const t = useTranslations('Home.hero');

  return (
    <div className="grid grid-cols-2 gap-32">
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
      <div>
        <FeaturedProjects />
      </div>
    </div>
  );
}
