import * as React from 'react'
import theme from '../theme'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider, CSSReset, CSSPolyfill } from '@chakra-ui/react'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <CSSReset />
          <CSSPolyfill />
            <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}