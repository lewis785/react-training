import React, { SyntheticEvent } from 'react'
import { User } from '../model/Model'
import { AuthService } from '../services/AuthService'
import history from '../utils/history'

interface LoginProps {
  authService: AuthService
  onLoginSuccess: (user: User) => void
}

interface LoginState {
  userName: string
  password: string
  loginAttempted: boolean
  loginSuccessful: boolean
}

interface CustomEvent {
  target: HTMLInputElement
}

class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: '',
    password: '',
    loginAttempted: false,
    loginSuccessful: false,
  }

  private onUserNameChange(event: CustomEvent) {
    this.setState({ userName: event.target.value })
  }

  private onPasswordChange(event: CustomEvent) {
    this.setState({ password: event.target.value })
  }

  private async onFormSubmit(event: SyntheticEvent) {
    event.preventDefault()
    this.setState({ loginAttempted: true })
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password,
    )
    if (result) {
      this.setState({ loginSuccessful: true })
      this.props.onLoginSuccess(result)
      history.push('/profile')
    } else {
      this.setState({ loginSuccessful: false })
      console.log('wrong login')
    }
  }

  private renderLoginMessage(): JSX.Element | null {
    if (this.state.loginAttempted) {
      if (this.state.loginSuccessful) {
        return <label>Login successful</label>
      } else {
        return <label>Login failed</label>
      }
    }
    return null
  }

  render() {
    return (
      <div>
        <h2>Please Login</h2>
        <form onSubmit={(event) => this.onFormSubmit(event)}>
          <input
            value={this.state.userName}
            onChange={(event) => this.onUserNameChange(event)}
          />
          <br />
          <input
            value={this.state.password}
            type="password"
            onChange={(event) => this.onPasswordChange(event)}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
        {this.renderLoginMessage()}
      </div>
    )
  }
}

export default Login
