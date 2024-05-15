import React, { useState } from 'react'

const DropDown2 = () => {
    const [Country, setCountry] = useState("")
    const [State,setState]=useState("")
    const countries=["c1","c2","c3"]
    const states={
        c1:["s1","s2","s3"],
        c2:["s21","s22","s23"],
        c3:["s31","s32","s33"]

    }
    const handleCountryChange=(e)=>{
       const selectedCountry=e.target.value
        setCountry(selectedCountry);
        setState('');
    }
    const handleStateChange=(e)=>{
        const selectedState=e.target.value
        setState(selectedState)
    }
  return (
    <div>
        <select  value={Country} onChange={handleCountryChange}>
            <option value="">Select</option>
            {countries.map((country,index)=>(
                <option  key={index} value={country}>{country}</option>
            ))}

        </select>
        <select value={State} onChange={handleStateChange}>
            <option value="">Select</option>
            {states[Country] && states[Country].map((state,index)=>(
                <option key={index} value={state}>{state}</option>
            ))}
        </select>
    </div>
  )
}

export default DropDown2