import { useState } from 'react'
import './App.css'
import AnimatedSearchField from './components/animatedSearchField/AnimatedSearchField'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimatedSearchField></AnimatedSearchField>
    </>
  )
}

export default App
