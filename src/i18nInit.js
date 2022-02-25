import en from "./translations/en.json";
import ua from "./translations/ua.json";
import pl from "./translations/pl.json";
import i18next from "i18next";

export const i18nInit = (lng) => i18next.init({
  interpolation: { escapeValue: false },
  lng: lng || 'pl',
  fallbackLng: ['pl', 'en', 'ua'],
  defaultNS: 'common',
  resources: {
    en: {
      common: en              
    },
    pl: {
      common: pl
    },
    ua: {
      common: ua
    },
  },
});