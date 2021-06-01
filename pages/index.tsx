import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '../components/cart-context';
import { inCartEventCreator } from '../state-machine/events';
import { Shop } from '../components/shop';

export default function Home() {
  const router = useRouter();
  const [, send] = useContext(CartContext);

  const handleClick = (): void => {
    send(inCartEventCreator());
    router.push('/cart');
  }

  return (
    <>
      <Shop click={handleClick} />
    </>
  )
}
