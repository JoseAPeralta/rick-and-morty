import { describe, test, expect } from 'vitest'
import { getActualPage } from './getActualPage'

describe('getActualPage test', () => {
  test('should get actual page when preview is null', async () => {
    const actualPage = 1
    const prev = null
    const next = `https://rickandmortyapi.com/api/character/?page=2`

    expect(getActualPage(prev, next)).toBe(actualPage)
  })

  test('should get actual page when next is null', async () => {
    const actualPage = 8
    const prev = `https://rickandmortyapi.com/api/character/?page=7`
    const next = null

    expect(getActualPage(prev, next)).toBe(actualPage)
  })

  test('should get actual page when have next and preview page', async () => {
    const actualPage = 21
    const prev = `https://rickandmortyapi.com/api/character/?page=20`
    const next = `https://rickandmortyapi.com/api/character/?page=22`

    expect(getActualPage(prev, next)).toBe(actualPage)
  })

  test('should get actual page when have different url format', async () => {
    const actualPage = 2
    const prev = `"https://rickandmortyapi.com/api/character/?name=rick&page=1&status=alive&gender=male"`
    const next = `"https://rickandmortyapi.com/api/character/?name=rick&page=3&status=alive&gender=male"`

    expect(getActualPage(prev, next)).toBe(actualPage)
  })
})
