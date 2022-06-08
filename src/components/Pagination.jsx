import { Button, ButtonGroup } from '@chakra-ui/react'
import { getActualPage } from '../helpers/getActualPage'

const Pagination = ({ character, setCharacter, next, pages, prev }) => {
  const actualPage = getActualPage(prev, next)

  const calculateFirstNumber = (actualPage) => {
    let firstButton = 0

    if (next) {
      firstButton = actualPage < 2 ? actualPage : actualPage - 1
    } else {
      firstButton = actualPage - 3
    }

    return firstButton
  }

  const makePaginationButtons = () => {
    const firstPaginationButton = calculateFirstNumber(actualPage)
    const renderCount = firstPaginationButton + 4
    let buttonGroup = []

    for (let index = firstPaginationButton; index < renderCount; index++) {
      if (index <= pages) {
        const button = (
          <Button
            key={`pagination${index}`}
            colorScheme='green'
            value={index}
            onClick={handleButtonClick}
            disabled={index === actualPage ? true : false}
          >{`${index}`}</Button>
        )
        buttonGroup.push(button)
      }
    }
    return buttonGroup
  }

  const handleButtonClick = (e) => {
    const page = e.target.value
    setCharacter({ ...character, page })
  }

  return (
    <>
      {pages > 1 ? (
        <ButtonGroup variant='link' spacing='0'>
          <Button
            colorScheme='green'
            value={actualPage - 1}
            disabled={prev ? false : true}
            onClick={handleButtonClick}
          >
            Prev
          </Button>
          {makePaginationButtons()}
          <Button
            colorScheme='green'
            value={actualPage + 1}
            disabled={next ? false : true}
            onClick={handleButtonClick}
          >
            Next
          </Button>
        </ButtonGroup>
      ) : null}
    </>
  )
}

export default Pagination
