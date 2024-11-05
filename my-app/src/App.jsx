import { useState } from 'react'
import './App.css'
import { ChartTraser } from './components/ChartTraser/ChartTraser'
import Controls from './components/Controls/Controls'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChartTraser />
    </>
  )
}

export default App
