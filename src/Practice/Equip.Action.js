const login="login"
const logout="logout"


let loginAction = () =>{
    return{
        type:login
    }

}

let logoutAction = ()=>{
    return{
        type:logout
    }

}

export {login,logout,loginAction,logoutAction}