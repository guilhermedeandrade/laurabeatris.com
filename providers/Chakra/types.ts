import { PropsWithChildren } from 'react'

import { theme } from 'styles/theme'

export type ChakraProps = PropsWithChildren<{
  cookies: Record<string, unknown>;
  theme: typeof theme;
}>
