import { useThemeStore } from '@/store/theme-store'
import { Moon, Sun } from 'lucide-react'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useThemeStore()

  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme == 'dark'}</button>
}
