import { Center } from "@chakra-ui/react"
import { Heading, Flex, Box, Image, Text } from "@chakra-ui/react"

export default function Shop() {
  return (
    <>
    <Center h="100px">
      <Heading>rry's Shop</Heading>
    </Center>

    <Flex justify="center">
      <Box p="8" border="1px" borderColor="gray.200" borderRadius="lg">
        <Flex>
          <Image
            boxSize="400px"
            objectFit="cover"
            src="https://base-ec2if.akamaized.net/w=640,a=0,q=90,u=1/images/item/origin/28511b11b9f7fe5e06bb1d1d9329e5a8.jpg"
            alt="コザクラブローチ"
          />
          <Box p="16">
            <Text fontSize="lg">コザクラブローチ（テスト商品）</Text>
            <Flex align="baseline">
              <Text fontSize="2xl" fontWeight="bold">¥ 500</Text>
              <Text></Text>
              <Text fontSize="xs" color="gray.500" paddingLeft="1rem">税込</Text>
            </Flex>

            <Text fontSize="1rem">コザクラインコの形をした刺繍ブローチです。</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
    </>
  )
}
