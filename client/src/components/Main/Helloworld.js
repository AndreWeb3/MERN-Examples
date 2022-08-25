import React, { useState } from 'react'

function Helloworld() {
    const [hello, setHello] = useState('Click to Fetch')
    const [error, setError] = useState('')

    const getHelloAPI = () => {
        fetch("http://localhost:5000/hello")
        .then(res => res.json())
        .then(data => {
            setHello(data)
            console.log(data)
        })
    }

    const resetHello = () => {
        setHello('Click to Fetch')
    }

    return (
      <div>
        <button onClick={() => getHelloAPI()}>Hello API</button>
        <button onClick={() => resetHello()}>Reset</button>
        <div className="hello">
            {hello}
            {error}
        </div>
      </div>
    );
  }
  
  export default Helloworld