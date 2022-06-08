import { Image, Box, Center } from '@chakra-ui/react'

import imagePlaceholder from '../images/cardPlaceholder.jpg'
import 'animate.css'
const CharacterCardPhoto = ({ name, image }) => {
  return (
    <>
      <Box
        cursor='pointer'
        borderWidth='2px'
        borderColor='gray.900'
        bg='gray.900'
        color='gray.100'
        className='animate__animated animate__flipInY'
      >
        <Image
          src={image || imagePlaceholder}
          alt={image ? `image of ${name}` : 'image placeholder'}
          width='100%'
          height='296px'
        ></Image>
        <Center as='h2' p='2'>
          {name}
        </Center>
      </Box>
    </>
  )
}

export default CharacterCardPhoto
