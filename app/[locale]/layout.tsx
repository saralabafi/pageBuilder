'use client'
import './globals.css'
import Providers from '../../Redux/Providers'

export default async function RootLayout(props: {
  children: React.ReactNode
  params: any
}) {
  return (
    <html
      lang={props?.params?.locale}
      dir={props?.params?.locale === 'fa' ? 'rtl' : 'ltr'}>
      <body>
        <Providers params={props?.params}>{props?.children}</Providers>
      </body>
    </html>
  )
}
