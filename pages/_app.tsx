import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import { theme } from 'styles/theme'
import { global } from 'styles/global'
import { configSEO } from 'next-seo.config'
import { Layout } from 'components/Layout'
import useHasMounted from 'hooks/useHasMounted'

export default function MyApp ({ Component, pageProps }: AppProps) {
  const isMounted = useHasMounted()

  if (!isMounted) {
    return null
  }

  return (
    <>
      <DefaultSeo {...configSEO} />
      <ChakraProvider theme={theme} resetCSS>
        <Global styles={global} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
