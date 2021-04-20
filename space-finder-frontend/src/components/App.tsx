import React from 'react'
import { User } from '../model/Model'
import { AuthService } from '../services/AuthService'
import Navigation from './Navigation'
import Login from './Login'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../utils/history'
import Home from './Home'
import Profile from './Profile'
import Spaces from './spaces/Spaces'
import DataService from '../services/DataService'

interface AppState {
  user: User | undefined
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    user: undefined,
  }

  private authService: AuthService = new AuthService()
  private dataService: DataService = new DataService()

  private onLoginSuccess = (user: User) => {
    this.setState({ user: user })
    console.log(this.state)
  }

  render() {
    return (
      <div className="wrapper">
        <Router history={history}>
          <div>
            <Navigation user={this.state.user} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login">
                <Login
                  authService={this.authService}
                  onLoginSuccess={this.onLoginSuccess}
                />
              </Route>
              <Route exact path="/profile">
                <Profile
                  authService={this.authService}
                  user={this.state.user}
                />
              </Route>
              <Route exact path="/spaces">
                <Spaces dataService={this.dataService} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
