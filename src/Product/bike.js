import React, { useState } from 'react'

let Bike = () =>{
    let[machine,setMachine]=useState({
        model:"ns160",
        engine:"bs4",
        colour:"red"
    })
    let bikeHandler=()=>{
        setMachine({...machine,model:"ns1160",engine:"bs6",colour:"rred"})

    }
    return(
        <>
        <pre>{JSON.stringify(machine)}</pre>
        <h1>BIKE NAME:{machine.model,machine.engine}</h1>
        <button onClick={bikeHandler}>NS</button>
        </>
    )
}

export default Bike