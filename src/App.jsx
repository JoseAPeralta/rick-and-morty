import { Flex, Divider, Spacer } from '@chakra-ui/react'

import Header from './components/Header'
import Footer from './components/Footer'
import FindCharacter from './components/FindCharacter'
import CharacterGrid from './components/CharacterGrid'

const App = () => {
  return (
    <Flex minH='100vh' direction='column'>
      <Header />
      <Flex
        as='main'
        bg='brand.700'
        m='8'
        direction='column'
        gap='8'
        justifyContent='center'
        alignItems='center'
      >
        <FindCharacter></FindCharacter>
        <Divider></Divider>
        <CharacterGrid></CharacterGrid>
      </Flex>
      <Spacer></Spacer>
      <Footer alignSelf='flex-end' />
    </Flex>
  )
}

export default App
