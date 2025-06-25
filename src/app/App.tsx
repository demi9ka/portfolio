import { Provider } from './provider'
import { Routing } from './routing'
import { Header } from './ui/header'
import '@/feature/locale'

export const App = () => {
  return (
    <Provider>
      <Header />
      <Routing />
    </Provider>
  )
}
