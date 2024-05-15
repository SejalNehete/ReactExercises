import React, { useState } from 'react'

const CheckBoxDelete = () => {
    
    const [arrCopy, setarrCopy] = useState(["AA", "BB", "CC", "DD"])
    const handleDelete = (i) => {
        const newarr = [...arrCopy]
        newarr.splice(i,1)
        //(index, deletecount)
        setarrCopy(newarr)
    }

    return (
        <div>
            <ul>
                {arrCopy.map((ele, index) => {
                    return <li key={index}>
                        <input type='checkbox'/>
                        {ele}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default CheckBoxDelete