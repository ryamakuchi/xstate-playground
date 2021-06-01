import { FC } from 'react';
import {
  Heading,
  Flex,
  Box,
  Center,
  Divider,
  Text,
} from '@chakra-ui/react';

import { CartEditCustomerForm } from './cart-edit-customer-form';

export const CartEdit: FC = () => (
  <>
    <Center h="100px">
      <Heading>rry's Shop</Heading>
    </Center>

    <Box width="80%" margin="auto">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width={{ base: '100%', md: 'calc(100% + 2rem)' }}
        margin="0 -1rem 5%"
      >
        <Box w="100%" h="10" bg="teal.500" textAlign="center" margin="1% 1rem">
          <Text lineHeight="10" fontSize="xl" color="white">1. 必要な情報の入力</Text>
        </Box>
        <Box w="100%" h="10" bg="gray.200" textAlign="center" m="1% 1rem">
          <Text lineHeight="10" fontSize="xl">2. 入力情報の確認</Text>
        </Box>
        <Box w="100%" h="10" bg="gray.200" textAlign="center" m="1% 1rem">
          <Text lineHeight="10" fontSize="xl">3. 購入完了</Text>
        </Box>
      </Flex>
    </Box>

    <Box width="80%" margin="auto" padding="5%" borderWidth="1px" borderRadius="lg">
      <CartEditCustomerForm />

      <Divider margin="5% 0" />

      <Box>
        <Heading as="h2" size="md">クレジットカード</Heading>
      </Box>

      <Divider margin="5% 0" />

      <Box>
        <Heading as="h2" size="md">注文内容</Heading>
      </Box>
    </Box>
  </>
)
