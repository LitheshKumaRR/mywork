import React from "react"
import Product from "./product"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App (){
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
            <a href="/">FLIPKART UI EXAMPLE</a>
        </nav>
        <Product/>
        </>
    )
}

export default App