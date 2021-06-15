import { Heading, Box, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { FC } from 'react'

export const CartEditCustomerForm: FC = () => (
  <>
    <Box>
      <Heading as="h2" size="md">
        購入者情報
      </Heading>

      <FormControl id="email" marginTop="4">
        <FormLabel>メールアドレス</FormLabel>
        <Input type="email" placeholder="ryamakuchi@example.jp" autoComplete="email" required />
      </FormControl>

      <FormControl id="name" marginTop="4">
        <FormLabel>お名前</FormLabel>
        <Flex>
          <Input type="text" id="familyName" marginRight="1" placeholder="姓" autoComplete="family-name" required />
          <Input type="text" id="givenName" marginLeft="1" placeholder="名" autoComplete="given-name" required />
        </Flex>
      </FormControl>

      <FormControl id="postalCode" marginTop="4">
        <FormLabel>郵便番号</FormLabel>
        <Input type="text" placeholder="郵便番号" autoComplete="postal-code" required />
      </FormControl>

      <FormControl id="addressLevel1" marginTop="4">
        <FormLabel>都道府県</FormLabel>
        <Input type="text" placeholder="都道府県" autoComplete="address-level1" required />
      </FormControl>

      <FormControl id="addressLevel2" marginTop="4">
        <FormLabel>市区町村</FormLabel>
        <Input type="text" placeholder="市区町村" autoComplete="address-level2" required />
      </FormControl>

      <FormControl id="addressLine1" marginTop="4">
        <FormLabel>番地・マンション名</FormLabel>
        <Input type="text" placeholder="番地・マンション名" autoComplete="address-line1" required />
      </FormControl>
    </Box>
  </>
)
