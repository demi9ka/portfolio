import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import { useLanguageStore } from '@/store/language-store'

export const i18next = i18n.createInstance()

const { language } = useLanguageStore.getState()

i18next
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: language,
    fallbackLng: 'ru',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    }
  })
