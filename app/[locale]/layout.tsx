'use client'
import './globals.css'
import Providers from '../../Redux/Providers'
import { GlobalHeader } from '../globalHeader'

export default async function RootLayout(props: {
  children: React.ReactNode
  params: any
}) {
  return (
    <html
      lang={props?.params?.locale}
      dir={props?.params?.locale === 'fa-ir' ? 'rtl' : 'ltr'}>
      <body>
        <Providers params={props?.params}>
          <GlobalHeader />

          {props?.children}
        </Providers>
      </body>
    </html>
  )
}
