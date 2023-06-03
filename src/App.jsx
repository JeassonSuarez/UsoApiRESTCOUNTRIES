import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pais from './components/pure/Pais'
import Header from './components/pure/Header'
import Banderas from './components/containers/Banderas'
import { mode } from './models/mode.model'

function App() {
  const [mbg, setMbg] = useState(mode.lightMode)

  const modeBg = (m) => {
    setMbg(m);
  }

  return (
    <div className={`app ${mbg.title===mode.darkMode.title ? 'app-dark' : 'app-light'}`}>
      <Header modeBg={modeBg}/>
      <Banderas modeBg={mbg}/>
    </div>
  )
}

export default App
