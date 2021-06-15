import { FC } from 'react'
import { Heading, Box, Flex, VStack, StackDivider, Center, Image, Text } from '@chakra-ui/react'

export const CartEditItem: FC = () => (
  <>
    <Box>
      <Heading as="h2" size="md">
        注文内容
      </Heading>

      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch" marginTop="4">
        <Flex w="100%">
          <Center w="50%">
            <Image
              boxSize="16"
              objectFit="cover"
              src="https://base-ec2if.akamaized.net/w=640,a=0,q=90,u=1/images/item/origin/28511b11b9f7fe5e06bb1d1d9329e5a8.jpg"
              alt="コザクラブローチ"
            />
          </Center>

          <Center w="50%">
            <Text fontWeight="bold">コザクラブローチ（テスト商品）</Text>
          </Center>
        </Flex>

        <Flex w="100%">
          <Box w="50%">
            <Text>数量</Text>
          </Box>
          <Box w="50%">
            <Text>1</Text>
          </Box>
        </Flex>

        <Flex w="100%">
          <Box w="50%">
            <Text>小計</Text>
          </Box>
          <Box w="50%">
            <Text>¥ 500</Text>
          </Box>
        </Flex>

        <Flex w="100%">
          <Box w="50%">
            <Text>送料</Text>
          </Box>
          <Box w="50%">
            <Text>¥ 0</Text>
          </Box>
        </Flex>

        <Flex w="100%" direction="row-reverse">
          <Text fontSize="2xl" fontWeight="bold">
            ¥ 500
          </Text>
          <Text fontSize="2xl">合計：</Text>
        </Flex>
      </VStack>
    </Box>
  </>
)
