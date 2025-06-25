import { Header } from '@/components/header'
import { Provider } from './provider'
import { Routing } from './routing'
import { initI18n } from '@/feature/locale'

export const App = () => {
  initI18n()
  return (
    <Provider>
      <Header />
      <Routing />
    </Provider>
  )
}
