import { WarningIcon } from '@chakra-ui/icons'
import { Heading, Flex, Stack, Box, Center, Image, Text, Button } from '@chakra-ui/react'
import { FC } from 'react'

export interface ShopProps {
  onClick: () => void
}

export const ShopPage: FC<ShopProps> = ({ onClick: handleClick }) => (
  <>
    <Flex justify="center">
      <Box p={{ sm: '0', md: '8' }} m="4" border="1px" borderColor="gray.200" borderRadius="lg">
        <Flex direction={{ base: 'column', md: 'row' }} align="center">
          <Image
            boxSize={{ base: '90%', md: 'md' }}
            objectFit="cover"
            m={{ base: '5%', md: '0' }}
            src="https://base-ec2if.akamaized.net/w=640,a=0,q=90,u=1/images/item/origin/28511b11b9f7fe5e06bb1d1d9329e5a8.jpg"
            alt="コザクラブローチ"
          />
          <Box p={{ base: '5%', md: '8' }} span="3">
            <Stack spacing="4">
              <Text fontSize="lg">コザクラブローチ（テスト商品）</Text>

              <Flex align="baseline">
                <Text fontSize="2xl" fontWeight="bold">
                  ¥ 500
                </Text>
                <Text fontSize="xs" color="gray.500" paddingLeft="1">
                  税込
                </Text>
              </Flex>

              <Flex border="1px" borderColor="red.500" borderRadius="md" align="center" justify="center" p="1">
                <WarningIcon color="red.500" />
                <Text fontSize="sm" color="red.500" paddingLeft="1">
                  デモのため実際に購入はできません
                </Text>
              </Flex>

              <Text fontSize="1rem">コザクラインコの形をした刺繍ブローチです。</Text>

              <Button colorScheme="teal" size="lg" onClick={handleClick}>
                カートに入れる
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </>
)
