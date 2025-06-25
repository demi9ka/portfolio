import { Squares } from './ui/squares'

export const Main = () => {
  return (
    <div className='w-[100vw] h-[100svh] max-h-[768px] relative'>
      <Squares speed={0.5} squareSize={60} direction='up' borderColor='#fff' hoverFillColor='transparent' />
    </div>
  )
}
