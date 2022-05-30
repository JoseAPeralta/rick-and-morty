import { describe, test, expect } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
const { axe, toHaveNoViolations } = require('jest-axe')
import FindCharacter from './FindCharacter'

expect.extend(toHaveNoViolations)

describe('Component FindCharacter', () => {
  test('Should change input value', () => {
    const { container } = render(<FindCharacter />)
    const input = container.querySelector('[name="name"]')
    const inputInitValue = input.value

    fireEvent.change(input, { target: { value: 'beth' } })

    expect(input.value).not.toBe(inputInitValue)
  })

  test('Should change select status value', () => {
    const { container } = render(<FindCharacter />)
    const select = container.querySelector('[name="status"]')
    const selectInitValue = select.value

    fireEvent.change(select, { target: { value: 'alive' } })

    expect(select.value).not.toBe(selectInitValue)
  })

  test('Should change select gender value', () => {
    const { container } = render(<FindCharacter />)
    const select = container.querySelector('[name="gender"]')
    const selectInitValue = select.value

    fireEvent.change(select, { target: { value: 'female' } })

    expect(select.value).not.toBe(selectInitValue)
  })

  test('Should accesible', async () => {
    const { container } = render(<FindCharacter />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  test('Should match to snapshot', () => {
    const component = render(<FindCharacter />)

    expect(component).toMatchSnapshot()
  })
})
