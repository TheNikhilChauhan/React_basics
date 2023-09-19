import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(10)
  // let counter = 10

  const addValue = () => {
    // counter = counter + 1
    // console.log(counter)
    if(counter < 20){
      setCounter(counter+1)
    }
    
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Increase Value </button> <br/>
      <button
      onClick={removeValue}>Decrease Value </button>
      
    </>
  )
}

export default App
