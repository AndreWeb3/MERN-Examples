import React, { useState } from 'react'
import axios from 'axios'
import '../../styles/styles.css'

function ModLocation(props) {
    const [city, setCity] = useState(props.modLoc.city)
    const [state, setState] = useState(props.modLoc.state)

    const onModify = (e) => {
        const locpath = (city+'-'+state).toLowerCase()
        e.preventDefault()
        //console.log(city+', '+state)
        try {
            axios.put(`http://localhost:5000/locations/update/${props.modLoc._id}`, 
            {
                'city': city, 
                'state': state, 
                'locpath': locpath
            })
            .then(res => {
                props.locCallback('Updated '+city+', '+state)
            })   
        } catch (error) {
            error.response.status(500).send(error);
        }
    }

    const onDelete = (e) => {
        try {
            axios.delete(`http://localhost:5000/locations/delete/${props.modLoc._id}`)
            .then(res => {
                props.locCallback('deleted '+props.modLoc.city+', '+props.modLoc.state)
                console.log(res.data);
            })   
        } catch (error) {
            error.response.status(500).send(error);
        }
    }

    return(
        <div className='inputLocPop'>
            <div className='addLocForm'>
                <h5>Modify Location</h5>
                    <form className='inputContainer'>
                        <input className='locInputField'
                            type='text' 
                            defaultValue={props.modLoc.city}
                            styles='width:100%'
                            onChange={e => setCity(e.target.value)}
                        /><br />
                        <input className='locInputField'
                            type='text' 
                            defaultValue={props.modLoc.state}
                            styles='width:100%'
                            onChange={e => setState(e.target.value)}
                        /><br />
                        <button className='locInputSubmitButton'
                            type="submit" 
                            onClick={(e) => onModify(e)}
                        >MODIFY</button>
                        <button className='locInputDeleteButton'
                            type="submit" 
                            onClick={(e) => onDelete(e)}
                        >DELETE</button>
                    </form>
            </div>
        </div>

    )
}

export default ModLocation