export const getCharacters = async ({ name, status, gender }) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`
  )
  const { results } = await response.json()
  return results
}
