import { useState } from "react";
import "./App.css"

function App() {
  let [counter,setCounter] = useState(0);

  const addValue = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Rabi React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}> + value</button>
      <br/>
      <br/>
      <button onClick={removeValue}> - value</button>
    </>
  )
}

export default App
