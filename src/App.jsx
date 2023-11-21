import React, { useState } from 'react'
import './index.css'
function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme((document.body.className = 'dark'))
    } else {
      setTheme((document.body.className = 'light'))
    }
  }
  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}{' '}
      </button>
      <h1>Hello, world!</h1>
    </div>
  )
}
export default App
