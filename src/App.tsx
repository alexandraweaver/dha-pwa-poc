/* Copyright Header Placeholder */
/* Name: App.tsx
 * Description: App component for homepage
 * Author: Created by Alex Alden Weaver on 6-11-2024 from template
 * Last modified: 6-11-2024 by Alex Alden Weaver
*/

import './App.scss'
import githubLogo from './assets/github.svg'
import reactLogo from './assets/react.svg'
import sassLogo from './assets/sass.svg'
import viteLogo from './assets/vite.svg'

function App() {
  return (
    <div className="App">

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://sass-lang.com" target="_blank">
          <img src={sassLogo} className="logo sass" alt="Sass logo" />
        </a>
      </div>

      <h2>Vite + React + Sass</h2>
      <p className="read-the-docs">
        Click on the logos to learn more about each tool
      </p>

      <div>
        
      </div>
      
      <div className="card">
        <a className="center" href="https://github.com/alexandraweaver" target="_blank">
          <button className="credits">
            <img src={githubLogo} className="logo github" alt="Vite logo" />
            <p>Alex Alden Weaver</p>
          </button>
        </a>
        
        <h1>
          <a href="https://github.com/MengLinMaker/PWA-Vite-React-Boilerplate/generate" target="_blank">
            <button> Use This Boilerplate </button>
          </a>
        </h1>
      </div>

    </div>
  )
}

export default App
