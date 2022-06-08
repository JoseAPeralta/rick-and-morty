import { describe, test, expect, vi } from 'vitest'
import { fireEvent, render, screen, prettyDOM } from '@testing-library/react'
const { axe, toHaveNoViolations } = require('jest-axe')
import Pagination from './Pagination'

expect.extend(toHaveNoViolations)
/**
 ** Should render only when have pages
 ** Should render only necessary numbers
 ** Should the first page the first number must be one
 ** Should the first number is smaller than the current page
 ** Should 'prev' text is disabled when you are on the first page
 ** Should 'next' text is disabled when you are on the last page
 * Should click in button change the page state
 ** Should accesible
 ** Should match to snapshot
 */
describe('Component Pagination', () => {
  test('Should render only when have more that one page', () => {
    const info = {
      pages: 2,
      next: 'https://rickandmortyapi.com/api/character/?page=2',
      prev: null,
    }
    const { container } = render(<Pagination {...info} />)
    expect(container.children.length).toBeGreaterThanOrEqual(1)
  })

  test('Should not render when have one or less page', () => {
    const info = {
      pages: 1,
      next: null,
      prev: null,
    }
    const { container } = render(<Pagination {...info} />)
    expect(container.children.length).toBeLessThan(1)
  })

  test('Should no render more that 4 numbers ', () => {
    /**
     * max numbers to print is 4, more "prev" and "next" button,
     * total 6 buttons to print.
     * si solo tiene tiene 2 paginas, imprimir solo dos paginas
     * Si solo tiene 3 paginas, imprimir solo 3 paginas
     */
    const info = {
      pages: 10,
      next: 'https://rickandmortyapi.com/api/character/?page=4',
      prev: 'https://rickandmortyapi.com/api/character/?page=2',
    }
    const { container } = render(<Pagination {...info} />)
    const buttons = container.querySelectorAll('[type="button"]')
    expect(buttons.length).toEqual(6)
  })

  test('Should not render number of more', () => {
    const info = {
      pages: 4,
      next: 'https://rickandmortyapi.com/api/character/?page=2',
      prev: null,
    }
    const { container } = render(<Pagination {...info} />)
    const buttons = container.querySelectorAll('[type="button"]')

    expect(buttons.length).toEqual(info.pages + 2)
  })

  test('Should the first page the first number must be one', () => {
    const info = {
      pages: 4,
      next: 'https://rickandmortyapi.com/api/character/?page=2',
      prev: null,
    }
    const { container } = render(<Pagination {...info} />)
    const buttons = container.querySelectorAll('[type="button"]')
    const firstNumberButton = buttons.item(1)

    expect(parseInt(firstNumberButton.value)).toEqual(1)
  })

  test('Should the first number is smaller than the current page', () => {
    const info = {
      pages: 6,
      next: 'https://rickandmortyapi.com/api/character/?page=6',
      prev: 'https://rickandmortyapi.com/api/character/?page=4',
    }
    const currentPage = 5
    const { container } = render(<Pagination {...info} />)
    const buttons = container.querySelectorAll('[type="button"]')
    const firstNumberButton = buttons.item(1)

    expect(parseInt(firstNumberButton.value)).toBeLessThan(currentPage)
  })

  test('Should "prev" text is disabled when you are on the first page', () => {
    const info = {
      pages: 2,
      next: 'https://rickandmortyapi.com/api/character/?page=2',
      prev: null,
    }

    render(<Pagination {...info} />)
    const prevButton = screen.getByText(/Prev/)
    const isDisable = prevButton.hasAttribute('disabled')

    expect(isDisable).toBe(true)
  })

  test('Should "next" text is disabled when you are on the last page', () => {
    const info = {
      pages: 2,
      next: null,
      prev: 'https://rickandmortyapi.com/api/character/?page=1',
    }

    render(<Pagination {...info} />)
    const nextButton = screen.getByText(/Next/)
    const isDisable = nextButton.hasAttribute('disabled')

    expect(isDisable).toBe(true)
  })

  test('Should "click" in button change the page state', () => {
    let info = {
      pages: 5,
      next: 'https://rickandmortyapi.com/api/character/?page=3',
      prev: 'https://rickandmortyapi.com/api/character/?page=1',
    }
    const setCharacter = vi.fn().mockImplementation(
      () =>
        (info = {
          pages: 5,
          next: 'https://rickandmortyapi.com/api/character/?page=4',
          prev: 'https://rickandmortyapi.com/api/character/?page=2',
        })
    )
    const { rerender } = render(
      <Pagination {...info} setCharacter={setCharacter} />
    )
    const nextButton = screen.getByText(/Next/)

    expect(parseInt(nextButton.value)).toEqual(3)

    fireEvent.click(nextButton)
    rerender(<Pagination {...info} setCharacter={setCharacter} />)

    expect(parseInt(nextButton.value)).toEqual(4)
  })

  test('Should accesible', async () => {
    const info = {
      pages: 3,
      next: 'https://rickandmortyapi.com/api/character/?page=3',
      prev: 'https://rickandmortyapi.com/api/character/?page=1',
    }
    const { container } = render(<Pagination {...info} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  test('Should match to snapshot', () => {
    const info = {
      pages: 3,
      next: 'https://rickandmortyapi.com/api/character/?page=3',
      prev: 'https://rickandmortyapi.com/api/character/?page=1',
    }
    const component = render(<Pagination {...info} />)
    expect(component).toMatchSnapshot()
  })
})
