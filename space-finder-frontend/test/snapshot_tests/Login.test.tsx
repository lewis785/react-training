import Login from '../../src/components/Login'
import { create } from 'react-test-renderer'

describe('Login component snapshot testing', () => {
  it('initial test', () => {
    const snap = create(
      <Login authService={{} as any} onLoginSuccess={{} as any} />,
    )
    expect(snap).toMatchSnapshot()
  })
})
