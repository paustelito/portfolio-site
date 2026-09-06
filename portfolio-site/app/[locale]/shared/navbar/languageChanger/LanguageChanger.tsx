import { switchLocale } from "./SwitchLocale";
import { useLocale, useTranslations } from "next-intl";
import PillToggle from '../../components/PillToggle';

const LanguageChanger = () => {
    const locale = useLocale();
    const t = useTranslations('Navbar');

    const LANG_OPTIONS = [
        { value: 'en', label: 'en' },
        { value: 'es', label: 'es' },
    ];

    const handleLanguageChange = (lang: 'en' | 'es') => {
        switchLocale(lang)
    }

    return (
        <PillToggle
            options={LANG_OPTIONS}
            value={locale as 'en' | 'es'}
            onChange={handleLanguageChange}
            label={t('language')}
        />
    );
};

export default LanguageChanger;