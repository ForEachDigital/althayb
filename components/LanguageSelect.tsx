/* app/[locale]/(root)/(home)/(components)/header/parts/LanguageSelect.tsx
   – locale switcher that does a full page reload after changing language   */
'use client';

import {useLocale} from 'next-intl';
import {HiOutlineGlobeAlt} from 'react-icons/hi2';
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition
} from '@headlessui/react';

/* locale-aware wrappers from createNavigation() */
import {usePathname} from '@/i18n/navigation';

import ReactCountryFlag from 'react-country-flag';
import React, {Fragment} from 'react';
import {SUPPORTED_LOCALES} from "@/models/LocaleOption";

export default function LanguageSelect() {
    const locale        = useLocale();       // current locale, e.g. 'en'
    const internalPath  = usePathname();     // path without the locale prefix

    /** Keep the same page, change locale, then hard-reload */
    const switchTo = (code: string) => {
        if (code === locale) return;

        // Build absolute URL with the new locale prefix
        const url = `/${code}${internalPath}`;

        // A hard reload guarantees the build version picks up the new locale
        window.location.assign(url);           // ← full page reload
    };

    return (
        <Menu as="div" className="relative">
            <MenuButton className="icon-btn">
                <HiOutlineGlobeAlt className="text-lg" />
            </MenuButton>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                    {SUPPORTED_LOCALES.map(({code, label, region}) => (
                        <MenuItem key={code}>
                            {({active}) => (
                                <button
                                    onClick={() => switchTo(code)}
                                    className={`flex w-full items-center gap-2 px-4 py-2 text-sm font-semibold ${
                                        active ? 'bg-primary/10' : ''
                                    }`}
                                >
                                    <ReactCountryFlag
                                        countryCode={region}
                                        svg
                                        className="rounded-full"
                                        style={{width: '1.5em', height: '1.5em'}}
                                        aria-label={label}
                                    />
                                    {label}
                                </button>
                            )}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Transition>
        </Menu>
    );
}
