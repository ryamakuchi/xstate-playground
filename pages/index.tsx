import React, { useContext } from 'react';
import { CartContext } from '../components/cart-context';
import { inCartEventCreator } from '../state-machine/events';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ShopPage } from '../components/shop-page';
import { CartEditPage } from '../components/cart-edit-page';

export default function Home() {
  const { state, send } = useContext(CartContext);

  const handleClick = (): void => {
    send(inCartEventCreator());
  }

  return (
    <>
      <Header />

      {state.value === 'idle' && <ShopPage onClick={handleClick} />}
      {state.value === 'edit' && <CartEditPage />}

      <Footer />
    </>
  )
}
