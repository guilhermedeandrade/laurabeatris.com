import {
  ChakraProvider,
  localStorageManager,
  cookieStorageManager
} from '@chakra-ui/react'

import { ChakraProps } from './types'

export function Chakra ({ cookies, children, theme }: ChakraProps) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export function getServerSideProps ({ req }) {
  return {
    props: {
      // First time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? ''
    }
  }
}
