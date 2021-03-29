import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
]

const options = [
  {
    label: 'The Colour Red',
    value: 'red',
  },
  {
    label: 'The Colour Green',
    value: 'green',
  },
  {
    label: 'The Colour Blue',
    value: 'blue',
  },
]

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  )
}

export default App
