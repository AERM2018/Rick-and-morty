import React, { useState } from 'react'

export const Search = ({changeCharacter}) => {

    const [inputValue, setInputValue] = useState("initialState");
    
    const handleInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        changeCharacter(inputValue)
    }
    return (
            <form className="input-group mb-3" onSubmit={handleSubmit}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nombre:</span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={handleInputChange}
                    />
            </form>
    )
}
