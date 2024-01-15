import React, { useState } from 'react'

const Search = () => {
    const list=[
        "Apple",
        "Banana",
        "mango",
        "strawberry",
        "cherry",
        "pineapple"
    ]
const [filterList, setfilterList] = useState(list)

    const handleSearch=(e)=>{
        if(e.target.value === ""){
            setfilterList(list);
            return;
        }
        const filterValues=list.filter(
            (item)=>item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
            );
        setfilterList(filterValues)
    }
  return (
    <>
        <div>
            Search:
            <input type='text' onChange={handleSearch}/>
        </div>
        {filterList && filterList.map((item,index)=>(
            <div key={index}>{item}</div>
        )) }
    </>
  )
}

export default Search