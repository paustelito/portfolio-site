import { useTranslations } from 'next-intl';
import Card from "../../components/Card";

const FeaturedProjects = () => {
    const t = useTranslations('Home.featured');

    return (
        <div className="flex flex-col gap-4">
            <span className='text-primary text-[16px] tracking-[1.2]'>{t('projects')}</span>
            <Card title={t('novik')}
                content={
                    <div className='flex flex-col text-gray'>
                        <div className='mb-5'>
                            <span>{t('novik-desc')}</span>
                        </div>
                        <div className='flex mt-auto'>
                            {t('react')} + {t('figma')} + {t('storybook')}
                        </div>
                    </div>
                }
                cta={t('view')} link='/work'
            />
            <div className='flex flex-row gap-6'>
                <Card title={t('novik')}
                    content={
                        <div className='flex flex-col'>
                            <div className='mb-5'>
                                <span>{t('novik-desc')}</span>
                            </div>
                            <div className='flex mt-auto'>
                                {t('react')} + {t('figma')} + {t('storybook')}
                            </div>
                        </div>
                    }
                    cta={t('view')} link='/work'
                />
                <Card title={t('novik')}
                    content={
                        <div className='flex flex-col text-gray'>
                            <div className='mb-5'>
                                <span>{t('novik-desc')}</span>
                            </div>
                            <div className='flex mt-auto'>
                                {t('react')} + {t('figma')} + {t('storybook')}
                            </div>
                        </div>
                    }
                    cta={t('view')} link='/work'
                />
            </div>
        </div>
    );
}

export default FeaturedProjects;