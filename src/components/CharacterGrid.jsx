import { Flex, Box, Text, Spinner, Center } from '@chakra-ui/react'
import CharacterCard from './CharacterCard'
import Pagination from './Pagination'
import { useFetchCharacter } from '../hooks/useFetchCharacter'

const CharacterGrid = ({ setCharacter, character }) => {
  const { characters, loading } = useFetchCharacter(character)
  return (
    <section>
      {loading ? (
        <div data-testid='loading-component' loading>
          <Center>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='green'
              size='xl'
            />
          </Center>
          <Center p='3'> Loading...</Center>
        </div>
      ) : characters.results ? (
        <>
          <Flex
            data-testid='character-grid-component'
            as='ul'
            listStyleType='none'
            gap='6'
            flexWrap='wrap'
            justify='center'
          >
            {characters.results.map((character, index) => (
              <Box as='li' key={index} w={{ base: '250px', sm: '300px' }}>
                <CharacterCard {...character}></CharacterCard>
              </Box>
            ))}
          </Flex>
          <Center mt='8'>
            <Pagination
              {...characters.info}
              setCharacter={setCharacter}
            ></Pagination>
          </Center>
        </>
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
