import React, {useState} from 'react'

const Form = ({setColor}) => {
    const [hexInput, setHexInput] = useState('#39727f')

    const handleSubmit = (e) => {
        e.preventDefault()
        setColor(hexInput)
    }

    return (
        <form onSubmit={((e) => handleSubmit(e))}>
            <input type="text" placeholder="#39727f" name="color" value={hexInput} onChange={(e) => setHexInput(e.target.value)}/> 
            <input type="submit" className="btn" />
        </form>
    )
}

export default Form