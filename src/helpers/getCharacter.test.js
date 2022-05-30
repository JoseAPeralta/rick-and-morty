import { describe, test, expect } from 'vitest'
import { getCharacters } from './getCharacters'

describe('getCharacter test', () => {
  test('should get character when dont have search items', async () => {
    const characters = await getCharacters({})

    expect(characters).not.toBeUndefined()
    expect(characters.length).toBeGreaterThan(1)
  })

  test('should be max of 20 characters', async () => {
    const characters = await getCharacters({})

    expect(characters.length).toBe(20)
  })

  test('should return false when no have results', async () => {
    const characters = await getCharacters({ name: 'Jose Ariel' })

    expect(characters).toBeFalsy()
  })
})
