import React, { useState } from 'react'

const ToDoList = () => {
  const [todo, settodo] = useState([])
  const [element , setElement]=useState('')
  const handleAdd=(e)=>{
    e.preventDefault();
    settodo([...todo,element])
    setElement('')
  }
  const handleDelete=(i)=>{
        
  }
  return (
    <div>
       <form>
        <input type="text" name="todo" value={element} onChange={(e)=>setElement(e.target.value)} placeholder="Add a todo" />
        <button type="submit" onClick={(e)=>handleAdd(e)}>Add</button>
        <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
        
       </form>
    </div>
  ) 
}

export default ToDoList
