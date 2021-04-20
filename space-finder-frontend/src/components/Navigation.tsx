import React from 'react'
import { User } from '../model/Model'
import { Link } from 'react-router-dom'

class Navigation extends React.Component<{ user: User | undefined }> {
  private renderLoginButton(): JSX.Element {
    if (this.props.user) {
      return (
        <Link to="/logout" style={{ float: 'right' }}>
          {this.props.user.userName}
        </Link>
      )
    }
    return (
      <Link to="/login" data-testid="login-link" style={{ float: 'right' }}>
        Login
      </Link>
    )
  }

  render() {
    return (
      <div className="navbar">
        <Link data-testid="home-link" to="/">
          Home
        </Link>
        <Link data-testid="profile-link" to="/profile">
          Profile
        </Link>
        <Link data-testid="spaces-link" to="/spaces">
          Spaces
        </Link>
        {this.renderLoginButton()}
      </div>
    )
  }
}

export default Navigation
