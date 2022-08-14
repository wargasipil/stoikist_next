import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from "recoil"
import AppAlert from '../components/AppAlert'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  
  return <RecoilRoot>
    <ChakraProvider>
    <SessionProvider session={pageProps.session}>
      <AppAlert></AppAlert>
      <Component {...pageProps} />
    </SessionProvider>
      
    </ChakraProvider>
  </RecoilRoot>
  
  
}

export default MyApp
