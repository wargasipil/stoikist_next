import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from "recoil"
import AppAlert from '../src/components/AppAlert'
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  
  return <RecoilRoot>
    <ChakraProvider>
    <SessionProvider session={pageProps.session}>
    <QueryClientProvider client={queryClient}>
      <AppAlert></AppAlert>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </SessionProvider>
      
    </ChakraProvider>
  </RecoilRoot>
  
  
}

export default MyApp
