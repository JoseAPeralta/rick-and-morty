import { describe, test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
const { axe, toHaveNoViolations } = require('jest-axe')
import CharacterCard from './CharacterCard'

expect.extend(toHaveNoViolations)

describe('Component CharacterCard', () => {
  const characterData = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  }

  test('Should render with name pass in a prop', () => {
    const characterName = 'Rick Sanchez'

    render(<CharacterCard name={characterName} />)
    const nameElement = screen.getByText(characterName)

    expect(nameElement).toBeDefined()
  })

  test('Should a placeholder alt if dont have image', () => {
    const characterName = 'Rick Sanchez'

    render(<CharacterCard name={characterName} />)

    const imgElement = screen.getByAltText(/image/)
    expect(imgElement.alt).toContain('placeholder')
  })

  test('Should accesible cardPhoto', async () => {
    const { container } = render(<CharacterCard {...characterData} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  test('Should accesible cardInfo', async () => {
    const { container } = render(<CharacterCard {...characterData} />)
    const cardInfo = screen.getByTestId('character-card-photo-container')

    fireEvent.click(cardInfo)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  test('Should match to snapshot', () => {
    const characterName = 'Rick Sanchez'
    const characterImage =
      'https://rickandmortyapi.com/api/character/avatar/1.jpeg'

    const component = render(
      <CharacterCard name={characterName} image={characterImage} />
    )

    expect(component).toMatchSnapshot()
  })
})
