import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pais from './components/pure/pais'
import Header from './components/pure/Header'
import Banderas from './components/containers/Banderas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
      {/* <Pais /> */}
      <Banderas />
    </div>
  )
}

export default App