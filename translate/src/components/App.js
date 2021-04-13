import React from 'react'
import UserCreate from './UserCreate'
import LanguageSelector from './LanguageSelector'
import { LanguageStore } from '../contexts/LanguageContext'
import ColourContext from '../contexts/ColourContext'

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColourContext.Provider value="red">
            <UserCreate />
          </ColourContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}

export default App
