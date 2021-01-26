import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import { theme } from 'styles/theme'
import { global } from 'styles/global'
import { configSEO } from 'next-seo.config'
import { Layout } from 'components/Layout'
import { Chakra } from 'providers/Chakra'
import { ChakraProps } from 'providers/Chakra/types'

type MyAppProps = AppProps & Pick<ChakraProps, 'cookies'>

export default function MyApp ({ Component, pageProps, cookies }: MyAppProps) {
  return (
    <>
      <DefaultSeo {...configSEO} />
      <Chakra cookies={cookies} theme={theme}>
        <Global styles={global} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Chakra>
    </>
  )
}

export { getServerSideProps } from 'providers/Chakra'
