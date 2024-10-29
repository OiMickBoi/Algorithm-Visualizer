import { useState } from 'react'
import './App.css'
import { ChartTraser } from './components/ChartTraser/ChartTraser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChartTraser />
    </>
  )
}

export default App
