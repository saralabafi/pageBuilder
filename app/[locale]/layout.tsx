'use client'
import './globals.css'
import Providers from '../../Redux/Providers'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: any
}) {
  console.log(params)
  return (
    <html lang={params?.locale}>
      <body>
        <Providers params={params}>{children}</Providers>
      </body>
    </html>
  )
}
