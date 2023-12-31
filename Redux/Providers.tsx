'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextIntlClientProvider } from 'next-intl'
import notFound from '../app/[locale]/not-found'
import { Provider } from 'react-redux'
import { store } from './Store'

interface IProviders {
  children: any
  params: any
}
export default async function Providers(props: IProviders) {
  const queryClient = new QueryClient()
  let messages
  try {
    messages = (await import(`../messages/${props?.params?.locale}.json`))
      .default
  } catch (error) {
    notFound()
  }

  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NextIntlClientProvider
            locale={props?.params?.locale ? props?.params?.locale : ''}
            messages={messages}>
            {props?.children}
          </NextIntlClientProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  )
}
