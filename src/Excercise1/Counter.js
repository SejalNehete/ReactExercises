import React, { useState } from 'react'

const Counter = () => {
    const [Count, setCount] = useState(0)
  return (
    <>
    <div>
        <button onClick={(
          
        )=>setCount(Count+1)}>Increment</button>
        {Count}
    </div>
    </>
  )
}

export default Counter