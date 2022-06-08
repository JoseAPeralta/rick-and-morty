import axios from 'axios'

export const getCharacters = async ({
  name = '',
  status = '',
  gender = '',
  page = '',
}) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}`

  try {
    const response = await axios.get(url)
    const data = response.data

    return data
  } catch (error) {
    const data = false
    return data
  }
}
