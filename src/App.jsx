import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MentionExample from './MentionExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MentionExample/>
      </div>
    </>
  )
}

export default App
