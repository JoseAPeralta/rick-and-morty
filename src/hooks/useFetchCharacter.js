import { useState, useEffect } from 'react'
import { getCharacters } from '../helpers/getCharacters'

export const useFetchCharacter = (character) => {
  const [state, setState] = useState({
    characters: {},
    loading: true,
  })

  useEffect(() => {
    getCharacters(character).then((data) => {
      setState({
        characters: data,
        loading: false,
      })
    })
  }, [character])
  return state
}
