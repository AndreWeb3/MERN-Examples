import React, { useState } from 'react'
import axios from 'axios'

import '../../styles/styles.css'


function AddLocation(props) {
    const [inputLoc, setInputLoc] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()

    const onSubmit = (e) => {
        const locpath = (city+'-'+state).toLowerCase()
        console.log(locpath)
        setInputLoc({"city": city, "state": state, "locpath": locpath})
        e.preventDefault()
        console.log(city+', '+state)
        try {
            axios.post(`http://localhost:5000/locations/addLocation`, {"city": city, "state": state, "locpath": locpath})
            .then(res => {
                props.locCallback(inputLoc)
                console.log(res.data);
            })   
        } catch (error) {
            error.response.status(500).send(error);
        }
    }

    return(
        <div className='inputLocPop'>
            <div className='addLocForm'>
                <h5>Add New Location</h5>
                    <form className='inputContainer'>
                        <input className='locInputField'
                            type='text' 
                            placeholder='city'
                            styles='width:100%'
                            onChange={e => setCity(e.target.value)}
                        /><br />
                        <input className='locInputField'
                            type='text' 
                            placeholder='state'
                            styles='width:100%'
                            onChange={e => setState(e.target.value)}
                        /><br />
                        <button className='locInputSubmitButton'
                            type="submit" 
                            onClick={(e) => onSubmit(e)}
                        >SUBMIT</button>
                    </form>
            </div>
        </div>

    )
}

export default AddLocation