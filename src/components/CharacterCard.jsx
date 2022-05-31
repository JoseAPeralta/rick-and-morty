import { useState } from 'react'
import CharacterCardInfo from './CharacterCardInfo'
import CharacterCardPhoto from './CharacterCardPhoto'

const CharacterCard = (props) => {
  const [showInfo, setShowInfo] = useState(false)

  const handleCardClick = () => {
    setShowInfo(!showInfo)
    console.log(props)
  }

  return (
    <>
      {showInfo === false ? (
        <div
          onClick={handleCardClick}
          data-testid='character-card-photo-container'
        >
          <CharacterCardPhoto {...props}></CharacterCardPhoto>
        </div>
      ) : (
        <div onClick={handleCardClick}>
          <CharacterCardInfo {...props}></CharacterCardInfo>
        </div>
      )}
    </>
  )
}

export default CharacterCard
