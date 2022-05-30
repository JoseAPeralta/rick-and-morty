import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
const { axe, toHaveNoViolations } = require('jest-axe')
import Footer from './Footer'

expect.extend(toHaveNoViolations)

describe('Component Footer', () => {
  test('Should accesible', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  test('Should match to snapshot', () => {
    const component = render(<Footer />)

    expect(component).toMatchSnapshot()
  })
})
