import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeType = 'light' | 'dark' | 'system'

interface ThemeStore {
  theme: ThemeType
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: ThemeType) => void
  detectSystemTheme: () => 'light' | 'dark'
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'system',
      resolvedTheme: 'light',

      setTheme: theme => {
        const resolved = theme === 'system' ? get().detectSystemTheme() : theme
        set({ theme, resolvedTheme: resolved })
        applyTheme(resolved)
      },

      detectSystemTheme: (): 'light' | 'dark' => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
    }),
    {
      name: 'theme',
      onRehydrateStorage: () => state => {
        if (state) {
          const resolved = state.theme === 'system' ? state.detectSystemTheme() : state.theme
          state.resolvedTheme = resolved
          applyTheme(resolved)
        }
      }
    }
  )
)

const applyTheme = (theme: 'light' | 'dark') => {
  const root = document.documentElement
  root.classList.remove(theme === 'dark' ? 'light' : 'dark')
  root.classList.add(theme)
  root.setAttribute('data-theme', theme)
}

const initializeTheme = () => {
  const store = useThemeStore.getState()
  if (!store.theme) {
    const systemTheme = store.detectSystemTheme()
    store.setTheme('system')
  } else {
    const resolved = store.theme === 'system' ? store.detectSystemTheme() : store.theme
    applyTheme(resolved)
  }
}

// Инициализация при загрузке
initializeTheme()

// Слушатель изменения системной темы
if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const store = useThemeStore.getState()
    if (store.theme === 'system') {
      const resolved = e.matches ? 'dark' : 'light'
      store.setTheme('system')
    }
  })
}
