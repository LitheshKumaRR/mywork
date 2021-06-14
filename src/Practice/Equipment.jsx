import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loginAction,logoutAction} from './Equip.Action'

function Equipment(){
    let messageData=useSelector((state)=>{
        return state.wishMessage
    })

    let dispatch =useDispatch()

   let loginHandler=()=>{
       dispatch(loginAction())

    }
    let logoutHandler =()=>{
        dispatch(logoutAction())

    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                        <pre>{JSON.stringify(messageData)}</pre>
                        <h3>Message:{messageData.message}</h3>
                        </div>
                        <div className="card-body">
                            <button onClick={loginHandler} className="btn btn-success">LOGIN</button>
                            <button onClick={logoutHandler} className="btn btn-primary">LOGOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Equipment