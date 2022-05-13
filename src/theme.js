import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      900: 'hsla(129, 10%, 14%, 1)',
      800: 'hsla(127, 9%, 17%, 0.77)',
      700: 'hsla(127, 9%, 19%, 0.56)',
      600: 'hsla(125, 9%, 29%, 0.56)',
      500: 'hsla(126, 9%, 39%, 0.56)',
      //   400: 'hsla(0, 0%, 87%, 1)',
      //   300: 'hsla(0, 0%, 89%, 1)',
      //   200: 'hsla(0, 0%, 92%, 1)',
      //   100: 'hsla(0, 0%, 95%, 1)',
      //   50: 'hsla(0, 0%, 97%, 1)',
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Patua One, serif',
    mono: 'Menlo, monospace',
  },
})
