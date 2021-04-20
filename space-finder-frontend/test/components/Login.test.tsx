import Login from '../../src/components/Login'
import ReactDOM from 'react-dom'
import { fireEvent, waitFor } from '@testing-library/react'
import { User } from '../../src/model/Model'
import history from '../../src/utils/history'

const someUser: User = {
  userName: 'someUser',
  email: 'someEmail',
}

describe('Login component test suite', () => {
  let container: HTMLDivElement

  const authServiceMock = {
    login: jest.fn(),
  }

  const onLoginSuccessMock = jest.fn()

  const historyMock = history
  history.push = jest.fn()

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(
      <Login
        authService={authServiceMock as any}
        onLoginSuccess={onLoginSuccessMock}
      />,
      container,
    )
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
    jest.clearAllMocks()
  })

  it('Renders correctly initial document', () => {
    const title = document.querySelector('h2')
    expect(title!.textContent).toBe('Please Login')

    const inputs = document.querySelectorAll('input')
    expect(inputs).toHaveLength(3)
    expect(inputs[0].value).toBe('')
    expect(inputs[1].value).toBe('')
    expect(inputs[2].value).toBe('Login')

    const label = document.querySelector('label')
    expect(label).not.toBeInTheDocument()
  })

  it('Passes credentials correctly', () => {
    const inputs = document.querySelectorAll('input')
    const loginInput = inputs[0]
    const passwordInput = inputs[1]
    const submitButton = inputs[2]

    fireEvent.change(loginInput, { target: { value: 'someUser' } })
    fireEvent.change(passwordInput, { target: { value: 'somePassword' } })
    fireEvent.click(submitButton)

    expect(authServiceMock.login).toBeCalledWith('someUser', 'somePassword')
  })

  it('Correctly handles login success', async () => {
    authServiceMock.login.mockResolvedValueOnce(someUser)
    const inputs = document.querySelectorAll('input')
    const loginInput = inputs[0]
    const passwordInput = inputs[1]
    const submitButton = inputs[2]

    fireEvent.change(loginInput, { target: { value: 'someUser' } })
    fireEvent.change(passwordInput, { target: { value: 'somePassword' } })
    fireEvent.click(submitButton)

    const statusLabel = await waitFor(() => container.querySelector('label'))
    expect(statusLabel).toBeInTheDocument()
    expect(statusLabel).toHaveTextContent('Login successful')
    expect(onLoginSuccessMock).toBeCalledWith(someUser)
    expect(historyMock.push).toBeCalledWith('/profile')
  })

  it('Correctly handles login fail', async () => {
    authServiceMock.login.mockResolvedValueOnce(undefined)
    const inputs = document.querySelectorAll('input')
    const loginInput = inputs[0]
    const passwordInput = inputs[1]
    const submitButton = inputs[2]

    fireEvent.change(loginInput, { target: { value: 'someUser' } })
    fireEvent.change(passwordInput, { target: { value: 'somePassword' } })
    fireEvent.click(submitButton)

    const statusLabel = await waitFor(() => container.querySelector('label'))
    expect(statusLabel).toBeInTheDocument()
    expect(statusLabel).toHaveTextContent('Login failed')
    expect(onLoginSuccessMock).not.toBeCalled()
    expect(historyMock.push).not.toBeCalled()
  })
})
