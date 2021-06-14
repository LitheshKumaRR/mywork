import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Equipment from './Equipment'
import {Provider} from 'react-redux'
import {store} from './store'
function App(){
    return(<>
    <nav className="navbar navbar-dark bg-dark">
    <a href="/">React Redux Example</a>
    </nav>
    
        <Provider store={store}>
        <Equipment/>

    </Provider>

   
    </>
    )
}

export default App;