/* Copyright Header Placeholder */
/* Name: App.tsx
 * Description: App component for homepage
 * Author: Created by Alex Alden Weaver on 6-11-2024 from template
 * Last modified: 6-11-2024 by Alex Alden Weaver
*/

import DhaBreathingExercise from './DhaBreathingExercise'
import DhaGraph from './DhaGraph'
import DhaSlider from './DhaSlider'

import './App.scss'
import githubLogo from './assets/github.svg'

function App() {
  return (
    <div className="App">

    <div>
        <DhaSlider/>
      </div>

      <br/><br/>
      
      <div>
        <DhaGraph/>
      </div>

      <br/><br/>
      
      <div>
        <DhaBreathingExercise/>
      </div>

      <br/><br/><br/>
      
      <div className="card">
        <a className="center" href="https://github.com/alexandraweaver" target="_blank">
          <button className="credits">
            <img src={githubLogo} className="logo github" alt="Vite logo" />
            <p>Alex Alden Weaver</p>
          </button>
        </a>
      </div>

    </div>
  )
}

export default App
