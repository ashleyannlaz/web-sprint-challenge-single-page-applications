import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Form from './Components/Form'

function App() {
  return (
    
    <div>
      <div>Header Div<br />
      <Link to=''>Home</Link>
      </div>
      
      <div> Content Div
        <Switch>
          <Route path='/pizza'>
            <Form />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        
      </div>

    </div>
  )
}

export default App
