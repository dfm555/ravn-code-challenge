import React, {
  useState as useStateMock,
  useEffect as useEffectMock
} from 'react'

import useMediaQuery from 'hooks/useMediaQuery'

const resizeWindow = (x, y) => {
  window.innerWidth = x
  window.innerHeight = y
  window.dispatchEvent(new Event('resize'))
}

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useEffect: jest.fn()
}))

describe('hook/useMediaQuery', () => {
  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, jest.fn()])
    useEffectMock.mockImplementation(f => f())
  })
  test('evaluates media query', () => {
    const result = useMediaQuery('(min-width: 1024px)')
    expect(result).toBe(false)
  })
})
