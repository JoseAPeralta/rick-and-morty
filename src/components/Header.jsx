import { Image, Flex } from '@chakra-ui/react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header>
      <Flex
        bg='gray.900'
        height={[20, 100, 150]}
        justifyContent='center'
        alignItems='alignItems'
      >
        <Image src={logo} alt='Rick and Morty logo' m='2' />
      </Flex>
    </header>
  )
}

export default Header
