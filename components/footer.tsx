import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Center, Link } from '@chakra-ui/react'
import { FC } from 'react'

export const Footer: FC = () => (
  <Center h="100px">
    <Link href="https://github.com/ryamakuchi/xstate-playground" isExternal>
      ryamakuchi/xstate-playground <ExternalLinkIcon mx="2px" />
    </Link>
  </Center>
)
