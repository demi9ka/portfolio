import { i18next } from '@/feature/locale'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type LanguageType = 'ru' | 'en'

interface LanguageStore {
  language: LanguageType
  setLanguage: (language: LanguageType) => void
  detectBrowserLanguage: () => LanguageType
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    set => ({
      language: 'ru',

      setLanguage: language => {
        set({ language })
        i18next.changeLanguage(language)
        document.documentElement.lang = language
      },

      detectBrowserLanguage: (): LanguageType => {
        const browserLanguages = navigator.languages || [navigator.language]
        for (const lang of browserLanguages) {
          const code = lang.split('-')[0].toLowerCase() as LanguageType
          return code
        }
        return 'en'
      }
    }),
    {
      name: 'language',
      onRehydrateStorage: () => state => {
        if (state) {
          if (!state.language) {
            const browserLang = state.detectBrowserLanguage()
            state.setLanguage(browserLang)
          } else {
            document.documentElement.lang = state.language
          }
        }
      }
    }
  )
)

const initializeLanguage = () => {
  const store = useLanguageStore.getState()
  if (!store.language) {
    const browserLang = store.detectBrowserLanguage()
    store.setLanguage(browserLang)
  }
}

initializeLanguage()
