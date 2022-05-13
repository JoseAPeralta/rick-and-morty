import { useState, useEffect } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import CharacterCard from './CharacterCard'

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const { results } = await response.json()

    setCharacters(results)
  }

  return (
    <Grid as='section' templateColumns='repeat(4, 1fr)' gap={6}>
      {characters.map((character, index) => (
        <GridItem key={index}>
          <CharacterCard {...character}></CharacterCard>
        </GridItem>
      ))}
    </Grid>
  )
}

export default CharacterGrid
