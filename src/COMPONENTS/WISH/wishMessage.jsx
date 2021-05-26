import React from 'react'
import {sayGMAction,sayGNAction} from '../../Redux/Wish/wish.Action'
import {useSelector,useDispatch} from "react-redux"
let WishMessage =()=>{
    let messageData=useSelector ((state)=>{
        return state.wishMessage

    }
    )

    let dispatch= useDispatch();
   let SayGm=()=>{
       dispatch(sayGMAction())

    }

    let SayGN=()=>{
        dispatch(sayGNAction())

    }
    return(
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                        <pre>{JSON.stringify(messageData)}</pre>
                            <h4>message:{messageData.message}</h4>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-success mr-3" onClick={SayGm}>GM</button>
                            
                            <button className="btn btn-danger" onClick={SayGN}>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default WishMessage