import React, {useState}from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Form(){
    let[form,setForm]=useState({
        email:'@gmail.com',
        password:''
    })
   let formHandler=(event)=>{
       setForm({...form,[event.target.name]:event.target.value})
   }
   let submitHandler=(event)=>{
       alert(JSON.stringify(form))
       event.preventDefault()

   }
    return(<>
    <div className="container mt-5">
        <div className="row">
            <div className="col md-4">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="email" value={form.email} name="email" onChange={formHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="password" value={form.password} name="password" onChange={formHandler}/>
                       <button className="btn btn-success" type="submit">REGISTRATION</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </>)
}
export default Form