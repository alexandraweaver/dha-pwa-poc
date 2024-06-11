/* Copyright Header Placeholder */
/* Name: App.tsx
 * Description: App component for homepage
 * Author: Created by Alex Alden Weaver on 6-11-2024 from template
 * Last modified: 6-11-2024 by Alex Alden Weaver
*/

import DhaBreathingExercise from './components/DhaBreathingExercise'
import DhaGraph from './components/DhaGraph'
import DhaSlider from './components/DhaSlider'
import Footer from './components/Footer'
import Header from './components/Header'

import './styles/output.css'

function App() {
  return (
    <div className="App">

      <Header/>
      <br/><br/><br/>

      {/* DHA Components */}
      <div>
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
      </div>
      {/* End DHA Components */}

      <br/><br/><br/>
      <Footer/>

    </div>
  )
}

export default App