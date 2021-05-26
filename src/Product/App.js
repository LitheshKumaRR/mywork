import React ,{useState} from 'react'

function Yes(){
    let[msg,setMsg]=useState({
        name:"Lithesh",
        age:21,
        place:"bangalore"

    })
    let changeHandler=()=>{
        setMsg({...msg,name:"litheshkumar",age:22,place:"bn"})

    }
    return(
        <>
        <pre>{JSON.stringify(msg)}</pre>
        <h3>hello:{msg.name}</h3>
        <button className="btn btn-success" onClick={changeHandler}>change</button>
        </>
    )
}

export default Yes