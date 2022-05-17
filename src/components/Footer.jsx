import { Text, Icon, Link, Flex } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <Flex
      as='footer'
      bg='gray.900'
      color='gray.100'
      height='200'
      direction='column'
      alignItems='center'
      justifyContent='center'
      gap='3'
    >
      <Text fontSize='2xl'>
        Created by{' '}
        <Link href='https://jperalta.dev/' isExternal>
          <em>Jose Peralta</em>
        </Link>
      </Text>
      <Link href='https://github.com/JoseAPeralta/' isExternal>
        <Icon fontSize='5xl' as={AiFillGithub}></Icon>
      </Link>
    </Flex>
  )
}

export default Footer
