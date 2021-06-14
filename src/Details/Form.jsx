import React, { useState } from 'react'

function Form(){
    let[msg,setMsg]=useState({name:'',email:"",password:''})
    let formHandler=(event)=>{
        setMsg({...msg,[event.target.name]:event.target.value})

    }
    let submitHandler=(event)=>{
        alert(JSON.stringify(msg))
        event.preventDefault()
 
    }
    return(
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={submitHandler}>
                    <div className="form-group">
                            <input type="text" placeholder=" Please enter your Name" onChange={formHandler} className="form-control" name='name' />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder=" Please enter Email" onChange={formHandler} className="form-control" value={msg.email} name='email'/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder=" Please enter Password" onChange={formHandler} className="form-control" value={msg.password} name='password'/>
                        </div>
                        <button  className="btn btn-primary">Submit</button>
                    </form>
                   
                </div>
            </div>
        </div>
        </>
    )
}

export default Form