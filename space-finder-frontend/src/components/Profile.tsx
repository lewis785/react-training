import React from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { Link } from 'react-router-dom'
import { User, UserAttribute } from '../model/Model'
import { AuthService } from '../services/AuthService'

interface ProfileState {
  userAttributes: UserAttribute[]
}
interface ProfileProps {
  user: User | undefined
  authService: AuthService
}

class Profile extends React.Component<ProfileProps, ProfileState> {
  state: ProfileState = {
    userAttributes: [],
  }

  async componentDidMount() {
    if (this.props.user) {
      const userAtrs = await this.props.authService.getUserAttributes(
        this.props.user,
      )
      this.setState({
        userAttributes: userAtrs,
      })
    }
  }

  private renderUserAttributes() {
    const rows: JSX.Element[] = []
    this.state.userAttributes.forEach((attribute: UserAttribute) => {
      rows.push(
        <tr key={attribute.name}>
          <td>{attribute.name}</td>
          <td>{attribute.value}</td>
        </tr>,
      )
    })
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    )
  }

  render() {
    if (this.props.user === undefined) {
      return (
        <div>
          Please <Link to="/login">Login</Link>
        </div>
      )
    }

    return (
      <div>
        <h3> Hello {this.props.user.userName}</h3>
        Here are your attributes <br />
        {this.renderUserAttributes()}
      </div>
    )
  }
}

export default Profile
