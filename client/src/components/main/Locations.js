import React, { useState } from 'react'
import axios from 'axios'
import AddLocation from './AddLocation'
import ModLocation from './ModLocation'

function Locations() {
    const [locations, setLocations] = useState(null)
    const [status, setStatus] = useState(null)
    const [modLoc, setModLoc] = useState('')
    const [addLocPopup, setAddLocPopup] = useState(false)
    const [modLocPopup, setModLocPopup] = useState(false)
    //const [error, setError] = useState('')

    const getLocations = async () => {
        setLocations()
        setStatus('... fetching from MongoDB')
        try {
            const res = await axios.get('http://localhost:5000/locations')
            const data = res.data
                setLocations(data.reverse())
                setStatus(null)
                //console.log(data)  
        } catch (error) {
            setStatus(error.message)
            console.log(error)
        }
    }

    const addLocationCallback = async (location) => {
        setAddLocPopup(false) 
        getLocations()
        console.log("location: "+ location)
    }

    const modLocationCallback = async (confirmation) => {
        setModLocPopup(false) 
        getLocations()
        console.log(confirmation)
    }

    const clearLocs = () => {
        setLocations()
        setStatus('cleared')
    }

    return (
      <div>
        {addLocPopup ? <AddLocation locCallback={addLocationCallback}/> : <div />}
        {modLocPopup ? <ModLocation locCallback={modLocationCallback} modLoc={modLoc}/> : <div />}

        <button className='button'
            onClick={() => getLocations()}>Get Locations
        </button>        
        <button className='button'
            onClick={() => setAddLocPopup(true)}>Add Location
        </button>
        <button className='button'
            onClick={() => clearLocs()}>Clear
        </button>
        <div className="locationsContainer">
            {status}
            {locations && status!='cleared' ? 
            locations.map(location => {
                return (
                    <div key={location._id} className='locationResults'>
                        <a className='locItems' 
                            href='#'
                            onClick={() => (
                                setModLocPopup(true),
                                setModLoc(location)
                            )}
                        >{location.city+', '+location.state}
                        </a>
                    </div>        
                    )
            }) : <div/>}
            {/*error*/}
        </div>
      </div>
    );
    
}

export default Locations