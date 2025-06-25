import { PageNotFound, Main } from '@/page'
import { Routes, Route } from 'react-router-dom'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
