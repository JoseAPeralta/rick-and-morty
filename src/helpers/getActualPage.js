const splitText = (text) => {
  try {
    const page = text.split('page=')[1].split('&')[0]
    return parseInt(page)
  } catch (error) {
    const page = 1
    return page
  }
}

export const getActualPage = (prev, next) => {
  const url = prev || next
  const actualPage = prev ? splitText(url) + 1 : splitText(url) - 1

  return actualPage
}
