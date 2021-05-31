import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '../components/cart-context';
import { CartEdit } from '../components/cart-edit';

export default function Cart() {
  const router = useRouter();
  const [state, send, service] = useContext(CartContext);

  // useEffect(() => {
  //   if (state.value !== 'edit') {
  //     router.push('/');
  //   }
  // }, [state])

  return (<CartEdit />);
}
