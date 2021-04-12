import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColourContext from '../contexts/ColourContext'

class App extends React.Component {
  state = { language: 'english', colour: 'red' }

  onLanguageChange = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag uk"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          />
        </div>
        <ColourContext.Provider value={this.state.colour}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColourContext.Provider>
      </div>
    )
  }
}

export default App
