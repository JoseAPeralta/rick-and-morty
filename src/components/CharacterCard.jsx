import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import CharacterCardInfo from './CharacterCardInfo'
import CharacterCardPhoto from './CharacterCardPhoto'

const CharacterCard = (props) => {
  const [showInfo, setShowInfo] = useState(false)

  const handleCardClick = () => {
    setShowInfo(!showInfo)
  }

  return (
    <>
      {showInfo === false ? (
        <Box
          onClick={handleCardClick}
          data-testid='character-card-photo-container'
          h='100%'
        >
          <CharacterCardPhoto {...props}></CharacterCardPhoto>
        </Box>
      ) : (
        <Box onClick={handleCardClick} h='100%'>
          <CharacterCardInfo {...props}></CharacterCardInfo>
        </Box>
      )}
    </>
  )
}

export default CharacterCard
