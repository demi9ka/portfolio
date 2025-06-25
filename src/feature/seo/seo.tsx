import { Helmet } from 'react-helmet'

type Props = {
  title: string
}

export const Seo = ({ title }: Props) => {
  return (
    <Helmet>
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <link rel='icon' href='/icon.svg' type='image/svg+xml' />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet' />
    </Helmet>
  )
}
