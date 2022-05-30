import axios from 'axios'

export const getCharacters = async ({
  name = '',
  status = '',
  gender = '',
}) => {
  const url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`

  try {
    const response = await axios.get(url)
    const { results } = response.data
    return results
  } catch (error) {
    const results = false
    return results
  }
}
