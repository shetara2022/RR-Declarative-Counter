import React, { useState } from 'react'

function App() {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <h3>Counter:{counter}</h3>
    </div>
  )
}

export default App;
