import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useMachine } from '@xstate/react';
import { CartContext } from '../components/cart-context';
import { cartMachine } from '../state-machine/index';

function MyApp({ Component, pageProps }: AppProps) {

  const [state, send, service] = useMachine(cartMachine, { devTools: true });

  return (
    <ChakraProvider>
      <CartContext.Provider value={[state, send, service]}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </ChakraProvider>
  )
}
export default MyApp
