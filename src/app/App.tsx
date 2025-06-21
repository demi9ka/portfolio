import { Provider } from './provider'
import { AppRouting } from './app-routing'
import { Header } from '@/shared/ui'
import css from './app.module.css'
import '@/feature/locale'

export const App = () => {
  return (
    <Provider>
      <Header />
      <main className={css.content}>
        <AppRouting />
      </main>
    </Provider>
  )
}
