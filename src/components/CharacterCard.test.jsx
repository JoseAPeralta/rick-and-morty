import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
const { axe, toHaveNoViolations } = require('jest-axe')
import CharacterCard from './CharacterCard'

expect.extend(toHaveNoViolations)

describe('Component CharacterCard', () => {
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

  test('Should accesible', async () => {
    const { container } = render(<CharacterCard />)
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
