import { FC } from 'react';
import {
  Heading,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export const CartEditCreditForm: FC = () => (
  <>
    <Box>
      <Heading as="h2" size="md">クレジットカード</Heading>

      <FormControl id="ccNumber" marginTop="4">
        <FormLabel>カードナンバー</FormLabel>
        <Input
          type="number"
          placeholder="4242 4242 4242 4242"
          autoComplete="cc-number"
          required
        />
      </FormControl>

      <FormControl id="ccExpAndCsc" marginTop="4">
        <FormLabel>有効期限 / セキュリティ番号</FormLabel>
        <Flex>
          <Input
            type="text"
            marginRight="1"
            placeholder="04 / 24"
            autoComplete="cc-exp"
            required
          />

          <Input
            type="number"
            marginLeft="1"
            placeholder="123"
            autoComplete="cc-csc"
            required
          />
        </Flex>
      </FormControl>

      <FormControl id="ccName" marginTop="4">
        <FormLabel>カード名義人</FormLabel>
        <Input
          type="text"
          placeholder="TARO YAMADA"
          autoComplete="cc-name"
          required
        />
      </FormControl>
    </Box>
  </>
)
