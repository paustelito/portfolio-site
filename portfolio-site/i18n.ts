import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"] as const;
const defaultLocale = "en";

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = (await requestLocale) ?? defaultLocale;

    if(!locales.includes(locale as any)) {
        notFound();
    }

    return {
        locale,
        messages: (await import(`./locale/${locale}.json`)).default,
    };
});