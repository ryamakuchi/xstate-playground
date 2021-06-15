import React, { useContext } from 'react'

import { CartContext } from '../components/cart-context'
import { CartEditPage } from '../components/cart-edit-page'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { ShopPage } from '../components/shop-page'
import { inCartEventCreator } from '../state-machine/events'

export default function Home() {
  const { state, send } = useContext(CartContext)

  const handleClick = (): void => {
    send(inCartEventCreator())
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
