import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Flex, Spinner } from '@chakra-ui/react';

import { CartContext } from '../components/cart-context';
import { CartEditPage } from '../components/cart-edit-page';

export default function Cart() {
  const router = useRouter();
  const { state, send, service } = useContext(CartContext);

  const isStateEdit = state.value === 'edit'

  useEffect(() => {
    if (!isStateEdit) {
      router.push('/');
    }
  }, [state])

  if (!isStateEdit) {
    return (
      <Flex justify="center" align="center" h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    )
  }

  return (<CartEditPage />);
}
