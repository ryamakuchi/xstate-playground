import { ChakraProvider } from '@chakra-ui/react'
import { useMachine } from '@xstate/react'
import type { AppProps } from 'next/app'

import { CartContext } from '../components/cart-context'
import { cartMachine } from '../state-machine/index'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [state, send, service] = useMachine(cartMachine, { devTools: true })

  return (
    <ChakraProvider>
      <CartContext.Provider value={{ state, send, service }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </ChakraProvider>
  )
}
