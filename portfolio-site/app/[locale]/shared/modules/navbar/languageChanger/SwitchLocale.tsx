"use client";

const LOCALES = ["es", "en", "fr", "de"]; // pon los que uses

export function switchLocale(nextLocale: string) {
    const { pathname, search, hash } = window.location;

    const parts = pathname.split("/").filter(Boolean);

    if (parts.length > 0 && LOCALES.includes(parts[0])) {
        parts[0] = nextLocale;
    } else {
        parts.unshift(nextLocale);
    }

    const nextPath = "/" + parts.join("/") + search + hash;

    window.location.assign(nextPath);
}