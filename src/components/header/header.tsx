import { Button } from '@/components/ui/button'
import { useLanguageStore } from '@/store/language-store'
import { useThemeStore } from '@/store/theme-store'
import { Sun, Moon, Code } from 'lucide-react'
import { Link } from 'react-router-dom'

const NAV_DATA = [
  { label: 'Главная', href: '/' },
  { label: 'Проекты', href: '/#project' },
  { label: 'Контакты', href: '/#contact' }
]

export const Header = () => {
  const { language, setLanguage } = useLanguageStore()
  const { theme, setTheme } = useThemeStore()

  const changeLanguage = () => {
    setLanguage(language == 'en' ? 'ru' : 'en')
  }
  const changeTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='z-10 fixed top-0 left-0 p-1  md:p-2 flex w-full justify-center'>
      <div
        className={`rounded-lg md:rounded-2xl p-2 pl-6 sm:p-4 sm:pl-8  max-w-[1536px] w-full flex items-center  backdrop-blur-xs  justify-between  transition-all duration-150 bg-neutral-300/60 dark:bg-neutral-900/80  `}
      >
        <div className='flex items-center gap-8'>
          <Code width={26} height={26} />
          {NAV_DATA.map((el, i) => (
            <Link className='text-sm sm:text-lg font-bold hover:opacity-80 ' key={i} to={el.href}>
              {el.label}
            </Link>
          ))}
        </div>
        <div className='flex align-center gap-4'>
          <Button onClick={changeLanguage} variant={'outline'}>
            <p className='text-lg '>{language}</p>
          </Button>
          <Button onClick={changeTheme} variant={'outline'}>
            {theme == 'dark' ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </div>
  )
}
