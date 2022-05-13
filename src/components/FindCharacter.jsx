import { useState } from 'react'
import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'

const FindCharacter = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
  }

  return (
    <InputGroup maxW='1000' as='form' onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Rick Sanchez'
        value={inputValue}
        onChange={handleInputChange}
      />
      <InputRightElement
        // eslint-disable-next-line react/no-children-prop
        children={<Icon fontSize='2xl' as={AiOutlineSearch}></Icon>}
      />
    </InputGroup>
  )
}

export default FindCharacter
