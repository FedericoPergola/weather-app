import React, { useState } from 'react'
import "../assets/css/Form.css"

const Form = ({newLocation}) => {
    const [city, setCity] = useState("")

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(city);

        if(city=== "" || !city) return;
        newLocation(city);
        
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className='input-group mb-3 mx-auto w-50'>
                    <input type="text" className='form-control' placeholder='Choose the city....' onChange={(e) => setCity(e.target.value)}></input>
                    {/* <button className='btn btn-primary input-text-group' type='submit'>Search</button> */}
                </div>
            </form>

        </div>
    )
}

export default Form