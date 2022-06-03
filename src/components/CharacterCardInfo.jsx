import {
  Box,
  Center,
  Divider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { BiPulse, BiCurrentLocation, BiGridSmall } from 'react-icons/bi'
import { RiAliensLine } from 'react-icons/ri'
import { BsGenderFemale, BsGenderMale, BsGenderAmbiguous } from 'react-icons/bs'
import { FaGenderless } from 'react-icons/fa'
import { GiNewBorn } from 'react-icons/gi'
import 'animate.css'
const CharacterCardInfo = ({
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
}) => {
  return (
    <>
      <Box
        cursor='pointer'
        p='3'
        bg='gray.900'
        color='gray.100'
        className='animate__animated animate__flipInY'
        minHeight='300px'
        h='100%'
      >
        <Center as='h2' fontSize='xl'>
          {name}
        </Center>
        <Divider></Divider>
        <List pt='2'>
          <ListItem>
            <ListIcon as={BiPulse}></ListIcon>
            {status}
          </ListItem>
          <ListItem>
            <ListIcon as={RiAliensLine}></ListIcon>
            {species}
          </ListItem>
          {type ? (
            <ListItem>
              <ListIcon as={BiGridSmall}></ListIcon>
              {type}
            </ListItem>
          ) : null}
          <ListItem>
            {gender == 'Male' ? (
              <ListIcon as={BsGenderMale}></ListIcon>
            ) : gender == 'Female' ? (
              <ListIcon as={BsGenderFemale}></ListIcon>
            ) : gender == 'Genderless' ? (
              <ListIcon as={BsGenderAmbiguous}></ListIcon>
            ) : (
              <ListIcon as={FaGenderless}></ListIcon>
            )}
            {gender}
          </ListItem>
          <ListItem>
            <ListIcon as={GiNewBorn}></ListIcon>
            {origin.name}
          </ListItem>
          <ListItem>
            <ListIcon as={BiCurrentLocation}></ListIcon>
            {location.name}
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export default CharacterCardInfo
