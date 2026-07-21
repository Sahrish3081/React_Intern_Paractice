import { useState } from 'react'
import AssemblyEndgame from './components/AssemblyEndgame'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <AssemblyEndgame/>
    </>
  )
}

export default App
