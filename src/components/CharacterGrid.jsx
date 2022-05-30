import { Grid, GridItem, Text } from '@chakra-ui/react'
import CharacterCard from './CharacterCard'
import { useFetchCharacter } from '../hooks/useFetchCharacter'

const CharacterGrid = ({ character }) => {
  const { characters, loading } = useFetchCharacter(character)

  return (
    <section>
      {loading ? (
        <h1 data-testid='loading-component' loading>
          Loading...
        </h1>
      ) : characters ? (
        <Grid
          data-testid='character-grid-component'
          as='ul'
          listStyleType='none'
          templateColumns='repeat(4, 1fr)'
          gap={6}
        >
          {characters.map((character, index) => (
            <GridItem as='li' key={index}>
              <CharacterCard {...character}></CharacterCard>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text
          data-testid='no-character-component'
          color='gray.700'
          fontSize='1xl'
        >
          No characters with those characteristics were found.Try another.
        </Text>
      )}
    </section>
  )
}

export default CharacterGrid
