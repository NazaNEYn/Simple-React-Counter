import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const up = () => {
    setCount(count + 1)
  }

  const down = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="container">
      <div className="counter-app">
        <p className="text">Counter App</p>
        <p className="number">{count}</p>
        <div className="count">
          <button onClick={up} className="up">
            +
          </button>
          <button onClick={down} className="down">
            -
          </button>
        </div>
        <button onClick={reset} className="reset">
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
