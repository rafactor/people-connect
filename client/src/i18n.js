import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import Backend from 'i18next-locize-backend';

import common_en from "./translations/en/common"
import common_pt from "./translations/pt/common"
import common_ar from "./translations/ar/common"
import common_ua from "./translations/ua/common"
const resources = {
  en: {
    common: common_en
  },
  pt: {
    common: common_pt
  },
  ar: {
    common: common_ar
  },
  ua: {
    common: common_ua
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    // have a common namespace used around the full app
    ns: ["common"],
    defaultNS: "common",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true,
    },
  });

export default i18n;
