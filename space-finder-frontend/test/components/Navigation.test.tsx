import ReactDOM from 'react-dom'
import Navigation from '../../src/components/Navigation'
import { User } from '../../src/model/Model'
import { StaticRouter } from 'react-router'
import { getByTestId } from '@testing-library/react'

describe('Navigation test suite', () => {
  const baseUrl = 'http://localhost'
  let container: HTMLDivElement
  const user: User = {
    email: 'test@test.com',
    userName: 'someUser',
  }

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('renders correctly with user', () => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(
      <StaticRouter>
        <Navigation user={user} />
      </StaticRouter>,
      container,
    )

    const homeLink = getByTestId(container, 'home-link') as HTMLAnchorElement
    expect(homeLink.href).toBe(`${baseUrl}/`)

    const profileLink = getByTestId(
      container,
      'profile-link',
    ) as HTMLAnchorElement
    expect(profileLink.href).toBe(`${baseUrl}/profile`)

    const spacesLink = getByTestId(
      container,
      'spaces-link',
    ) as HTMLAnchorElement
    expect(spacesLink.href).toBe(`${baseUrl}/spaces`)
  })

  it('renders correctly without user', () => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(
      <StaticRouter>
        <Navigation user={undefined} />
      </StaticRouter>,
      container,
    )

    const loginLink = getByTestId(container, 'login-link') as HTMLAnchorElement
    expect(loginLink.href).toBe(`${baseUrl}/login`)
  })
})
