import { Image, Box, Center } from '@chakra-ui/react'
import imgPlaceHolder from '../images/cardPlaceholder.jpg'

const CharacterCard = ({ name, image }) => {
  return (
    <Box borderWidth='2px' borderColor='gray.900' maxWidth='300' bg='tomato'>
      <Image src={image || imgPlaceHolder} alt='rick' width='100%'></Image>
      <Center as='p' bg='gray.900' color='gray.100' p='2'>
        {name}
      </Center>
    </Box>
  )
}

export default CharacterCard
