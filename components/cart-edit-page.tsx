import { Flex, Box, Divider, Text, Button } from '@chakra-ui/react'
import { FC } from 'react'

import { CartEditCreditForm } from './cart-edit-credit-form'
import { CartEditCustomerForm } from './cart-edit-customer-form'
import { CartEditItem } from './cart-edit-item'

export const CartEditPage: FC = () => (
  <>
    <Box width="80%" margin="auto">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width={{ base: '100%', md: 'calc(100% + 2rem)' }}
        margin="0 -1rem 5%"
      >
        <Box w="100%" h="10" bg="teal.500" textAlign="center" margin="1% 1rem">
          <Text lineHeight="10" fontSize="xl" color="white">
            1. 必要な情報の入力
          </Text>
        </Box>
        <Box w="100%" h="10" bg="gray.200" textAlign="center" m="1% 1rem">
          <Text lineHeight="10" fontSize="xl">
            2. 入力情報の確認
          </Text>
        </Box>
        <Box w="100%" h="10" bg="gray.200" textAlign="center" m="1% 1rem">
          <Text lineHeight="10" fontSize="xl">
            3. 購入完了
          </Text>
        </Box>
      </Flex>
    </Box>

    <Box width="80%" margin="auto" padding="5%" borderWidth="1px" borderRadius="lg">
      <CartEditCustomerForm />

      <Divider margin="5% 0" />

      <CartEditCreditForm />

      <Divider margin="5% 0" />

      <CartEditItem />

      <Divider margin="5% 0" />

      <Flex direction="row-reverse">
        <Button colorScheme="teal" size="lg">
          入力情報を確認
        </Button>
      </Flex>
    </Box>
  </>
)
