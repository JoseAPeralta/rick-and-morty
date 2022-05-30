import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
const { axe, toHaveNoViolations } = require('jest-axe')
import Header from './Header'

expect.extend(toHaveNoViolations)

describe('Component Footer', () => {
  test('Should accesible', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  test('Should match to snapshot', () => {
    const component = render(<Header />)

    expect(component).toMatchSnapshot()
  })
})
