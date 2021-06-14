import {login ,logout} from './Equip.Action'
let initialState={
    message:"welcome"

}

let messageReducer=(state=initialState,action)=>{
    switch(action.type){
        case login:
            return{
                message:'Please login'

            }
            case logout:
                return{
                    message:'Have a nice day '
                }
                default:
                    return state;
    }

}
export {messageReducer}