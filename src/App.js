import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import WishMessage from './COMPONENTS/WISH/wishMessage'
import {store} from './Redux/Wish/store'
import {Provider} from "react-redux"
import Counter from './COMPONENTS/WISH/ProductCounter/Counter'
let App=()=>{
  return(
    <>
    <nav className="navbar navbar-dark bg-dark">
    <a href="/">React Redux Example</a>
    </nav>
    <Provider store={store}>
    <WishMessage/>
    <Counter/>

    </Provider>
   
    </>
  )
}

export default App