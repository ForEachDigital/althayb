


interface LocaleOption {
    code: string;
    label: string;
    region: string; // ISO 3166-1 alpha-2 for flags
}

export  const SUPPORTED_LOCALES: LocaleOption[] = [
    { code: "en", label: "English", region: "GB" },
    { code: "ar", label: "العربية", region: "SA" },
    // add more langs here…
];
