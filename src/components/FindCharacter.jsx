import { useState } from 'react'
import {
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Button,
  Center,
  Container,
} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'

const FindCharacter = ({ setCharacter }) => {
  const [characterToFind, setCharacterToFind] = useState({
    name: '',
    status: '',
    gender: '',
    page: 1,
  })

  const handleInputChange = (e) => {
    const property = e.target.name
    const value = e.target.value
    setCharacterToFind({ ...characterToFind, [property]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCharacter(characterToFind)
  }

  return (
    <>
      <Container
        as='form'
        role='search'
        w='100%'
        maxW='1000'
        onSubmit={handleSubmit}
      >
        <InputGroup>
          <Input
            type='text'
            placeholder='Rick Sanchez'
            name='name'
            value={characterToFind.name}
            onChange={handleInputChange}
          />
          <InputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={<Icon fontSize='2xl' as={AiOutlineSearch}></Icon>}
          />
        </InputGroup>
        <InputGroup>
          <Select
            variant='flushed'
            placeholder='Status'
            p='2'
            name='status'
            aria-label='status'
            onChange={handleInputChange}
          >
            <option value=''>all</option>
            <option value='alive'>alive</option>
            <option value='dead'>dead</option>
            <option value='unknown'>unknown</option>
          </Select>
          <Select
            variant='flushed'
            placeholder='gender'
            p='2'
            name='gender'
            aria-label='gender'
            onChange={handleInputChange}
          >
            <option value=''>all</option>
            <option value='female'>female</option>
            <option value='male'>male</option>
            <option value='genderless'>genderless</option>
            <option value='unknown'>unknown</option>
          </Select>
        </InputGroup>
        <Center mt='2'>
          <Button type='submit' colorScheme='green'>
            Search
          </Button>
        </Center>
      </Container>
    </>
  )
}

export default FindCharacter
