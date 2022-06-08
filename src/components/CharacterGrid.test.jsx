import { describe, test, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import CharacterGrid from './CharacterGrid'
const { axe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations)

describe('Component CharacterGrid', () => {
  test('Should render loading message during the loading', () => {
    const character = { name: '', status: '', gender: '' }

    render(<CharacterGrid character={character} />)
    const loadingComponent = screen.getByTestId('loading-component')

    expect(loadingComponent).toBeDefined()
  })

  test('Should render a message when no find character', async () => {
    const character = { name: 'no exist character', status: '', gender: '' }

    render(<CharacterGrid character={character} />)

    await waitFor(() => {
      const noCharacterComponent = screen.getByTestId('no-character-component')
      expect(noCharacterComponent).toBeDefined()
    })
  })

  test('Should render the character(s) when downloading the data', async () => {
    const character = { name: 'alien morty', status: '', gender: '' }

    render(<CharacterGrid character={character} />)

    await waitFor(() => {
      const characterGridComponent = screen.getByTestId(
        'character-grid-component'
      )

      expect(characterGridComponent.children.length).toBeGreaterThanOrEqual(1)
    })
  })

  test('Should accesible', async () => {
    const character = { name: '', status: '', gender: '' }

    const { container } = render(<CharacterGrid character={character} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  test('Should match to snapshot', async () => {
    const character = { name: '', status: '', gender: '' }

    const component = render(<CharacterGrid character={character} />)

    expect(component).toMatchSnapshot()
  })
})
