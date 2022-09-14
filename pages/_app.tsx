import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from "recoil"
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import "react-datepicker/dist/react-datepicker.css"
import "./chakra-react-datepicker.css"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  
  return <RecoilRoot>
    <ChakraProvider>
    <SessionProvider session={pageProps.session}>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </SessionProvider>
      
    </ChakraProvider>
  </RecoilRoot>
  
  
}

export default MyApp
