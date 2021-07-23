import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Form from './Components/Form'
import Success from './Components/Success'

const initialFormValues = {
  firstName: '',
  size: '',
  pepperoni: false,
  chicken: false,
  cheese: false,
  bacon: false,
  special: '',
}

const initialFormErrors = {

}
const initialOrders = []
const inDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [orders, setOrders] = useState(initialOrders)

  const changeForm = (name, value) => {
    // validate(name, value) 
    // for validation later on
    setFormValues({...formValues, [name]: value})    
  }
  
  return (
    
    <div>
      <div>
        <h2>Header Div</h2>
      <Link to=''>Home</Link>
      </div>

      <div> <h2>Content Div</h2>
        <Switch>
          <Route path='/pizza/success'>
            {/* Route to Success Page */}
            <Success />
          </Route>
          <Route path='/pizza' >
            {/* Route to Form Page */}
            <Form 
              change={changeForm} 
              values={formValues} 
            />
          </Route>
          <Route path='/'>
            {/* Route to Home Page */}
            <Home />
          </Route>
        </Switch>
        
      </div>

    </div>
  )
}

export default App
