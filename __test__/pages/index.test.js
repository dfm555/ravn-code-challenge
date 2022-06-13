import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from 'pages/index'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: ''
    }
  }
}))

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Should render the page with a message', async () => {
    await act(async () => await render(<Home />))
    const message = screen.getByText(/characters of rick and morty/i, {})
    expect(message).toBeInTheDocument()
  })
})
