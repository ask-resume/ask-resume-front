'use client';

import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const fallbackLng = 'en';
const languages = [fallbackLng, 'ko'];
const defaultNS = 'translation';

const getOptions = (lng = fallbackLng, ns = defaultNS) => ({
  supportedLngs: languages,
  fallbackLng,
  lng,
  fallbackNS: defaultNS,
  defaultNS,
  ns,
});

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)),
  )
  .init(getOptions());

export function useTranslation(lng, ns, options) {
  if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng);
  return useTranslationOrg(ns, options);
}
