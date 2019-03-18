import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Title": "People Connect",
          "Subtitle":"Find a service provider who speaks your mother language",
          "language": "language",
          appName: "People Connect"
        }
      },
      pt: {
        translations: {
          "Title": "People Connect",
          "Subtitle":"Encontro um prestador de serviços que fala a sua língua",       
          "language": "idioma",
         }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
