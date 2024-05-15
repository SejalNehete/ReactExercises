import React, { useState } from 'react'

const ShowHide = () => {
const [showhide, setshowhide] = useState(true)

  return (
    <div>
      <button onClick={()=>{ setshowhide(!showhide)}} >Show hide</button>
      {showhide && <h1>hello everyone</h1>}
    </div>
  )
}

export default ShowHide
