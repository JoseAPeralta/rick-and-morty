import { Flex, Box, Text } from '@chakra-ui/react'
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
        <Flex
          data-testid='character-grid-component'
          as='ul'
          listStyleType='none'
          gap='6'
          flexWrap='wrap'
          justify='center'
        >
          {characters.map((character, index) => (
            <Box as='li' key={index} w={{ base: '250px', sm: '300px' }}>
              <CharacterCard {...character}></CharacterCard>
            </Box>
          ))}
        </Flex>
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
