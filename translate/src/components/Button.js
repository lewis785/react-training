import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColourContext from '../contexts/ColourContext'

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton(colour) {
    return (
      <button className={`ui button ${colour}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColourContext.Consumer>
        {(colour) => this.renderButton(colour)}
      </ColourContext.Consumer>
    )
  }
}

export default Button
