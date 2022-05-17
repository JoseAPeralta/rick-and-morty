import { useState, useEffect } from 'react'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import CharacterCard from './CharacterCard'
import { getCharacters } from '../helpers/getCharacters'

const CharacterGrid = ({ character }) => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters(character).then(setCharacters)
  }, [character])

  return (
    <>
      {characters == undefined ? (
        <Text color='gray.700' fontSize='1xl'>
          No characters with those characteristics were found.Try another.
        </Text>
      ) : (
        <Grid as='section' templateColumns='repeat(4, 1fr)' gap={6}>
          {characters.map((character, index) => (
            <GridItem key={index}>
              <CharacterCard {...character}></CharacterCard>
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  )
}

export default CharacterGrid
