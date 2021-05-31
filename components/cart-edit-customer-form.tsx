import { FC } from 'react';
import {
  Heading,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export const CartEditCustomerForm: FC = () => {
  return (
    <>
      <Box>
        <Heading as="h2" size="md">購入者情報</Heading>

        <FormControl id="email" marginTop="4">
          <FormLabel>メールアドレス</FormLabel>
          <Input type="email" placeholder="ryamakuchi@example.jp" />
        </FormControl>

        <FormControl id="lastName" marginTop="4">
          <FormLabel>お名前</FormLabel>
          <Flex>
            <Input type="lastName" marginRight="1" placeholder="姓" />
            <Input type="firstName" marginLeft="1" placeholder="名" />
          </Flex>
        </FormControl>
      </Box>
    </>
  )
}
