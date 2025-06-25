import { BrowserRouter } from 'react-router-dom'
import { YandexMetrika } from '@/feature/yandex-metrika'
import { I18nextProvider } from 'react-i18next'
import type { ReactNode } from 'react'
import { i18next } from '@/feature/locale'

type Props = {
  children: ReactNode
}

export const Provider = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <YandexMetrika counterId={121} />
        {children}
      </I18nextProvider>
    </BrowserRouter>
  )
}
